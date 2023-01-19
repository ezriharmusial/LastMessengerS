<script lang="ts">
	import '../theme.postcss';
	import '@skeletonlabs/skeleton/styles/all.css';
	import '../app.postcss';
	import { onMount } from 'svelte';
	import { browser, dev } from '$app/environment';
	import { Body } from "svelte-body";
	import { player } from '$lib/mediaplayer';
	import type { SvelteComponent } from 'svelte/internal';

    import { autoHideControls } from '$lib/ui';

	import { albums, artists, media } from "$lib/stores/data";
	import { UI } from '$lib/ui';

	import Nav from '$lib/components/Nav.svelte';
	import MediaPlayer from '$lib/components/MediaPlayer.svelte';
	import isMobile from 'is-mobile';

	import lazyload from 'vanilla-lazyload';

	// Initiate lazy load
	if (browser && !document.lazyloadInstance) {
		document.lazyloadInstance = new lazyload();
	}
	// import Visualizer from '$lib/components/ThreeVisualizer.svelte';
	// import UserMenu from '$lib/components/UserMenu.svelte';

	let pwa:SvelteComponent
	let innerHeight:number

	/** @type {import('./$types').PageData} */
	export let data

	onMount(async () => {
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
		// !dev && browser && (pwa = (await import('$lib/components/system/PWA.svelte')).default)
		if (browser) document.querySelector('body')?.classList.remove('init');
		document.querySelector('body')?.classList.add('loaded');
	});
	// $: console.log('pagedata', data)
</script>

<svelte:window bind:innerHeight on:mousemove={autoHideControls} on:touchmove={autoHideControls}/>

<Body class="{$UI.menu.visible ? "off-canvas" : '' } bg-black text-white {$UI.darkMode ? 'dark' : ''}" />

<header class="absolute top-0 left-0 w-full h-full">
	<!-- <Visualizer /> -->
</header>

{#if pwa}
<!-- <svelte:component this={pwa} /> -->
{/if}

<main class="main absolute top-0 left-0 w-full h-full overflow-y-auto overflow-x-hidden">
	<slot />
</main>

<div class="interaction">
	{#if $player.track}
	<MediaPlayer />
	{/if}
	<Nav />
	<!-- <UserMenu /> -->
</div>


{#if dev && $UI.showDebug.visible}
<div class="responsive-helper fixed text-sm b-2 h-1/4 w-64 overflow-hidden overflow-y-scroll m-3 bottom-20 left-0 text-purple-900 bg-yellow-300" style="z-index:3000;">
	<div>
		player:{$player.state} <br />
		playing:{$player.playing}
	</div>
	<div>
		{isMobile() ? 'mobile' : 'desktop'}
	</div>
	<div class="landscape:hidden">
		:portrait
		<span class="portrait:xs:visible portrait:sm:hidden">:xs</span>
		<span class="portrait:sm:visible portrait:md:hidden">:sm</span>
		<span class="portrait:md:visible portrait:lg:hidden">:md</span>
		<span class="portrait:lg:visible portrait:xl:hidden">:lg</span>
		<span class="portrait:xl:visible">:xl</span>
	</div>
	<div class="portrait:hidden">
		:landscape
		<span class="landscape:xs:visible landscape:sm:hidden">:xs</span>
		<span class="landscape:sm:visible landscape:md:hidden">:sm</span>
		<span class="landscape:md:visible landscape:lg:hidden">:md</span>
		<span class="landscape:lg:visble landscape:xl:hidden">:lg</span>
		<span class="landscape:xl:visible">:xl</span>
	</div>
	<pre><tt>
		{JSON.stringify(data, null, 1)}
	</tt></pre>
</div>
{/if}