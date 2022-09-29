<script lang="ts">
	import Tracks from "./Tracks.svelte";
	import { media } from "$lib/stores/data";

	/** @type {import('./$types').PageData} */
	export let data

	$: if (data) { media.set(data) }
	$: console.log('page.svelte data', data)
</script>

<svelte:head>
	<title>LastMessengerS TV</title>
</svelte:head>

<Tracks />