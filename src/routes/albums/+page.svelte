<script lang="ts">
	import { albums } from "$lib/stores/data";
	import { UI } from "$lib/ui";
	import { onMount } from "svelte";
	import Albums from "./Albums.svelte";

	/** @type {import('./$types').PageData} */
	export let data

	onMount(() => {
		$UI.menu.visible = true;
	})

	$: if (data) { albums.set(data) }
</script>

<svelte:head>
	<title>LastMessengerS TV</title>
</svelte:head>

<Albums {data} />