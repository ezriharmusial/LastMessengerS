<script lang="ts">
	import { UI, UIState } from "$lib/ui";
	import { onMount } from "svelte";

	onMount(()=>{
		// UIState.toggle
		$UI.controls.visible = true;
	})
</script>

<svelte:head>
	<title>LastMessengerS TV</title>
</svelte:head>

<h1 class="text-xl">Welkom</h1>