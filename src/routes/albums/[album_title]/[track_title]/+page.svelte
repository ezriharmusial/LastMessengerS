<!-- src/routes/[slug]/+page.svelte -->
<script>
	import { UI, UIState } from '$lib/ui';
	import { onMount } from 'svelte';

	/** @type {import('./$types').PageData} */
	export let data;

	onMount(() => {
		if ($UIState == 'navigation')
		UIState.toggle

		$UI.menu.visible = false
		$UI.controls.visible = true
	})
</script>

{#if data.image}
<!-- <img class="fixed top-0 bottom-0 left-0 right-0 saturate-90 contrast-90" src="{data.image || '/uploads/albumcovers/happysunofyah.jpg'}" alt="Cover art for {data.title}" /> -->
{/if}


<article class="m-auto text-white p-4 backdrop-brightness-50">
	<header class="mb-4 text-right">
			<!-- <h1 class="text-3xl text-white">{ data.title }</h1> -->
			<h2 class="title text-3xl text-white">Lyrics</h2>
			<!-- <h2 class="text-2xl text-white">by {data.artist}</h2> -->
	</header>
	<main class="columns:1 md-content lyrics text-xl xs:text-2xl sm:text-4xl text-right text-bold">
		<svelte:component this={data.content} />
	</main>
</article>


<!-- <section class="section">
	<tt><pre>{JSON.stringify(data, null, 4)}</pre></tt>
</section> -->

<style>
	main {
		height:calc(100vh - 30rem);
		overflow:auto;
	}
</style>