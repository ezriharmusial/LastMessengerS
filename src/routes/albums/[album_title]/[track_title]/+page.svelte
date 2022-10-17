<!-- src/routes/[slug]/+page.svelte -->
<script lang="ts">
	import { player } from '$lib/mediaplayer';
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
		if (autoScroll)
		lyricsScroller.scrollTo({
			left: 0,
			top: ($player.progress / 100) * (lyricsScroller?.scrollHeight - lyricsScroller.offsetHeight),
			behavior: 'smooth'
		})
	}

	// console.dir('data', data)
	$: if(data.track_number != data.track_number)
	$player.skipTo(data.track_number)
</script>

{#if data.image}


<article class="absolute v-max h-max top-0 left-0 flex flex-col text-white p-4 backdrop-brightness-50 mt-14 md:p-24" in:fly={{x: innerWidth}} out:fly={{x: -innerWidth}}>
	<header class="mb-4 text-right">
		<h3 class="title text-3xl text-white">Lyrics</h3>
	</header>
	<main class="columns:1 md-content lyrics text-xl xs:text-2xl sm:text-4xl text-right text-bold"
		on:mouseover={() => autoScroll = false} on:focus={() => autoScroll = false} on:mouseleave={() => autoScroll = true} bind:this={lyricsScroller}>
		<svelte:component this={data.content} />
	</main>
	<footer class="px-10 pt-10 pb-4 flex items-center" transition:fade>
		<img data-amplitude-song-info="cover_art_url"  alt="Track CoverArt" class="bg-gradient-to-br from-slate-900 to-black w-24 h-24 rounded-md mr-6 border border-bg-player-light-background dark:border-cover-dark-border"
		src={data.image ||
			getArtistImage(data.track_artist)}/>

			<div class="flex flex-col">
				<span data-amplitude-song-info="name" class="font-sans text-lg font-medium leading-7 text-slate-900 dark:text-white">
					{(data.track_number < 10) ? "0" + data.track_number : data.track_number }. {data.title}
				</span>
				<span data-amplitude-song-info="artist" class="font-sans text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
					by <a href="/artists/{data.track_artist}">{data.track_artist}</a>
				</span>
				<span data-amplitude-song-info="album" class="font-sans text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
					from <a href="/albums/{$albums[0]?.slug}" alt="">{data.release_album}</a>
				</span>
			</div>
		</footer>
	</article>


	<!-- <section class="section">
		<tt><pre>{JSON.stringify(data, null, 4)}</pre></tt>
	</section> -->
{/if}

	<style>
		main {
			height:calc(100vh - 30rem);
			overflow:hidden;
			overflow-y:scroll;
		}
	</style>