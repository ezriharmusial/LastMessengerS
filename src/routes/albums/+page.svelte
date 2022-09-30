<script lang="ts">
	import { albums } from "$lib/stores/data";
	import Albums from "./Albums.svelte";

	/** @type {import('./$types').PageData} */
	export let data

	$: if (data) { albums.set(data) }
</script>

<svelte:head>
	<title>LastMessengerS TV</title>
</svelte:head>

<Albums {data} />