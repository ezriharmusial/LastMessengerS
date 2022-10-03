<!-- src/routes/[slug]/+page.svelte -->
<script>
	export let data;
</script>

<section class="hero is-success is-black is-blurred is-fullheight">
	<div class="hero-body">
		<div class="container">
			<div class="icon-text">
				<div class="image is-128x128 mr-5">
					<img src="{data.album_cover ||
					'/images/albumcovers/happysunofyah.jpg'}" alt="Album cover for {data.title}" />
				</div>
				<span>
					<h1 class="title">
						{ data.title }
					</h1>
				</span>
			</div>
			<svelte:component this={data.content} />
		</div>
	</div>
</section>

<!-- <section class="section">
	<tt><pre>{JSON.stringify(data, null, 4)}</pre></tt>
</section> -->