<script>
	import { onMount } from 'svelte';
	import { browser, dev } from '$app/environment';


	import Tracks from "./Tracks.svelte";
	import Visualizer from '$lib/components/ThreeVisualizer.svelte';
	import Nav from '$lib/components/Nav.svelte';

	let pwa
	onMount(async () => {
		!dev && browser && (pwa = (await import('$lib/components/system/PWA.svelte')).default)
		if (browser)
			document.querySelector('body')?.classList.remove('init')
			document.querySelector('body')?.classList.add('loaded')
	})
	 // $: console.log('session', session)
</script>

<div class="background">
	<Visualizer />
</div>

<div class="content" role="document">
	<main class="main">
		<slot></slot>
	</main>
</div>

<div class="interaction">
	<Tracks />
	<Nav />
</div>

{#if pwa}
  <svelte:component this={pwa} />
{/if}

<style global lang="scss">
	@import '../lib/styles/main.scss';

	.controls {
		position: absolute;
	}
</style>