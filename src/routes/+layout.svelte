<script>
	import { browser, dev } from '$app/environment';
	import Footer from '$lib/components/Footer.svelte';
	import MediaPlayer from '$lib/components/MediaPlayer.svelte';
	import Nav from '$lib/components/Nav.svelte';
	import Visualizer from '$lib/components/ThreeVisualizer.svelte';
	import { session } from '$lib/session';
	import { media } from '$lib/stores/data';
	import { onMount } from 'svelte';

	let ReloadPrompt
	onMount(async () => {
		!dev && browser && (ReloadPrompt = (await import('$lib/components/ReloadPrompt.svelte')).default)
	})
	 // $: console.log('session', session)
</script>


<div class="wrap" role="document">
	<main class="main">
		<Nav />
		<Visualizer />
		{#if $media?.selected}
			<MediaPlayer />
		{/if}

		<!-- <Tube /> -->
		<slot></slot>
	</main>
</div>
<Footer />

{#if ReloadPrompt}
  <svelte:component this={ReloadPrompt} />
{/if}

<style global lang="scss">
	@import '../lib/styles/main.scss';

	.main {
		min-height: calc( 100vh - 68px);
	}
	.controls {
		position: absolute;
	}
</style>