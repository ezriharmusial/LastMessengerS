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
	<img class="saturate-100" src="{data.image || '/uploads/albumcovers/happysunofyah.jpg'}" alt="Cover art for {data.title}" />
	{/if}
	<span>
		<h1 class="text-xl3 text-white">{ data.title }</h1>

		<h2 class="text-xl2 text-white">by {data.artist}</h2>
	</span>
</header>


<article class="container bg-black text-white p-4">
	<main>
		<svelte:component this={data.content} />
	</main>
</article>


<!-- <section class="section">
	<tt><pre>{JSON.stringify(data, null, 4)}</pre></tt>
</section> -->