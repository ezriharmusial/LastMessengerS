<script>
	import Login from "./Login.svelte";
	import { UI, toggleMenu } from "$lib/ui";
	import Tracks from "./Tracks.svelte";
	import { getArtistImage, media } from "$lib/stores/data";
	import { fade } from "svelte/transition";
	import { player } from "$lib/mediaplayer";
	import isMobile from "is-mobile";
	import { Body } from "svelte-body";

	let title = 'LastMessengers.Tv'
	let toggled = false
</script>

<nav class="relative w-full flex flex-wrap items-center justify-between py-4 portrait:bg-gray-900/90 xs:bg-gray-900/30 text-white hover:text-gray-100 focus:text-gray-100 xs:shadow-lg navbar navbar-expand-lg navbar-light z-20">
	<div class="container-fluid w-full flex flex-wrap items-start sm:items-start md:items-center justify-between px-6">
		<div class="flex flex-grow md:flex-grow-0">

		<button class=" navbar-toggler text-gray-500 border-0 hover:shadow-none hover:no-underline h-12 py-2 px-2.5 bg-transparent focus:outline-none focus:ring-0 focus:shadow-none focus:no-underline md:hidden" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded={toggled} aria-label="Toggle navigation" on:click={() => {toggled = !toggled}}>
			<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bars" class="w-6" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
				<path fill="currentColor" d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z">
				</path>
			</svg>
		</button>
		<a class="flex flex-shrink items-center text-white hover:text-gray-100 focus:text-gray-100 mt-2 lg:mt-0 mr-1 " href="/">
			<figure class="image transition-all duration-500 m-0 p-0 w-10 xs:w-8 lg:w-14 xl:w-16 {$player.track?.align_image == 'right'  ? 'ml-1 md:ml-2 -scale-x-100' : 'mr-1 md:mr-2'}">
				<img class="drop-shadow-2xl" src="/images/red-black-purple-gold-with-sun.svg" alt="LastMessengers Home"/>
			</figure>
			<h1 class="transition-colors duration-500 text-xl font-bold leading-4 md:text-2xl md:leading-5 lg:text-3xl xl:text-4xl lg:leading-7 xl:leading-9 drop-shadow-2xl {$player.track?.theme == 'light' ? 'text-black' : 'text-white'}">
				Last<br />
				MessengerS
			</h1>
		</a>
		</div>
		<div class="basis-full portrait:basis-auto landscape:md:basis-auto flex-grow items-center md:flex" class:collapse={isMobile()} class:show={toggled} id="navbarSupportedContent">
			<!-- Left links -->
			<ul class="navbar-nav xs:flex-col md:flex pl-0 list-style-none font-semibold text-xl mr-auto" class:hidden={!toggled}>
				<li class="nav-item p-4 md:pl-8 pr-8">
					<a class="nav-link text-white hover:text-gray-100 focus:text-gray-100 p-0" href="/unity-album">Unity Album 2022</a>
				</li>
				<li class="nav-item p-4 pr-8">
					<a class="nav-link text-white hover:text-gray-100 focus:text-gray-100 p-0" href="/artists">Artists</a>
				</li>
				<li class="nav-item p-4 pr-8">
					<a class="nav-link text-white hover:text-gray-100 focus:text-gray-100 p-0" href="/about">About</a>
				</li>
				<li class="nav-item p-4">
					<a class="nav-link text-white hover:text-gray-100 focus:text-gray-100 p-0" href="/contact">Contact</a>
				</li>
			</ul>
			<!-- Left links -->
		</div>
		<!-- Collapsible wrapper -->

		<!-- Right elements -->
		<div class="flex items-center relative h-12">
			<!-- Icon -->
			<a class="text-gray-500 hover:text-gray-700 focus:text-gray-700 mr-4" href="https://lastmessengers.bandcamp.com/" target="_blank" rel="noreferrer">
				<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="shopping-cart" class="w-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
					<path fill="currentColor" d="M528.12 301.319l47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z">
					</path>
				</svg>
			</a>
			<!-- <div class="dropdown relative">
				<a class="text-gray-500 hover:text-gray-700 focus:text-gray-700 mr-4 dropdown-toggle hidden-arrow flex items-center" href="#" id="dropdownMenuButton1" role="button" data-bs-toggle="dropdown" aria-expanded="false">
					<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bell" class="w-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
						<path fill="currentColor" d="M224 512c35.32 0 63.97-28.65 63.97-64H160.03c0 35.35 28.65 64 63.97 64zm215.39-149.71c-19.32-20.76-55.47-51.99-55.47-154.29 0-77.7-54.48-139.9-127.94-155.16V32c0-17.67-14.32-32-31.98-32s-31.98 14.33-31.98 32v20.84C118.56 68.1 64.08 130.3 64.08 208c0 102.3-36.15 133.53-55.47 154.29-6 6.45-8.66 14.16-8.61 21.71.11 16.4 12.98 32 32.1 32h383.8c19.12 0 32-15.6 32.1-32 .05-7.55-2.61-15.27-8.61-21.71z">
						</path>
					</svg>
					<span class="text-white bg-red-700 absolute rounded-full text-xs -mt-2.5 ml-2 py-0 px-1.5">1</span>
				</a>
				<ul class="dropdown-menu min-w-max absolute hidden bg-white text-base z-50 float-left py-2 list-none text-left rounded-lg shadow-lg mt-1 hidden m-0 bg-clip-padding border-none left-auto right-0" aria-labelledby="dropdownMenuButton1">
					<li>
						<a class="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-white hover:bg-gray-100" href="#">Action</a>
					</li>
					<li>
						<a class="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-white hover:bg-gray-100" href="#">Another action</a>
					</li>
					<li>
						<a class="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-white hover:bg-gray-100" href="#">Something else here</a>
					</li>
				</ul>
			</div>
			<div class="dropdown relative">
				<a class="dropdown-toggle flex items-center hidden-arrow" href="#" id="dropdownMenuButton2" role="button" data-bs-toggle="dropdown" aria-expanded="false">
					<img src="https://mdbootstrap.com/img/new/avatars/2.jpg" class="rounded-full" style="height: 25px; width: 25px" alt="" loading="lazy" />
				</a>
				<ul class="dropdown-menu min-w-max absolute hidden bg-white text-base z-50 float-left py-2 list-none text-left rounded-lg shadow-lg mt-1 hidden m-0 bg-clip-padding border-none left-auto right-0" aria-labelledby="dropdownMenuButton2">
					<li>
						<a class="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-white hover:bg-gray-100 " href="#">Action</a>
					</li>
					<li>
						<a class="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-white hover:bg-gray-100 " href="#">Another action</a>
					</li>
					<li>
						<a class="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-white hover:bg-gray-100 " href="#">Something else here</a>
					</li>
				</ul>
			</div> -->
		</div>
		<!-- Right elements -->
	</div>
</nav>

{#if $UI.menu.visible}
<div class="toggle-menu-backdrop absolute top-0 left-0 w-full h-full z-10 { $player?.track?.theme == 'light' ? 'bg-white/50' : 'bg-black/50'} backdrop-brightness-20 hidden-desktop flex-touch" on:click={toggleMenu} transition:fade>
	<button class="font-mono absolute top-4 right-6 marker font-bold {$player?.track?.theme == 'light' ? 'text-black' : 'text-white'} text-2xl" aria-label="Close Tracklist" on:click={toggleMenu}>x</button>
</div>
{/if}


<div class="offCanvas fixed top-0 left-0 transition-transform duration-700 z-20 {$UI.menu.visible ? 'translate-x-0' : '-translate-x-full'} portrait:w-80 landscape:w-4/5 landscape:lg:w-2/3 landscape:xl:w-80 h-full {$player.track?.theme == 'light' ? 'bg-white/95 text-black fill-black stroke-black' : 'bg-black/95 fill-white stroke-white text-white'} flex flex-row-reverse portrait:flex-col landscape:flex-row-reverse landscape:xl:flex-col sm:justify-around lg:justify-start portrait:pt-20">
	<main class="h-full portrait:w-full landscape:w-1/2 landscape:xl:w-full w-1/2 landscape:xl:mt-24 lg:flex-grow-1 lg:flex-shrink-1 overflow-y-auto {$player.track?.theme == 'light' ? 'bg-white' : 'bg-black'}">
		<Tracks />
	</main>

	<footer class="flex-grow-0 w-60 portrait:w-80 landscape:lg:w-80 flex-shrink-0 m-auto portrait:hidden">
		{#if $player.track}
		<img class="object-cover v-full h-full landscape:mt-24 landscape:lg:mt-0 bg-gradient-to-br from-slate-900 to-black" data-amplitude-song-info="cover_art_url" src="{$player.track?.image || getArtistImage($player.track?.artist)}" alt="Track CoverArt"/>
		{/if}
	</footer>
</div>

<Login />


<style>
	.collapse:not(.show) {
		display: none;
	}

	.collapse {
		visibility: visible !important;
	}
</style>