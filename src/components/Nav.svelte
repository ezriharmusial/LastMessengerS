<script>
	import { fade } from "svelte/transition";

	import { getRoutes } from "../routes";

	let toggled = false
	const toggle = () => {
		toggled = !toggled
	}
	const routes = getRoutes()
</script>

<style lang="scss">
	.navbar {
		z-index: 100;

		.navbar-item img {
			max-height: unset !important;
		}
	}

	#menu-toggle {display: none;}

	#menu-toggle:checked~.navbar-brand .navbar-burger {
		span {
			&:nth-child(1) {
				transform: translateY(5px) rotate(45deg);
			}

			&:nth-child(2) {
				opacity: 0;
			}

			&:nth-child(3) {
				transform: translateY(-5px) rotate(-45deg);
			}
		}
	}

	@media (max-width: 768px) {
		.backdrop {
			height: 100vh;
			width: 100vw;
			opacity: 0.7;
			position: absolute;
			top: 0;
			left: 0;
			z-index: 10;
			background: url('/logo.png') rgba(0,0,0,1) no-repeat;
			background-size: 25vw 31vw;
			background-position-x: center;
			background-position-y: 40vh;
		}
	}


</style>

<svelte:head>
	{#if toggled}
	<style>
	html, body {
		height: 100vh;
		width: 100vw;
		overflow: hidden;
		overflow-y: scroll
	}
	html {
		overflow-y: scroll;
	}
	</style>
	{/if}
</svelte:head>

<nav class="navbar is-black is-fixed-top has-text-warning" aria-label="main navigation">
	<!-- Hidden Checkbox hack trigger for Pure CSS toggle -->
	<input type="checkbox" id="menu-toggle" class="is-hidden" bind:checked={toggled} />

	<div class="navbar-brand">
		<a class="navbar-item py-0 has-text-weight-bold has-text-shadow is-size-5" href="/">
			<span class="icon is-large">
				<img class="p-2" src="/logo.png" alt="LastMessengerS">
			</span>
			<span class="is-greywall title has-text-warning" style="text-transform:unset;">LastMessengerS</span>
		</a>

		<label for="menu-toggle" class="nav-toggle navbar-burger float-left">
			<span></span>
			<span></span>
			<span></span>
		</label>
	</div>


	<div class="navbar-menu nav-menu" class:is-active={toggled}>
		<div class="navbar-end">
			<a class="navbar-item" href="/artists/" title="Our Artists!" on:click={toggle}>
				<span class="icon-text">
					<span class="icon">
						<svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Pro 6.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M385.2 167.6c6.4 0 12.6.3 18.8 1.1C387.4 90.3 303.3 32 207.7 32 100.5 32 13 104.8 13 197.4c0 53.4 29.3 97.5 77.9 131.6l-19.3 58.6 68-34.1c24.4 4.8 43.8 9.7 68.2 9.7 6.2 0 12.1-.3 18.3-.8-4-12.9-6.2-26.6-6.2-40.8-.1-84.9 72.9-154 165.3-154zm-104.5-52.9c14.5 0 24.2 9.7 24.2 24.4 0 14.5-9.7 24.2-24.2 24.2-14.8 0-29.3-9.7-29.3-24.2.1-14.7 14.6-24.4 29.3-24.4zm-136.4 48.6c-14.5 0-29.3-9.7-29.3-24.2 0-14.8 14.8-24.4 29.3-24.4 14.8 0 24.4 9.7 24.4 24.4 0 14.6-9.6 24.2-24.4 24.2zM563 319.4c0-77.9-77.9-141.3-165.4-141.3-92.7 0-165.4 63.4-165.4 141.3S305 460.7 397.6 460.7c19.3 0 38.9-5.1 58.6-9.9l53.4 29.3-14.8-48.6C534 402.1 563 363.2 563 319.4zm-219.1-24.5c-9.7 0-19.3-9.7-19.3-19.6 0-9.7 9.7-19.3 19.3-19.3 14.8 0 24.4 9.7 24.4 19.3 0 10-9.7 19.6-24.4 19.6zm107.1 0c-9.7 0-19.3-9.7-19.3-19.6 0-9.7 9.7-19.3 19.3-19.3 14.5 0 24.4 9.7 24.4 19.3.1 10-9.9 19.6-24.4 19.6z"/></svg>
					</span>
					<span>Artists</span>
				</span>
			</a>

			{#each routes as route}
			<a class="navbar-item icon-text" title="go to {route.title}" href={route.path}>
				{route.nav_label || route.title}
			</a>
			{/each}

			<a class="navbar-item" href="https://www.facebook.com/ArtKidsFoundation/?fref=ts" target="_blank"
				title="Onze Facebook pagina">
				<span class="icon-text">
					<span class="icon">
						<svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z"/></svg>
					</span>
					<span class="is-hidden-desktop is-hidden-widescreen is-hidden-fullhd">Our Facebook page</span>
				</span>
			</a>

			<a class="navbar-item" href="https://twitter.com/ArtKids?lang=en" target="_blank"
				title="Onze Twitter pagina">
				<span class="icon-text">
					<span class="icon">
						<svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"/></svg>
					</span>
					<span class="is-hidden-desktop is-hidden-widescreen is-hidden-fullhd">Our Twitter Page</span>
				</span>
			</a>
		</div>
	</div>
</nav>
{#if toggled}
<div class="backdrop" on:click={toggle} transition:fade></div>
{/if}