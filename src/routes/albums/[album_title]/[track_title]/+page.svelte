<!-- src/routes/[slug]/+page.svelte -->
<script lang="ts">
	import { play, player, skipTo } from '$lib/mediaplayer';
	import { getArtistImage, albums } from '$lib/stores/data';
	import { UI, UIState } from '$lib/ui';
	import { onMount, onDestroy } from 'svelte';
	import { fade, fly } from 'svelte/transition';
	import mobile from "is-mobile"

	/** @type {import('./$types').PageData} */
	export let data;

	let lyricsScroller: HTMLElement
	let scrollerTimer
	let autoScroll = true
	let loaded = false
	let position

	onMount(() => {
		// Set UI
		$UI.menu.visible = false
		$UI.controls.visible = true
		if($UIState == 'navigation')
		UIState.toggle()
		loaded = true
		// play track according to URL
		$player.index = data.order

		scrollerTimer = setInterval(printOffsetLeft, 10)
	})

	onDestroy(() => {
		clearInterval(scrollerTimer)
	})

	function printOffsetLeft(){
		// console.log(
		// 	'lyrics',
		// 	lyricsScroller?.scrollHeight,
		// 	lyricsScroller?.offsetTop,
		// 	lyricsScroller?.offsetLeft,
		// 	autoScroll,
		// 	Math.floor($player?.currentTime / ( $player?.duration ) * 100) + "%",
		// )
		if (lyricsScroller && autoScroll)
		position = ($player.progress / 100) * lyricsScroller.offsetHeight
		// lyricsScroller.scrollTo({
		// 	left: 0,
		// 	top: ($player.progress / 100) * (lyricsScroller?.scrollHeight - lyricsScroller.offsetHeight),
		// 	behavior: 'smooth'
		// })
	}

	$: console.log('position', position)
</script>

{#if $player?.track}
<article class="fixed w-full h-full top-0 left-0 p-4 portrait:pt-24 {$player.track.bg_color}">
	<header class="absolute w-full h-full top-1 left-0 backdrop-blur {$player.track.color} {$player.track.bg_color} {$player.track.bg_size} bg-no-repeat {$player.track.bg_blend} transition-opacity duration-701 {$player.track.bg_opacity} delay-0 {$player.track.bg_position}" class:opacity-0={!$player.playing} class:delay-1000={$player.playing} style="background-image: url('/images/animated-bg/{$player.track.bg}.gif');">
	</header>
	<main class="absolute top-0 left-0 right-0 bottom-0">
		<div class="lyrics absolute {$player.track.color} m-4 portrait:w-4/5 w-1/2 {$player.track.align_image == 'left' ? 'left-1/2 right-4' :'left-4 right-1/2'}  overflow-hidden flex flex-col md-content text-xl portrait:text-4xl xs:text-xl sm:text-4xl lg:text-6xl {$player.track.align_image != 'left' ? 'text-left' :'text-right'} text-bold transition-opacity duration-700 delay-0 ease-in-out"
			class:opacity-20={!$player.playing}
			class:delay-1000={$player.playing}
			style="transform:translate(0vw, {'-' + position + 'px'});"
			on:mouseover={() => autoScroll = false} on:focus={() => autoScroll = false} on:mouseleave={() => autoScroll = true} bind:this={lyricsScroller}>
			{#if data.content}
			<svelte:component this={data.content} />
			{/if}
		</div>

		<div class="images">
			<img class="fixed bottom-0 portait:w-3/4 landscape:h-4/5 {$player.track.align_image == 'center' ? 'bottom-50 left-50 translate-x-1/2' : $player.track.align_image + '-0'} h-1/2 drop-shadow-2xl" data-amplitude-song-info="cover_art_url"  alt="Picture of {$player.track.featuring}"
				src={$player.track.artist != "LastMessengerS" ? getArtistImage($player.track.artist) : "/images/Africa4Africa-Unity_Album_Poster-Web.jpg"}/>

			{#if $player.track.featuring?.length}
			<div class="fixed bottom-0 left-0 portait:w-3/4 flex flex-row w-full">
			{#each $player.track.featuring as artist, i}
			{#if  getArtistImage(artist)}
			<img class="portrait:w-3/4 sm:-ml-20 landscape:sm:w-1/4 lg:-ml-50" width={innerWidth / ($player.track.featuring.length * 0.5) + 1} data-amplitude-song-info="cover_art_url"  alt="Picture of {artist}"
				src={getArtistImage(artist)}/>
			{/if}
			{/each}
			</div>
			{:else if $player.track.featuring && getArtistImage($player.track.featuring)}
			<img class="h-3/4 fixed bottom-0 light-0" data-amplitude-song-info="cover_art_url"  alt="Picture of {$player.track.featuring}"
				src={getArtistImage($player.track.featuring)}/>
			{/if}
		</div>

	</main>

	<footer class="absolute bottom-32 left-0 flex portrait:flex-col items-center px-10 portrait:px-4 transition-opacity duration-700 delay-0" class:opacity-0={$player.playing} class:delay-1000={$player.playing}>
		<img class="bg-gradient-to-br from-slate-900 to-black portrait:w-28 portrait:w-full portrait:mx-auto portrait:my-8 md:w-32 md:h-32 lg:w-48 lg:h-48 rounded-md mr-6 portrait:mr-3 border border-bg-player-light-background dark:border-cover-dark-border" data-amplitude-song-info="cover_art_url"  alt="Track CoverArt"
			src={$player.track.image ||
			getArtistImage($player.track.artist)}/>

		<div class="flex flex-col {$player.track.color}">
			<p class="font-semibold">
				<span class="portrait:text-2xl landscape:text-4xl landscape:lg:text-5xl">
					{($player.track.order < 10) ? "0" + $player.track.order : $player.track.order }. {$player.track.artist} - {$player.track.title} {$player.track.featuring ? 'feat. ' + $player.track.featuring : ""}
				</span>
				<span data-amplitude-song-info="album" class=" text-gray-500 dark:text-gray-400 text-md">
					<a href="/albums/{$albums[0]?.slug}" alt="">{$player.track.release_album}</a>
				</span>
			</p>
			{#if $player.track.genres}
			<p>
				{#each $player.track.genres as genre, i}
				{genre}{$player.track.genres.length > i + 1 ? ", " :""}
				{/each}
			</p>
			{/if}

			{#if $player.track.producer}
			<p> Produced by:
				{#each $player.track.producer as producer, i}
				{producer}{$player.track.producer.length > i + 1 ? ", " :""}
				{/each}
			</p>
			{/if}
			{#if $player.track.release_album}
				{$player.track.release_album}
			{/if}
		</div>
	</footer>
</article>
{/if}

<!-- <section class="section">
	<tt><pre>{JSON.stringify(data, null, 4)}</pre></tt>
</section> -->

<style lang="scss">
	main {
		overflow:hidden;
		overflow-y:scroll;
	}
</style>