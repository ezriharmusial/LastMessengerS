<script>
	import Login from "./Login.svelte";
	import { UI, toggleMenu } from "$lib/ui";
	import Tracks from "./Tracks.svelte";
	import { getArtistImage, media } from "$lib/stores/data";
	import { fade } from "svelte/transition";
	import { player } from "$lib/mediaplayer";

	let title = 'LastMessengers.Tv'
</script>

{#if $UI.menu.visible}
<div class="toggle-menu-backdrop absolute top-0 left-0 w-full h-full backdrop-brightness-50 backdrop-blur-sm hidden-desktop flex-touch" on:click={toggleMenu} transition:fade></div>
{/if}


<div class="offCanvas bg-black text-white pt-20" class:visible={$UI.menu.visible}>
	<main class="flex-grow-1 flex-shrink-1 overflow-y-auto">
		<Tracks />
	</main>

	<footer class="flex-grow-0 flex-shrink-0 bg-white">
		{#if $player.track}
		<img class="object-cover v-full h-full bg-gradient-to-br from-slate-900 to-black" data-amplitude-song-info="cover_art_url" src="{$player.track.image || getArtistImage($player.track.artist)}" alt="Track CoverArt"/>
		{/if}
	</footer>
</div>

<Login />

<style lang="scss">
	.offCanvas {
		position: fixed;
		top: 0;
		left: 0;
		height: 100vh;
		width: 15rem;
		transform: translate(-15rem);
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		transition: transform 0.5s;
	}

	footer {
		height: 15rem;
	}

	.offCanvas.visible {
		transform: translate(0);
	}

	main {
		margin-bottom: auto;
	}
</style>