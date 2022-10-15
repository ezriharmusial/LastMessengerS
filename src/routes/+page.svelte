<script lang="ts">
	import { albums, artists } from "$lib/stores/data";
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

{#each $albums as album}
<!-- <div class="container bg-gradient-to-br from-slate-900 to-black  text-white mx-auto">
	<h1 class="text-xl">LASTMESSENGERS UNITY ALBUM 2022</h1>

	<img class="w-1/2" alt="{album.title}Album cover" src="{album.image || '/uploads/albumcovers/happysunofyah.jpg'}"/>
	<h3>{@html album.title}</h3>

	{#if album?.description}
	<p>{album.description}</p>
	{/if}

From so-and-so date Available on Spotify, Apple Music & Amazon Music. [Beautiful Logo's Here]

But listen to us NOW Here on LastMessengersTV.
</div>-->
{/each}

{#if $artists}
<!-- <div class="absolute bottom-0 left-0 flex">
	{#each $artists as artist}
		<img class="p-0 object-cover w-16 h-16 mr-4" src="{artist.image || '/uploads/albumcovers/happysunofyah.jpg'}" alt="Profile Picture of {artist.stage_name}"/>
	{/each}
</div> -->
{/if}