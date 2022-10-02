<script>
	import { onMount } from 'svelte';
	import { browser, dev } from '$app/environment';

	import { session } from '$lib/session';
	import { media } from '$lib/stores/data';

	import Tracks from "./Tracks.svelte";
	import MediaPlayer from '$lib/components/MediaPlayer.svelte';
	import Visualizer from '$lib/components/ThreeVisualizer.svelte';
	import Nav from '$lib/components/Nav.svelte';

	let ReloadPrompt
	onMount(async () => {
		!dev && browser && (ReloadPrompt = (await import('$lib/components/ReloadPrompt.svelte')).default)
	})
	 // $: console.log('session', session)
</script>

<div class="background">
	<Visualizer />

	{#if $media?.selected}
	<MediaPlayer />
	{/if}
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



{#if ReloadPrompt}
  <svelte:component this={ReloadPrompt} />
{/if}

<style global lang="scss">
	@import '../lib/styles/main.scss';

	.controls {
		position: absolute;
	}
</style>