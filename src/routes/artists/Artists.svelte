<script>
	// import { artists } from '$lib/stores/data';

	import Artist from '$lib/components/Artist.svelte';

	import lazyload from 'vanilla-lazyload';
	import { browser } from '$app/environment';

	if (browser && !document.lazyloadInstance) {
		document.lazyloadInstance = new lazyload();
	}

	export let artists

	let selected = null;

	// $: console.log('artists', artists.artists, selected)
</script>

<h1 class="bg-black text-white text-5xl p-4 m-auto sr-only">LastMessengerS Artists</h1>

<div class="grid landscape:grid-flow-col landscape:sm:grid-rows-3 landscape:xl:grid-rows-2 landscape:grid-rows-3 portrait:xs:grid-cols-1 portrait:sm:grid-cols-2 justify-center">

{#if artists}
{#each artists.filter(lastmessenger => lastmessenger.active == true) as artist}
{#if selected !== artist}
<Artist title={artist.title} name={artist.name} image={artist.image} slug={artist.slug} />
{/if}
{:else}
<section class="section">
	<div class="container mx-auto">
		<div class="content">
			<h1 class="title">
				<div class="icon-text">
					<span class="fa-solid fa spinner fa-rotate" />
					<span> Loading Artists's </span>
				</div>
			</h1>
		</div>
	</div>
</section>
{/each}
{/if}
</div>
