<script lang="ts">
	import { nextTrack } from "$lib/mediaplayer";
	import { albums, artists } from "$lib/stores/data";
	import { UI, UIState } from "$lib/ui";
	import { onMount } from "svelte";
	import { fade, fly } from "svelte/transition";

	onMount(()=>{
		// UIState.toggle
		$UI.controls.visible = false;
		if ($UIState == 'fullscreen')
			UIState.toggle()
	})
</script>

<svelte:head>
	<title>LastMessengerS TV</title>
</svelte:head>

{#each $albums as album}
<div class="container mx-auto flex flex-col justify-between h-max">
	<header>
		<h1 class="title text-3xl mb-3 bg-gradient-to-br from-red-900 to-red rounded p-4 text-centered" in:fly={{x: -100, y: -200, duration: 1000, delay: 500}}>Unity Album 2022</h1>
		<img class="w-max mb-3 rounded" alt="{album.title}Album cover" src="{album.image || '/uploads/albumcovers/happysunofyah.jpg'}" in:fade/>
	</header>

	<main class="content p-4 backdrop-brightness-50">

	<h3>{@html album.title}</h3>

	{#if album?.description}
	<p>{album.description}</p>
	{/if}
		From so-and-so date Available on Spotify, Apple Music & Amazon Music. [Beautiful Logo's Here]
		But listen to us NOW Here on LastMessengersTV.
	</main>

	<footer>
		<button class="button w-full bg-white text-black" on:click={nextTrack}>Play Album</button>
	</footer>

</div>
{/each}

{#if $artists}
<!-- <div class="absolute bottom-0 left-0 flex">
	{#each $artists as artist}
		<img class="p-0 object-cover w-16 h-16 mr-4" src="{artist.image || '/uploads/albumcovers/happysunofyah.jpg'}" alt="Profile Picture of {artist.stage_name}"/>
	{/each}
</div> -->
{/if}