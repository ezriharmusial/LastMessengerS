<script>
	import '../app.scss';

	import { getArtists } from '../artists';

	import Footer from '../components/Footer.svelte';
	import Nav from '../components/Nav.svelte';

	let artists = getArtists()

	$: console.log('artists', artists)
</script>

<Nav />

<main class="main has-background-dark has-text-light">
	<section class="section">
		<div class="container is-fluid">
			<div class="content has-text-light">
				<p class="title is-greywall has-text-light">Our Artists</p>
				<slot/>
				<div class="columns is-multiline">
					{#each artists as artist}
					<div class="column is-half">
						<a href="/artists{artist.path}" class="">
							<figure class="image">
								<img src="{artist.image}" alt={artist.title}>
								<figcaption class="p-2 mb-5 title is-greywall has-background-black has-text-warning is-size-4">{artist.title}</figcaption>
							</figure>
						</a>
					</div>
					{/each}
				</div>
			</div>
		</div>
	</section>
</main>

<Footer />

<style>
    a {
        margin: 0 !important;
        padding: 0 !important;
    }

	img {
		border-radius: 0.5rem;
		overflow: hidden;
	}

	figcaption {
		position: absolute;
		bottom: 0;
	}

	figure {
		position: relative;

	}
</style>
