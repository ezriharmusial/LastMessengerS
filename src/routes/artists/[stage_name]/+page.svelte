<!-- src/routes/[slug]/+page.svelte -->
<script>
	import Comments from "$lib/components/Comments.svelte";

	export let data;
</script>


<header>
	<figure class="image is-128x128 mr-5">
		<img class="is-rounded has-background-dark p-0" style="border:3px solid yellow;" src="{data.image ||'/uploads/albumcovers/happysunofyah.jpg'}" alt="Profile pic for {data.stage_name}" />
	</figure>

	<h2 class="title is-uppercase has-text-primary is-size-6-mobile is-size-5-touch is-size-2-widescreen is-size-1-fullhd has-shadow">
		{ data.stage_name }
	</h2>
	<h3 class="subtitle is-uppercase is-size-7-mobile is-size-6-touch is-size-3-widescreen is-size-2-fullhd">
		Born as: {data.name}
	</h3>
</header>

<article class="columns-2">
	<main>
		<svelte:component this={data.content} />
	</main>

	<aside>
		<Comments />
	</aside>
</article>