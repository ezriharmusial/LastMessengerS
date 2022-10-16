<!-- src/routes/[slug]/+page.svelte -->
<script lang="ts">
	import { mediaPlayer } from '$lib/mediaplayer';
	import { UI, UIState } from '$lib/ui';
	import { onMount, onDestroy } from 'svelte';

	/** @type {import('./$types').PageData} */
	export let data;

	let lyricsScroller: HTMLElement
	let scrollerTimer
	let autoScroll = true

	onMount(() => {
		if ($UIState == 'navigation')
		UIState.toggle

		$UI.menu.visible = false
		$UI.controls.visible = true
		scrollerTimer = setInterval(printOffsetLeft, 10)
	})

	onDestroy(() => {
		clearInterval(scrollerTimer)
	})

	function printOffsetLeft(){
		console.log(
			'lyrics',
			lyricsScroller?.scrollHeight,
			lyricsScroller?.offsetTop,
			lyricsScroller?.offsetLeft,
			autoScroll,
			Math.floor($mediaPlayer.player?.currentTime / ( $mediaPlayer.player?.duration ) * 100) + "%",
		)
		if (autoScroll)
		lyricsScroller.scrollTo( 0 ,$mediaPlayer.player?.currentTime / ( $mediaPlayer.player?.duration ) * (lyricsScroller?.scrollHeight - lyricsScroller.offsetHeight))
	}
</script>

{#if data.image}
<!-- <img class="fixed top-0 bottom-0 left-0 right-0 saturate-90 contrast-90" src="{data.image || '/uploads/albumcovers/happysunofyah.jpg'}" alt="Cover art for {data.title}" /> -->
{/if}


<article class="m-auto text-white p-4 backdrop-brightness-50">
	<header class="mb-4 text-right">
			<!-- <h1 class="text-3xl text-white">{ data.title }</h1> -->
			<h2 class="title text-3xl text-white">Lyrics</h2>
			<!-- <h2 class="text-2xl text-white">by {data.artist}</h2> -->
	</header>
	<main on:mouseover={() => autoScroll = false} on:mouseleave={() => autoScroll = true} bind:this={lyricsScroller} class="columns:1 md-content lyrics text-xl xs:text-2xl sm:text-4xl text-right text-bold">
		<svelte:component this={data.content} />
	</main>
</article>


<!-- <section class="section">
	<tt><pre>{JSON.stringify(data, null, 4)}</pre></tt>
</section> -->

<style>
	main {
		height:calc(100vh - 30rem);
		overflow:hidden;
		overflow-y:scroll;
	}
</style>