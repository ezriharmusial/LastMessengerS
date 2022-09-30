<script lang="ts">
	import Artists from "./Artists.svelte";
	import { artists } from "$lib/stores/data";

	/** @type {import('./$types').PageData} */
	export let data

	$: if (data) { artists.set(data) }
</script>

<svelte:head>
	<title>LastMessengerS TV</title>
</svelte:head>

<Artists {data} />