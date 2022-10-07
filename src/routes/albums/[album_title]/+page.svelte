<!-- src/routes/[slug]/+page.svelte -->
<script>
	export let data;
</script>

<article>
	<header>
		<img src="{data.image || '/uploads/albumcovers/happysunofyah.jpg'}" alt="Album cover for {data.title}" />
		<h1>{ data.title }</h1>

	</header>
	<main>
		<svelte:component this={data.content} />
	</main>
</article>


<!-- <section class="section">
	<tt><pre>{JSON.stringify(data, null, 4)}</pre></tt>
</section> -->