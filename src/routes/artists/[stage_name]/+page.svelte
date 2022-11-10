<!-- src/routes/[slug]/+page.svelte -->
<script>
	import { UI } from "$lib/ui";
	import { onMount } from "svelte";

	import Comments from "$lib/components/Comments.svelte";
	import ArtistInfo from "$lib/components/ArtistInfo.svelte";

	/** @type {import('./$types').PageData} */
	export let data;

	onMount(() => {
		// $UI.menu.visible = true;
		$UI.controls.visible = false
	})
</script>

<ArtistInfo artist={data} />

<Comments />