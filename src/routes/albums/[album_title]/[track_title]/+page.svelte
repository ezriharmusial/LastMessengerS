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
		$player.index = data.track_number

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
<article class="absolute v-max h-max top-0 left-0 p-4 backdrop-brightness-50 md:p-24">
	<header class="backdrop-blur text-white">
	<div class="">
		<p>
			{$player.track.track_artist} - {$player.track.title}
		</p>
	</div>

	{#if $player.track.featured_track_artists}
	<div class="">
		<p>
			{#each $player.track.featured_track_artists as featuring, i}
			{featuring}{$player.track.featured_track_artists.length > i + 1 ? ", " :""}
			{/each}
		</p>
	</div>
	{:else}
		No featured artists
	{/if}

	{#if $player.track.genres}
	<div class="">
		<p>
			{#each $player.track.genres as genre, i}
			{genre}{$player.track.genres.length > i + 1 ? ", " :""}
			{/each}
		</p>
	</div>
	{:else}
		No genres
	{/if}

	{#if $player.track.release_album}
	<div class="">
		<p>
			{$player.track.release_album}
		</p>
	</div>
	{:else}
		No release albums
	{/if}

	<div class="">
		<p>
			{$player.track.release_year}
		</p>
	</div>

	{#if $player.track.producer}
	<div class="">
		<p>
			{#each $player.track.producer as producer, i}
			{producer}{$player.track.producer.length > i + 1 ? ", " :""}
			{/each}
		</p>
	</div>
	{:else}
		No producers
	{/if}



	</header>
	<main class="columns:1 absolute text-yellow-50 top-0 flex flex-col left-0 md-content lyrics text-xl xs:text-2xl sm:text-4xl text-right text-bold"
		on:mouseover={() => autoScroll = false} on:focus={() => autoScroll = false} on:mouseleave={() => autoScroll = true} bind:this={lyricsScroller}>
		<svelte:component this={$player.track.content} />
	</main>
	<footer class="flex items-center" transition:fade>
		<img data-amplitude-song-info="cover_art_url"  alt="Track CoverArt" class="bg-gradient-to-br from-slate-900 to-black w-24 h-24 rounded-md mr-6 border border-bg-player-light-background dark:border-cover-dark-border"
			src={$player.track.image ||
			getArtistImage($player.track.track_artist)}/>

		<div class="flex flex-col">
			<span data-amplitude-song-info="name" class="font-sans text-lg font-medium leading-7 text-slate-900 dark:text-white">
				{($player.track.track_number < 10) ? "0" + $player.track.track_number : $player.track.track_number }. {$player.track.title}
			</span>
			<span data-amplitude-song-info="artist" class="font-sans text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
				by <a href="/artists/{$player.track.track_artist}">{$player.track.track_artist}</a>
			</span>
			<span data-amplitude-song-info="album" class="font-sans text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
				from <a href="/albums/{$albums[0]?.slug}" alt="">{$player.track.release_album}</a>
			</span>
		</div>
	</footer>
</article>
{/if}

<!-- <section class="section">
	<tt><pre>{JSON.stringify(data, null, 4)}</pre></tt>
</section> -->

<style lang="scss">
	main {
		height:100vh;
		width: 100vw;
		overflow:hidden;
		overflow-y:scroll;

		div {
			display:flex;
			justify-content: center;
			flex-direction: column;
			font-size: 10vw;
			height: 100vh;
			font-weight: bolder;
			vertical-align: center;
		}
	}
</style>