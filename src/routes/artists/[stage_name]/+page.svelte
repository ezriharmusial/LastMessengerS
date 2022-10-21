<!-- src/routes/[slug]/+page.svelte -->
<script>
	import { UI } from "$lib/ui";
	import { onMount } from "svelte";

	import Comments from "$lib/components/Comments.svelte";

	/** @type {import('./$types').PageData} */
	export let data;

	onMount(() => {
		// $UI.menu.visible = true;
		$UI.controls.visible = false
	})
</script>


<header>
	<figure class="">
		<img class="" src="{data.image ||'/uploads/albumcovers/happysunofyah.jpg'}" alt="Profile pic for {data.stage_name}" />
	</figure>

	<h2 class="">
		{ data.stage_name }
	</h2>
	<h3 class="">
		Born as: {data.name}
	</h3>
</header>

<article class="columns-2">
	<main class="text-white md-content">
		<svelte:component this={data.content} />
	</main>

	<aside>
		<Comments />
	</aside>
</article>