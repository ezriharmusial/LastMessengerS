<!-- src/routes/albums[album_title]/+page.svelte -->
<script>
	import { UI } from "$lib/ui";
	import { onMount } from "svelte";

	export let data;

	onMount(() => {
		$UI.menu.visible = true;
	})
</script>

<article>
	<header>
		<img src="{data.image || '/uploads/albumcovers/happysunofyah.jpg'}" alt="Album cover for {data.title}" />
		<h1>{ data.title }</h1>

	</header>
	<main class="md-content">
		<svelte:component this={data.content} />
	</main>
	<aside>
		media
	</aside>
</article>


<!-- <section class="section">
	<tt><pre>{JSON.stringify(data, null, 4)}</pre></tt>
</section> -->