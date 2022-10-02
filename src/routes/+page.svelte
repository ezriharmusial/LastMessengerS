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

<section class="hero is-fullheight">
	<div class="hero-head"></div>
	<div class="hero-body">
		<h1 class="title">Welkom</h1>
	</div>
</section>