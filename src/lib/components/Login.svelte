<script>
	import { auth } from '$lib/auth'
	import { UI, toggleLogin } from '$lib/ui';
	import { fly } from 'svelte/transition';
</script>


<svelte:head>
{#if $UI.login.visible}
	<title>Login</title>
{/if}
</svelte:head>

{#if $UI.login.visible}
<div class="modal-background close-modal" data-modalid="#search-modal" on:click={toggleLogin}></div>

<div class="login has-background-dark" transition:fly>

	<header class="image">
		<img class="login-logo" alt="Login Logo" src="/images/LMS_web-logo_small_dark.png">
	</header>

  	<button class="modal-close is-large close-modal mr-4" data-modalid="#search-modal" aria-label="close" on:click={toggleLogin}></button>

	<main class="section mt-0 pt-2">
		<div class="buttons">
			<div class="button is-fullwidth is-white" on:click={() => auth.signInWith('google')}>
				<div class="icon-text">
					<span class="icon">
						<i class="fa-brands fa-google"></i>
					</span>
					<span>Login with Google</span>
				</div>
			</div>
			<div class="button is-fullwidth is-facebook" on:click={() => auth.signInWith('facebook')}>
				<div class="icon-text">
					<span class="icon">
						<i class="fa-brands fa-facebook"></i>
					</span>
					<span>Login with Facebook</span>
				</div>
			</div>
			<div class="button is-fullwidth is-twitter" on:click={() => auth.signInWith('twitter')}>
				<div class="icon-text">
					<span class="icon">
						<i class="fa-brands fa-twitter"></i>
					</span>
					<span>Login with Twitter</span>
				</div>
			</div>
		</div>

		<hr />
		<div class="field">
			<label for="user" class="label is-sr-only">Username</label>
			<div class="control has-icons-left">
				<input class="input has-background-grey-darker" id="user" name="user" type="text" placeholder="Your Email">
				<span class="icon is-small is-left">
					<i class="fa fa-envelope"></i>
				</span>
			</div>
		</div>

		<div class="button is-fullwidth is-link" on:click={() => auth.signInWith('twitter')}>
			<div class="icon-text">
				<span class="icon">
					<i class="fa-solid fa-envelope"></i>
				</span>
				<span>Login with Email</span>
			</div>
		</div>

		Don't you have an account? <a href="/join">Sign up now!</a>
	</main>

	<footer class="has-background-black pb-5">
		<div class="is-flex is-flex-direction-row px-3 py-2">
			<a class="button is-text has-text-facebook" href="https://www.facebook.com/LastMessengerS/" target="_blank" title="Our Facebook page">
				<div class="icon-text">
					<span class="icon">
						<i class="fa-brands fa-facebook"></i>
					</span>
				</div>
			</a>
			<a class="button is-text has-text-twitter " href="https://www.facebook.com/LastMessengerS/" target="_blank" title="Our Facebook page">
				<div class="icon-text">
					<span class="icon">
						<i class="fa-brands fa-twitter"></i>
					</span>
				</div>
			</a>
			<a class="button is-text has-text-youtube" href="https://www.facebook.com/LastMessengerS/" target="_blank" title="Our Facebook page">
				<div class="icon-text is-align-items-center">
					<span class="icon">
						<i class="fa-brands fa-youtube"></i>
					</span>
				</div>
			</a>
			<a class="button is-text has-text-instagram" href="https://www.facebook.com/LastMessengerS/" target="_blank" title="Our Facebook page">
				<div class="icon-text">
					<span class="icon">
						<i class="fa-brands fa-instagram"></i>
					</span>
				</div>
			</a>
		</div>
		<p class="has-text-grey ml-3 is-size-7">Copyleft Stichting ArtKids Foundation 2022 - Forever</p>
	</footer>
</div>
{/if}

<style lang="scss">
	.button {
		margin-top: 1rem;
		margin-bottom: 1rem;
		min-width: 150px;
	}

	.login {
		height: 100vh;
		overflow-y:auto;
		position: fixed;
		top: 0;
		right: 0;
		left: 67vw;
		max-width: 33vw;
		width: 33vw;
		display: flex;
		flex-direction: column;
		justify-content: start;
		z-index:1;
	}

	.login-logo {
		max-width: 30vw;
		padding: 0.5rem 0.75rem 0rem;
	}

	main {
		margin-bottom: auto;
	}

	footer {
		.button:not(:hover) {
			color: whitesmoke !important;
		}
	}
</style>