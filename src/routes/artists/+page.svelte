<script lang="ts">
	import Footer from "$lib/components/Footer.svelte";
	import Artists from "./Artists.svelte";

	/** @type {import('./$types').PageData} */
	export let data

	// $: if (data) { artists.set(data) }
</script>

<svelte:head>
	<title>LastMessengerS TV</title>
</svelte:head>

<div class="mt-20">
<Artists />
</div>
<Footer />