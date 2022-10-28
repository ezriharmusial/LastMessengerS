<script lang="ts">
	import '../app.postcss';
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';
	import { Body } from "svelte-body";
	import { player } from '$lib/mediaplayer';
	import type { SvelteComponent } from 'svelte/internal';

    import { autoHideControls } from '$lib/ui';

	import { albums, artists, media } from "$lib/stores/data";
	import { UI } from '$lib/ui';

	import Nav from '$lib/components/Nav.svelte';
	import MediaPlayer from '$lib/components/MediaPlayer.svelte';
	import Meta from '$lib/components/sharing/Meta.svelte';

	// import Visualizer from '$lib/components/ThreeVisualizer.svelte';
	// import UserMenu from '$lib/components/UserMenu.svelte';

	let pwa:SvelteComponent
	let innerHeight:number

	/** @type {import('./$types').PageData} */
	export let data

	onMount(async () => {
		if (data) {
			// TODO: Is this neccesary?
			// Set Basic Data
			albums.set(data.albums)
			artists.set(data.artists)
			media.set(data.media)

			// Initialize playlist
			$player.playlist = data.media.media

			// Initialize Previous, Current, Next track.
			$player.track = $player?.playlist[$player?.index] ? $player.playlist[$player.index] : false
			$player.next = $player?.playlist[$player?.index + 1] ? $player.playlist[$player.index + 1] : false
			$player.previous = $player?.playlist[$player?.index - 1] ? $player.playlist[$player.index - 1] : false
		}
		// !dev && browser && (pwa = (await import('$lib/components/system/PWA.svelte')).default)
		if (browser) document.querySelector('body')?.classList.remove('init');
		document.querySelector('body')?.classList.add('loaded');
	});
	// $: console.log('pagedata', data)
</script>

<svelte:head>
	<Meta {data}/>
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma-social@2/css/all.min.css" />
</svelte:head>

<svelte:window bind:innerHeight on:mousemove={autoHideControls} on:touchmove={autoHideControls}/>

<Body class="{$UI.menu.visible ? "off-canvas" : '' } bg-black text-white {$UI.darkMode ? 'dark' : ''}" />

<header class="absolute top-0 left-0 w-full h-full">
	<!-- <Visualizer /> -->
</header>

<main class="main absolute top-0 left-0 w-full h-full overflow-y-auto overflow-x-hidden">
	<slot />
</main>

{#if pwa}
<!-- <svelte:component this={pwa} /> -->
{/if}


<div class="interaction">
	<MediaPlayer />
	<Nav />
	<!-- <UserMenu /> -->
</div>