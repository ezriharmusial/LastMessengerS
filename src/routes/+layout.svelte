<script>
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';

	import Nav from '$lib/components/Nav.svelte';
	import MediaPlayer from '$lib/components/MediaPlayer.svelte';
	import Visualizer from '$lib/components/ThreeVisualizer.svelte';
	import UserMenu from '$lib/components/UserMenu.svelte';

	// let pwa
	onMount(async () => {
		// !dev && browser && (pwa = (await import('$lib/components/system/PWA.svelte')).default)
		if (browser)
			document.querySelector('body')?.classList.remove('init')
			document.querySelector('body')?.classList.add('loaded')
	})
	 // $: console.log('session', session)
</script>

<svelte:head>
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma-social@2/css/all.min.css" />
</svelte:head>

<header class="background">
	<Visualizer />
</header>

<main class="main">
	<slot></slot>
</main>

<!-- {#if pwa} -->
  <!-- <svelte:component this={pwa} /> -->
<!-- {/if} -->

<div class="interaction">
	<!-- {#if $media?.selected} -->
	<MediaPlayer />
	<!-- {/if} -->
	<Nav />
	<UserMenu />
</div>

<style global lang="scss">
	@import '../lib/styles/main.scss';

	.controls {
		position: absolute;
	}
</style>