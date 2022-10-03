<!-- src/routes/[slug]/+page.svelte -->
<script>
	export let data;
</script>

<div class="section notification is-black is-blurred">
	<div class="container">
		<article>
			<div class="icon-text">
				<div class="image is-128x128 mr-5">
					<img class="is-rounded" src="{data.cover_image ||
						'/images/albumcovers/happysunofyah.jpg'}" alt="Cover art for {data.title}" />
				</div>
				<span>
					<h1 class="title">
						{ data.title }
					</h1>

					<h2 class="subtitle">
						by {data.artist}
					</h2>
				</span>
			</div>
			<svelte:component this={data.content} />
		</article>
	</div>
</div>


<!-- <section class="section">
	<tt><pre>{JSON.stringify(data, null, 4)}</pre></tt>
</section> -->