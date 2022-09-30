<script>
	import { auth } from "$lib/auth";
	import { session } from "$lib/session";
	// import NavMenu from './partials/NavMenu.svelte'
	import Controls from './Controls.svelte'
	import SearchModal from "./SearchModal.svelte";
	import Login from "./Login.svelte";
	import { media } from "$lib/stores/data";

	let PrimaryNavigation = false
	let title = 'LastMessengers.Tv'
	let is_single = false
	let next_post_link //= explode('Next Clip', get_previous_post_link('%link', 'Next Clip', true));
	let random_post_link //= explode('Next Random Clip', get_random_post_link('%link', 'Next Random Clip', true));
	let previous_post_link //= explode('Previous Clip', get_next_post_link('%link', 'Previous Clip', true));

	let toggled = false
	let searchToggled = false
	let loginToggled = false

	// Toggle the menu button
	const toggle = () => {
		toggled = false
	}

	// Toggle the Search button
	const toggleSearch = () => {
		searchToggled = !searchToggled
		toggle()
	}

	// Toggle the Login button
	const toggleLogin = () => {
		loginToggled = !loginToggled
		toggle()
	}
</script>

{#if toggled}
<div class="toggle-menu-backdrop is-hidden-desktop is-flex-touch" on:click={toggle}></div>
{/if}

<nav class="page-header navbar is-fixed-top is-transparent" style="background:transparent;" aria-label="main navigation">
	<div class="container is-fluid">
		<!-- Hidden Checkbox hack trigger for Pure CSS toggle -->
		<input type="checkbox" id="menu-toggle" class="is-hidden" bind:checked={toggled}/>

		<div class="navbar-brand">
			<label for="menu-toggle" class="nav-toggle navbar-burger">
				<span></span>
				<span></span>
				<span></span>
			</label>
			<a class="navbar-item" title="Lets go Home!" href="/" alt="Go Home!" on:click={toggle}>
				<span class="icon">
					<img src="/images/svg/black_unity.svg" alt="Unite Umu'Gbo!" width="16" height="16">
				</span>
				{#if is_single}
				<div class="navbar-item">
					<span>
						<Controls medium={$media.selected} />
					</span>
				</div>
				{/if}
				{#if !is_single}
				<div class="navbar-item has-text-weight-bold is-uppercase">
					<span>
						{title}
					</span>
				</div>
				{/if}
			</a>

			{#if $session.user}
			<div class="navbar-item">
				<div class="dropdown is-hoverable">
					<div class="dropdown-trigger">
						<div class="" aria-haspopup="true" aria-controls="dropdown-menu">
							<span class="icon-text is-justify-content-center is-align-content-center is-align-items-center">
								<div class="my-2 is-hidden-mobile">{$session.user.name}</div>
								<span class="icon is-large">
									<figure class="image is-28x28"> <img alt="{$session.user.name}'s Profile" src="{$session.user.picture}" class="avatar avatar-48 photo is-rounded" width="32" height="32"></figure>
								</span>
							</span>
						</div>
					</div>
					<div class="dropdown-menu" id="dropdown-menu" role="menu">
						<div class="dropdown-content has-text-right">
							<a class="dropdown-item" href="/me">
								My artist profile
							</a>
							<hr class="dropdown-divider">
							<a class="dropdown-item" href="/" on:click={() => auth.signOut()}>
								Log out
							</a>
						</div>
					</div>
				</div>
			</div>
			{/if}
		</div>
		<div class="navbar-menu nav-menu">
			<div class="navbar-start">
				<div class="navbar-item">
					<div class="field has-addons">
						<p class="control">
							<button class="button is-dark open-modal" on:click={toggleSearch} data-modalid="#search-modal" aria-label="Search" title="Search LinkCasts" alt="Search LinkCasts" >
								<svg fill="currentColor" class="svg-icon" version="1.1" xmlns="https://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path d="M31.008 27.231l-7.58-6.447c-.784-.705-1.622-1.029-2.299-.998a11.954 11.954 0 0 0 2.87-7.787c0-6.627-5.373-12-12-12s-12 5.373-12 12 5.373 12 12 12c2.972 0 5.691-1.081 7.787-2.87-.031.677.293 1.515.998 2.299l6.447 7.58c1.104 1.226 2.907 1.33 4.007.23s.997-2.903-.23-4.007zM12 20a8 8 0 1 1 0-16 8 8 0 0 1 0 16z"></path></svg>
							</button>
						</p>
						<p class="control">
							<a class="button is-dark" href="https://www.facebook.com/LastMessengerS/" target="_blank" title="Our Facebook page">
								<span class="icon">
									<svg fill="currentColor" class="svg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 264 512"><path d="M76.7 512V283H0v-91h76.7v-71.7C76.7 42.4 124.3 0 193.8 0c33.3 0 61.9 2.5 70.2 3.6V85h-48.2c-37.8 0-45.1 18-45.1 44.3V192H256l-11.7 91h-73.6v229"></path></svg>
								</span>
							</a>
						</p>
					</div>
				</div>
				<div class="navbar-item">
					<a href="/artists" class="button is-primary" on:click={toggle}>Artists</a>
				</div>
			</div>
			<div class="navbar-end">
				<div class="navbar-item">
					{#if !$session.user}
					<div class="buttons">
						<a href="/join/" class="button is-primary" on:click={toggle}>
							<strong>Join</strong>
						</a>
						<button class="button is-light" on:click={toggleLogin}>
							Log in
						</button>
					</div>
					{/if}
				</div>
				{#if PrimaryNavigation}
				<!-- <NavMenu /> -->
				{/if}
			</div>
		</div>
	</div>
</nav>
<Login bind:loginToggled />
<SearchModal bind:searchToggled />

<style lang="scss">
	@import '../styles/components/_navbar.scss';

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
</style>