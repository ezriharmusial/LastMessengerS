<script>
	import '../app.scss';
	import Footer from '../components/Footer.svelte';
	import Nav from '../components/Nav.svelte';

	export let title;
	export let image;
</script>

<Nav />

<header>
	<figure class="image">
		<img src="{image}" alt="" />
		<figcaption class="p-2 mb-5 title is-greywall has-background-black has-text-warning is-size-4">
			{title}
		</figcaption>
	</figure>
</header>

<main class="main has-background-dark has-text-light">
	<section class="section">
		<div class="content">
			<slot />
		</div>
	</section>
</main>

<Footer />

<style>
	figure {
		position: relative;
	}

	img {
		border-radius: 0.5rem;
		overflow: hidden;
	}

	figcaption {
		position: absolute;
		bottom: 0;
	}

	header figure.image {
		max-height: 75vh;
		overflow: hidden;
	}
</style>
