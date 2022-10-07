<script lang="ts">
	import { media } from "$lib/stores/data";

	/** @type {import('./$types').PageData} */
	export let data

	$: if (data) { media.set(data) }
	// $: console.log('page.svelte data', data)
</script>

<svelte:head>
	<title>LastMessengerS TV</title>
</svelte:head>

<h1 class="text-xl">Welkom</h1>