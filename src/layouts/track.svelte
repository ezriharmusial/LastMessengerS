<!-- src/routes/[slug]/+page.svelte -->
<script lang="ts">
	import { browser } from '$app/environment';
	import { onMount, onDestroy } from 'svelte';

	import { player } from '$lib/mediaplayer';
	import { UI, UIState } from '$lib/ui';
	import { Body } from "svelte-body";
	import { seoProps } from "$lib/components/SEO/seo";
	import { albums, artists, getArtistImage, media } from "$lib/stores/data";

	import lazyload from 'vanilla-lazyload';

	import Seo from "$lib/components/SEO/SEO.svelte";

	export let title, order, artist, featuring, image, featuredImage, twitterImage, ogImage, ogSquareImage, theme, alignImage, color, bgColor, bgOpacity, bg, bgSize, bgPosition, bgBlend = ""

	export let data
	if (browser && !document.lazyloadInstance) {
		document.lazyloadInstance = new lazyload();
	}

	let lyricsScroller
	let scrollerTimer
	let autoScroll = true;
	let loaded = false;
	let position;

	onMount(() => {
		// Set UI
		$UI.menu.visible = false;
		$UI.controls.visible = true;
		if ($UIState == 'navigation') UIState.toggle();
		loaded = true;
		// Get The right Artists
		artist = data.artists.find(artiest => artiest.title == artist) || artist
		// play track according to URL
		$player.index = order;

		if (data ) {

		albums.set(data.albums)
		artists.set(data.artists)
		media.set(data.media)

			if (!$player.track) {
				// TODO: Is this neccesary?
				// Set Basic Data
				// Initialize playlist
				$player.playlist = data.media.media

				// Initialize Previous, Current, Next track.
				$player.track = $player.playlist.find(track => track.order == $player.index) || false
				$player.next = $player.playlist.find(track => track.order == $player.index + 1) || false
				$player.previous = $player.playlist.find(track => track.order == $player.index - 1) || false
			}
		}
		scrollerTimer = setInterval(printOffsetLeft, 10);
		$UI.trackPage.visible = true
	});

	onDestroy(() => {
		clearInterval(scrollerTimer);
		$UI.trackPage.visible = false
	});

	function printOffsetLeft() {
		if (lyricsScroller && autoScroll)
		position = ($player.progress / 100) * lyricsScroller.offsetHeight;
	}

	// $: console.log('$player.track', $player.index, $player.track.order, $player.track);
</script>


<svelte:head>
<Seo {...seoProps(title, image, featuredImage || image, twitterImage || image, ogImage || image, ogSquareImage || image  )} />
</svelte:head>

<Body class="{theme == 'light' ? 'bg-white' : 'bg-dark'}"/>

{#if $player?.track}
<article class="transition-colors duration-1000 fixed w-full h-full top-0 left-0 p-4 portrait:pt-24 {bgColor}">
	<header class="transition-colors duration-700 absolute w-full h-full top-0 left-0 {color} {bgColor} {bgSize} {bgBlend} transition-opacity duration-700 {bgOpacity} delay-0 {bgPosition}" class:opacity-0={!$player.playing} class:delay-3000={$player.playing} style="background-image: url('/images/animated-bg/{bg}.gif'); transition: background 3s;">
	</header>
	<main class="absolute top-0 left-0 right-0 bottom-0 h-full {alignImage == 'left' ? 'left' : 'right'}">
		<div class="lyrics absolute {color} portrait:left-0 portrait:right-0 portrait:w-full portrait:px-5 landscape:w-4/5 landscape:sm:w-2/3 landscape:md:w-2/3 landscape:lg:w-2/3 landscape:xl:w-1/2 {alignImage == 'left' ? 'left landscape:xs:left-4 landscape:sm:left-1/5 lg:left-1/3 xl:left-1/2 right-14' : 'right landscape:xs:right-4 landscape:sm:right-1/5 lg:right-1/3 xl:right-1/2 left-14'} landscape:text-4xl portrait:text-4xl landscape:xs:text-xl landscape:sm:text-5xl landscape:md:text-6xl landscape:lg:text-6xl landscape:xl:text-7xl {$player.track?.alignImage != 'left' ? 'text-left' : 'text-right'} text-bold transition-opacity duration-700 delay-0 ease-in" class:opacity-0={!$player.lyrics || !$player.playing} class:delay-1000={$player.playing} style="transform:translate(0vw, {'-' + position + 'px'});" on:mouseover={() => (autoScroll = false)} on:mouseleave={() => (autoScroll = true)} on:focus={() => (autoScroll = false)} on:mouseleave={() => (autoScroll = true)} bind:this={lyricsScroller}>
			<slot />
		</div>
	</main>
	<div class="images transition-opacity duration-700 delay-0 ease-in-out" class:opacity-10={!$player.playing} class:delay-1000={$player.playing}>
		<img class="fixed bottom-0 portait:h-3/4 landscape:xk:h-4/5 landscape:h-2/3 drop-shadow-2xl {alignImage == 'left' ? '-left-30 landscape:-left-12 landscape:sm:-left-20 landscape:xl:left-0 portrait:-left-16' : alignImage == 'right' ? '-right-30 landscape:-right-12 landscape:sm:-right-20 landscape:xl:right-0 portrait:-right-16' : 'bottom-50 left-50 translate-x-1/2'}" data-amplitude-song-info="cover_art_url" alt="Picture of {artist.title}" src={artist.title != 'LastMessengerS' ? getArtistImage(artist.title) : '/images/Africa4Africa-Unity_Album_Poster-Web.jpg'}/>
		{#if Array.isArray(featuring) && featuring.length < 3}
		<div class="fixed bottom-0 left-0 portait:w-3/4 flex flex-row w-full">
			{#each featuring as artist, i}
			{#if getArtistImage(artist)}
			<img class="portrait:w-3/4 sm:-ml-20 landscape:sm:w-1/4 lg:-ml-50" width={innerWidth / (featuring.length * 0.5) + 1} data-amplitude-song-info="cover_art_url" alt="Picture of {artist}" src={getArtistImage(artist)} />
			{/if}
			{/each}
		</div>
		{:else if featuring && getArtistImage(featuring)}
		<img class="h-3/4 fixed bottom-0 light-0" data-amplitude-song-info="cover_art_url" alt="Picture of {featuring}" src={getArtistImage(featuring)}
		/>
		{/if}
	</div>
</article>
{/if}

<!-- <a class="dev-title absolute font-bold drop-shadow-2xl- transition-opacity duration-700 opacity-0 bottom-5 {theme == "dark" ? ' text-white' : ' text-black'} {alignImage == 'left' ? 'left-1/4 right-5 text-right' : 'right-1/4 left-5'} px-4 py-3 marker text-4xl {bgColor} {color}" class:opacity-100={!lyrics} href="/artists/">
	{order < 10 ? '0' + order : order}. {artist} - {title}
	{(featuring) ? ( typeof Array.isArray(featuring) && featuring?.length > 2 ) ? 'feat. Various Artists' : 'feat. ' + featuring : '' }
</a> -->

<style>
	main {
		overflow: hidden;
		max-height: 100vh;
	}

	main.right {
		mask-image: linear-gradient(175deg, transparent 10%, black 20%, black 60%, transparent 80%);
	}
	main.left {
		mask-image: linear-gradient(185deg, transparent 10%, black 20%, black 60%, transparent 80%);
	}
</style>