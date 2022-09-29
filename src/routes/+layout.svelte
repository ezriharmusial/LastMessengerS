<script>
	import Footer from '$lib/components/Footer.svelte';
	import Nav from '$lib/components/Nav.svelte';
	import Visualizer from '$lib/components/ThreeVisualizer.svelte';
	import { session } from '$lib/session';

	$: console.log('session', session)
</script>


<div class="wrap" role="document">
	<main class="main">
		<Nav />
		<!-- <Tube /> -->
		<slot></slot>
	</main>
</div>
		<Footer />
		<Visualizer />

<style global lang="scss">
	@import '../lib/styles/main.scss';

	.main {
		min-height: calc( 100vh - 68px);
	}
	.controls {
		position: absolute;
	}
</style>