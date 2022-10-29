<script>
	import { albums } from '$lib/stores/data';

	// $: console.log('$albums', $albums.albums, selected)
</script>

{#if $albums}
{#each $albums.albums as album}
<article>
	<a href="/albums/{album.slug}">
		<img alt="{album.title}Album cover" src="{album.image || '/uploads/albumcovers/happysunofyah.jpg'}"/>
		<h3>{@html album.title}</h3>

		{#if album?.description}
		<p>{album.description}</p>
		{/if}
	</a>
</article>
{:else}
<p> Loading albums's </p>
{/each}
{/if}