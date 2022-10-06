<script>
	import { fade } from "svelte/transition";

	import SearchModal from "./SearchModal.svelte";
	import Login from "./Login.svelte";
	import { UI, toggleMenu } from "$lib/ui";
	import { Body } from "svelte-body";

	let title = 'LastMessengers.Tv'
</script>

<Body class={$UI.menu.visible ? "off-canvas" : "" } />

{#if $UI.menu.visible}
<div class="toggle-menu-backdrop is-hidden-desktop is-flex-touch" on:click={toggleMenu} transition:fade></div>
{/if}

<div class="btn2" class:open={$UI.menu.visible} on:click={toggleMenu} data-menu="2">
	<div class="burger"></div>
</div>

<!-- <div class="btn5" class:open={$UI.menu.visible} on:click={(toggleMenu} data-menu="5">
	<div class="burger"></div>
</div> -->

<div class="offCanvas has-background-dark" class:visible={$UI.menu.visible}>

	<!-- <header class="has-background-black is-flex is-justify-content-space-between pl-5">
		<a class="is-flex is-align-items-center" title="Lets go Home!" href="/" alt="Go Home!" on:click={toggleMenu}>
			<span class="icon image mr-2">
				<img src="/images/svg/black_unity.svg" alt="Unite Umu'Gbo!" width="16" height="16">
			</span>
			<div class="has-text-weight-bold is-uppercase">
				<span>
					{title}
				</span>
			</div>
		</a>
	</header> -->

	<main class="p-3">
		<a href="/albums" class="px-2" on:click={toggleMenu}>
			<div class="icon-text">
				<span class="icon">
					<i class="fa-solid fa-compact-disc"></i>
				</span>
				<span>
					Albums
				</span>
			</div>
		</a>
		<a href="/artists" class="px-2" on:click={toggleMenu}>
			<div class="icon-text">
				<span class="icon">
					<i class="fa-solid fa-user-group"></i>
				</span>
				<span>
					Artists
				</span>
			</div>
		</a>
		<a href="/albums/unity-album/tracks" class="px-2" on:click={toggleMenu}>
			<div class="icon-text">
				<span class="icon">
					<i class="fa-solid fa-music"></i>
				</span>
				<span>
					Tracks
				</span>
			</div>
		</a>
	</main>

	<footer>

	</footer>
</div>
<Login />
<SearchModal />

<style global lang="scss">
	.offCanvas {
		position: absolute;
		top: 0;
		left: 0;
		height: 100vh;
		width: 18rem;
		transform: translate(-18rem);
		background: black;
		display: flex;
		flex-direction: column;
		justify-content: start;
		transition: transform 0.5s;
	}

	.offCanvas.visible {
		transform: translate(0);
	}

	.navbar-toggle.navbar-burger {
		position: fixed !important;
		top: 1rem;
		left: 1rem;
	}

	.toggle-menu-backdrop {
		position: absolute;
		height: 100vh;
		width: 100vw;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		background: rgba(0, 0, 0, 0.4);
	}

	$dark: #212121;
	$light: #efefef;
	$color: #b3e5fc;

	@mixin btn($left, $top) {
		z-index:1;
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
	.btn5{
		@include btn(1.5rem, 5.5rem);

		.burger {
			@include burger(2px, 1.5rem);

			&:before{
				@include burger-before(2px, 1.5rem, -0.5rem);
			}

			&:after{
				@include burger-after(2px, 1.5rem, 0.5rem);
			}
		}

		&.open {
			.burger {
				transition: 0.5s;

				&:before{
					transform: rotateZ(-45deg) scaleX(0.75) translate(-5px, -2px);
				}

				&:after{
					transform: rotateZ(45deg) scaleX(0.75) translate(-5px, 2px);
				}
			}
		}
		&:hover {
			cursor: pointer;
		}
	}

	main {
		margin-bottom: auto;
	}

	footer {
		.button:not(:hover) {
			color: $light !important;
		}
	}

</style>