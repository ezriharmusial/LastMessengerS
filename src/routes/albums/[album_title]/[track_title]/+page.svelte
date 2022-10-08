<!-- src/routes/[slug]/+page.svelte -->
<script>
	import { UI } from "$lib/ui";
	import { onMount } from "svelte";

	/** @type {import('./$types').PageData} */
	export let data;

	onMount(() => {
		$UI.menu.visible = false;
	})

</script>

<header class="">
	{#if data.image}
	<img class="absolute saturate-90 contrast-90" src="{data.image || '/uploads/albumcovers/happysunofyah.jpg'}" alt="Cover art for {data.title}" />
	{/if}
	<span>
		<h1 class="text-3xl text-white">{ data.title }</h1>

		<h2 class="text-2xl text-white">by {data.artist}</h2>
	</span>
</header>


<article class="containe text-white p-4 backdrop-blur backdrop-brightness-50">
	<main class="columns-1">
		<div>
			<svelte:component this={data.content} />
		</div>
	</main>
</article>


<!-- <section class="section">
	<tt><pre>{JSON.stringify(data, null, 4)}</pre></tt>
</section> -->