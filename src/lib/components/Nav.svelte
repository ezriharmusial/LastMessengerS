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

<!-- <div class="btn5" class:open={$UI.menu.visible} on:click={(toggleMenu} data-menu="5">
	<div class="burger"></div>
</div> -->

<div class="offCanvas bg-black text-white pt-20" class:visible={$UI.menu.visible}>

	<!-- <header class="bg-black flex justify-content-space-between flex-grow-0 flex-shrink-0 py-4">
		<a href="/" class="px-2 hover:text-yellow-400 text-center">
			<div class="icon-text">
				<span class="icon">
					<i class="fa-solid fa-home"></i>
				</span>
				<span>
					Home
				</span>
			</div>
		</a>
		<a href="/artists" class="px-2 hover:text-yellow-400 text-center">
			<div class="icon-text">
				<span class="icon">
					<i class="fa-solid fa-user-group"></i>
				</span>
				<span>
					Artists
				</span>
			</div>
		</a>
		<a href="/albums/unity-album/" class="px-2 hover:text-yellow-400 text-center">
			<div class="icon-text">
				<span class="icon">
					<i class="fa-solid fa-list"></i>
				</span>
				<span>
					Tracks
				</span>
			</div>
		</a>
	</header> -->

	<main class="flex-grow-1 flex-shrink-1 overflow-y-auto">
		<Tracks />
	</main>

	<footer class="flex-grow-0 flex-shrink-0 bg-white">
		{#if $player.track}
		<img class="object-cover v-full h-full bg-gradient-to-br from-slate-900 to-black" data-amplitude-song-info="cover_art_url" src="{$player.track.image || getArtistImage($player.track.track_artist)}" alt="Track CoverArt"/>
		{/if}
	</footer>
</div>

<!-- <div class="btn2" class:open={$UI.menu.visible} on:click={toggleMenu} data-menu="2">
	<div class="burger"></div>
</div>
 -->

<Login />
<!-- <SearchModal /> -->

<style lang="scss">
	.offCanvas {
		position: fixed;
		top: 0;
		left: 0;
		height: 100vh;
		width: 16rem;
		transform: translate(-16rem);
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		transition: transform 0.5s;
	}

	footer {
		height: 16rem;
	}

	.offCanvas.visible {
		transform: translate(0);
	}

	$dark: #212121;
	$light: #efefef;
	$color: #b3e5fc;

	@mixin btn($left, $top) {
		position: fixed;
		width: 1.5rem;
		height: 1.5rem;
		bottom: $top;
		left: $left;
		transition-duration: 0.5s;
	}

	@mixin burger($height, $width) {
		transition-duration: 0.5s;
		position: absolute;
		height: $height;
		width: $width;
		top: 0.7rem;
		background-color: $light;
	}

	@mixin burger-before($height, $width, $top) {
		transition-duration: 0.5s;
		position: absolute;
		width: $width;
		height: $height;
		background-color: $light;
		content: "";
		top: $top;
	}

	@mixin burger-after($height, $width, $top) {
		transition-duration: 0.5s;
		position: absolute;
		width: $width;
		height: $height;
		background-color: $light;
		content: "";
		top: $top;
	}


	.btn2{
		@include btn(1.2rem, 1.4rem);

		.burger {
			@include burger(2px, 0.75rem);

			&:before{
				@include burger-before(2px, 1rem, -0.4rem);
			}

			&:after{
				@include burger-after(2px, 1rem, 0.4rem);
			}
		}

		&.open {
			.burger {
				transition-duration: 0.5s;
				background: transparent;

				&:before{
					transform: rotateZ(-45deg) scaleX(0.95) translate(-5px, -2px);
				}

				&:after{
					transform: rotateZ(45deg) scaleX(0.95) translate(-5px, 2px);
				}
			}
		}
		&:hover {
			cursor: pointer;
		}
	}
	// .btn5{
	// 	@include btn(1.5rem, 5.5rem);

	// 	.burger {
	// 		@include burger(2px, 1.5rem);

	// 		&:before{
	// 			@include burger-before(2px, 1.5rem, -0.5rem);
	// 		}

	// 		&:after{
	// 			@include burger-after(2px, 1.5rem, 0.5rem);
	// 		}
	// 	}

	// 	&.open {
	// 		.burger {
	// 			transition: 0.5s;

	// 			&:before{
	// 				transform: rotateZ(-45deg) scaleX(0.75) translate(-5px, -2px);
	// 			}

	// 			&:after{
	// 				transform: rotateZ(45deg) scaleX(0.75) translate(-5px, 2px);
	// 			}
	// 		}
	// 	}
	// 	&:hover {
	// 		cursor: pointer;
	// 	}
	// }

	main {
		margin-bottom: auto;
	}

</style>