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


<header class="">
	<span>
		<!-- <h1 class="text-3xl text-white">{ data.title }</h1> -->
		<h1 class="text-5xl text-white bg-black mx-4">Lyrics</h1>
		<!-- <h2 class="text-2xl text-white">by {data.artist}</h2> -->
	</span>
</header>


<article class="containe text-white p-4 backdrop-blur backdrop-brightness-50">
	<main class="xl:columns-4 md:columns-3 sm:columns-2 xs:columns:1 ">
		<svelte:component this={data.content} />
	</main>
</article>


<!-- <section class="section">
	<tt><pre>{JSON.stringify(data, null, 4)}</pre></tt>
</section> -->