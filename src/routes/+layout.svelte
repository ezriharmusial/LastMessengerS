<script>
	import '../app.postcss';
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';

    import { autoHideControls } from '$lib/ui';

	import { albums, artists, media } from "$lib/stores/data";
	import { UI } from '$lib/ui';

	import Nav from '$lib/components/Nav.svelte';
	import MediaPlayer from '$lib/components/MediaPlayer.svelte';
	import Visualizer from '$lib/components/ThreeVisualizer.svelte';
	import UserMenu from '$lib/components/UserMenu.svelte';
	import { Body } from "svelte-body";
	import { player } from '$lib/mediaplayer';

	let pwa

	/** @type {import('./$types').PageData} */
	export let data

	onMount(async () => {
		if (data) {

			albums.set(data.albums)
			artists.set(data.artists)
			media.set(data.media)
			$player.playlist = data.media.media

		}
		// !dev && browser && (pwa = (await import('$lib/components/system/PWA.svelte')).default)
		if (browser) document.querySelector('body')?.classList.remove('init');
		document.querySelector('body')?.classList.add('loaded');
	});
	// $: console.log('pagedata', data)
</script>

<svelte:head>
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma-social@2/css/all.min.css" />
</svelte:head>

<svelte:window on:mousemove={autoHideControls} on:touchmove={autoHideControls}/>
<Body class="bg-white text-white {$UI.menu.visible ? "off-canvas" : '' } {$UI.darkMode ? 'dark' : ''}" />

<header class="background absolute top-0 left-0">
	<Visualizer />
	<MediaPlayer />
</header>

<main class="main p-4 pt-24">
	<slot />
</main>

{#if pwa}
<!-- <svelte:component this={pwa} /> -->
{/if}


<div class="interaction">
	<!-- {#if $media?.selected} -->
	<!-- {/if} -->
	<Nav />
	<UserMenu />
</div>

<style>
	.main {
		overflow-y: auto;
	}
</style>