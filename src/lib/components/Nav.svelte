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


<div class="offCanvas fixed top-0 left-0 transition-transform duration-700 {$UI.menu.visible ? 'translate-x-0' : '-translate-x-full'} sm:w-3/4 lg:w-80 h-full bg-black flex flex-row-reverse portrait:flex-col landscape:sm:flex-row-reverse landscape:lg:flex-col sm:justify-around lg:justify-start text-white portrait:pt-20 landscape:md:pt-20">
	<main class="h-full lg:flex-grow-1 lg:flex-shrink-1 overflow-y-auto">
		<Tracks />
	</main>

	<footer class="flex-grow-0 w-60 lg:w-80 flex-shrink-0 m-auto">
		{#if $player.track}
		<img class="object-cover v-full h-full bg-gradient-to-br from-slate-900 to-black" data-amplitude-song-info="cover_art_url" src="{$player.track.image || getArtistImage($player.track.artist)}" alt="Track CoverArt"/>
		{/if}
	</footer>
</div>

<Login />