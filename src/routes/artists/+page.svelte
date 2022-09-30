<script lang="ts">
	import List from "./Artists.svelte";
	import { artists } from "$lib/stores/data";

	/** @type {import('./$types').PageData} */
	export let data

	$: if (data) { artists.set(data) }
	// $: console.log('page.svelte data', data)
</script>

<svelte:head>
	<title>LastMessengerS TV</title>
</svelte:head>

<List />