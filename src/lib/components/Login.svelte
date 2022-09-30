<script>
	import { auth } from '$lib/auth'
	import { fly } from 'svelte/transition';

	export let loginToggled = false

	// Toggle the Login button
	const toggleLogin = () => {
		loginToggled = !loginToggled
	}
</script>


<svelte:head>
{#if loginToggled}
	<title>Login</title>

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma-social@2/css/all.min.css" />
{/if}
</svelte:head>

{#if loginToggled}
<div class="modal-background close-modal" data-modalid="#search-modal" on:click={toggleLogin}></div>
<div class="login has-background-dark" transition:fly>

  	<button class="modal-close is-large close-modal mr-4" data-modalid="#search-modal" aria-label="close" on:click={toggleLogin}></button>

	<section class="section">
		<div class="has-text-centered">
			<img class="login-logo" alt="Login Logo" src="images/manifest/pwa-512x512.png">
		</div>

		<div class="field">
			<label for="user" class="label">Username</label>
			<div class="control has-icons-left">
				<input class="input" id="user" name="user" type="text">
				<span class="icon is-small is-left">
					<i class="fa fa-user"></i>
				</span>
			</div>
		</div>

		<div class="field">
			<label for="password" class="label">Password</label>
			<div class="control has-icons-left">
				<input class="input" id="password" type="password">
				<span class="icon is-small is-left">
					<i class="fa fa-key"></i>
				</span>
			</div>
		</div>

		<div class="has-text-centered">
			<button class="button is-vcentered is-primary is-outlined">Login</button>
		</div>

		<hr />

		<div class="is-flex is-flex-direction-column">
			<div class="button is-info is-google" on:click={() => auth.signInWith('google')}>
				<div class="icon-text">
					<span class="icon">
						<i class="fa-brands fa-facebook"></i>
					</span>
					<span>Login with Google</span>
				</div>
			</div>
			<div class="button is-instagram" on:click={() => auth.signInWith('google')}>
				<div class="icon-text">
					<span class="icon">
						<i class="fa-brands fa-facebook"></i>
					</span>
					<span>Login with Google</span>
				</div>
			</div>
			<div class="button is-facebook" on:click={() => auth.signInWith('google')}>
				<div class="icon-text">
					<span class="icon">
						<i class="fa-brands fa-facebook"></i>
					</span>
					<span>Login with Google</span>
				</div>
			</div>
		</div>

		<div class="has-text-centered">
			<a href="/join"> Don't you have an account? Sign up now!</a>
		</div>
	</section>
</div>
{/if}
<style>
	.input {
		border-radius: 50px;
	}

	.button {
		margin-top: 20px;
		margin-bottom: 20px;
		min-width: 150px;
	}

	.login {
		height: 100vh;
		position: fixed;
		top: 0;
		right: 0;
		width: 33vw;
		min-width: 360px;
		display: block;
		padding: 0.75rem;
		z-index: 33;
		overflow-y:auto;
	}

	.login-logo {
		margin: 0 auto;
		margin-bottom: 50px;
		max-height: 100px;

	}
</style>