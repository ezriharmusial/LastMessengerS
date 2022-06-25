<script>
	import '../app.scss';
	import Footer from '../components/Footer.svelte';

	import Nav from '../components/Nav.svelte';
</script>

<Nav />

<main class="main has-background-dark has-text-light">
	<slot />
</main>

<Footer />

<style global lang="scss">
	@charset "utf-8";

	@media screen and (min-width: 320px) {
		html {
			font-size: calc(0.75rem + 6 * ((100vw - 320px) / 680));
		}
	}
	@media screen and (min-width: 1000px) {
		html {
			font-size: 1.5rem;
		}
	}

	@media screen and (min-width: 1280px) {
		html {
			font-size: 2rem;
		}
	}

	.content h1,
	.content h2,
	.content h3,
	.content h4,
	.content h5,
	.content h6 {
		color: white;
		font-family: 'Greywall' !important;
	}

	header figure.image {
		max-height: 75vh;
		overflow: hidden;
	}
</style>
