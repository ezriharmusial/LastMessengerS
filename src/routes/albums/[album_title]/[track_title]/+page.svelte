<!-- src/routes/[slug]/+page.svelte -->
<script lang="ts">
	import { play, player, skipTo } from '$lib/mediaplayer';
	import { getArtistImage, albums } from '$lib/stores/data';
	import { UI, UIState } from '$lib/ui';
	import { onMount, onDestroy } from 'svelte';
	import { fade, fly } from 'svelte/transition';

	/** @type {import('./$types').PageData} */
	export let data;

	let lyricsScroller: HTMLElement
	let scrollerTimer
	let autoScroll = true
	let loaded = false

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
		lyricsScroller.scrollTo({
			left: 0,
			top: ($player.progress / 100) * (lyricsScroller?.scrollHeight - lyricsScroller.offsetHeight),
			behavior: 'smooth'
		})
	}
</script>

{#if $player?.track}
<article class="fixed w-full h-full top-0 left-0 p-4 pt-24 backdrop-brightness-50">
	<header class="backdrop-blur text-white">


	<!-- {#if $player.track.featuring}
	<div class="">
		<p>
			{#each $player.track.featuring as featuring, i}
			{featuring}{$player.track.featuring.length > i + 1 ? ", " :""}
			{/each}
		</p>
	</div>
	{:else}
		No featured artists
	{/if}
 -->

	</header>
	<main class="lyrics columns:1 absolute text-white top-20 bottom-1/3 right-0 w-1/2 overflow-hidden overflow-y-auto flex flex-col md-content text-xl xs:text-2xl sm:text-4xl text-right text-bold"
		on:mouseover={() => autoScroll = false} on:focus={() => autoScroll = false} on:mouseleave={() => autoScroll = true} bind:this={lyricsScroller}>
		{#if data.content}
		<svelte:component this={data.content} />
		{/if}
	</main>
	<footer class="absolute bottom-32 left-10 flex items-center" transition:fade>
		<img data-amplitude-song-info="cover_art_url"  alt="Track CoverArt" class="bg-gradient-to-br from-slate-900 to-black w-32 h-32 rounded-md mr-6 border border-bg-player-light-background dark:border-cover-dark-border"
			src={$player.track.image ||
			getArtistImage($player.track.artist)}/>

		<div class="flex flex-col">
			<p class="text-5xl font-semibold">
				{($player.track.order < 10) ? "0" + $player.track.order : $player.track.order }. {$player.track.artist} - {$player.track.title} {$player.track.featuring ? 'feat. ' + $player.track.featuring : ""}
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
			<p data-amplitude-song-info="album" class=" text-gray-500 dark:text-gray-400">
				from <a href="/albums/{$albums[0]?.slug}" alt="">{$player.track.release_album}</a> ({$player.track.date})
			</p>
			{/if}
		</div>


		<img class="fixed bottom-0 right-0 h-1/2" data-amplitude-song-info="cover_art_url"  alt="Picture of {$player.track.featuring}"
			src={getArtistImage($player.track.artist)}/>

		{#if $player.track.featuring?.length}
		<div class="fixed bottom-0 left-0 flex flex-row w-full">
		{#each $player.track.featuring as artist, i}
		<img class="" width={innerWidth / $player.track.featuring.length + 1} data-amplitude-song-info="cover_art_url"  alt="Picture of {artist}"
			src={getArtistImage(artist)}/>
		{/each}
		</div>
		{:else if $player.track.featuring}
		<img class="fixed bottom-0 left-0" data-amplitude-song-info="cover_art_url"  alt="Picture of {$player.track.featuring}"
			src={getArtistImage($player.track.featuring)}/>
		{/if}

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