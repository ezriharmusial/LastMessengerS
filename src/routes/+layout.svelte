<script>
	import '../app.postcss';
	import { onMount } from 'svelte';
	import { browser, dev } from '$app/environment';
	import { albums, artists, media } from "$lib/stores/data";

	import Nav from '$lib/components/Nav.svelte';
	import MediaPlayer from '$lib/components/MediaPlayer.svelte';
	import Visualizer from '$lib/components/ThreeVisualizer.svelte';
	import UserMenu from '$lib/components/UserMenu.svelte';
	import { UI } from '$lib/ui';
	import { Body } from 'svelte-body';

	let pwa

	/** @type {import('./$types').PageData} */
	export let data

	onMount(async () => {
		if (data) {

			albums.set(data.albums)
			artists.set(data.artists)
			media.set(data.media)
			if ($media) $media.selected = $media.media[0]
			if ($media.selected) $media.selected.media_file = '/hip-hop-fresh.mp3'

		}
		// !dev && browser && (pwa = (await import('$lib/components/system/PWA.svelte')).default)
		if (browser) document.querySelector('body')?.classList.remove('init');
		document.querySelector('body')?.classList.add('loaded');
	});
	$: console.log('pagedata', data)
</script>

<svelte:head>
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma-social@2/css/all.min.css" />
</svelte:head>

<div class:dark={$UI.darkMode} class="wrapper">

</div>

<header class="background">
	<Visualizer />
</header>

<main class="main">
	<slot />
</main>

{#if pwa}
<!-- <svelte:component this={pwa} /> -->
{/if}

<Body class="dark" />

<div class="interaction">
	<!-- {#if $media?.selected} -->
	<MediaPlayer />
	<!-- {/if} -->
	<Nav />
	<UserMenu />
</div>