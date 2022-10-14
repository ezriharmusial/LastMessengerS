<script lang="ts">
	import { UI, UIState } from "$lib/ui";
	import { onMount } from "svelte";
	import Artists from "./Artists.svelte";
	onMount(() => {
		if ($UIState == 'fullscreen') {
			UIState.toggle
			$UI.menu.visible = true
		}
	})

	// /** @type {import('./$types').PageData} */
	// export let data

	// $: if (data) { artists.set(data) }
</script>

<svelte:head>
	<title>LastMessengerS TV</title>
</svelte:head>

<Artists />