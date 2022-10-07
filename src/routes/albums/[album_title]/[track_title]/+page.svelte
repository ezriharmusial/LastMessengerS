<!-- src/routes/[slug]/+page.svelte -->
<script>
	export let data;
</script>

<article>
	<header>
		<img src="{data.image || '/uploads/albumcovers/happysunofyah.jpg'}" alt="Cover art for {data.title}" />
		<span>
			<h1>{ data.title }</h1>

			<h2>by {data.artist}</h2>
		</span>
	</header>

	<main>
		<svelte:component this={data.content} />
	</main>
</article>


<!-- <section class="section">
	<tt><pre>{JSON.stringify(data, null, 4)}</pre></tt>
</section> -->