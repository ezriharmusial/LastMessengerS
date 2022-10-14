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
<div class="login bg-black px-4" transition:fly>


	<img class="login-logo my-6" alt="Login Logo" src="/images/LMS_web-logo_small_dark.png">

  	<button class="font-mono absolute top-4 right-6 font-bold text-white text-2xl" data-modalid="#search-modal" aria-label="close" on:click={toggleLogin}>x</button>

	<main class="section mt-0 pt-2">
		<div class="buttons">
			<div class="button w-full bg-white text-black" on:click={() => auth.signInWith('google')}>
				<div class="icon-text">
					<span class="icon">
						<i class="fa-brands fa-google"></i>
					</span>
					<span>Login with Google</span>
				</div>
			</div>
			<div class="button w-full is-facebook" on:click={() => auth.signInWith('facebook')}>
				<div class="icon-text">
					<span class="icon">
						<i class="fa-brands fa-facebook"></i>
					</span>
					<span>Login with Facebook</span>
				</div>
			</div>
			<div class="button w-full is-twitter" on:click={() => auth.signInWith('twitter')}>
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
			<label for="user" class="label sr-only">Username</label>
			<div class="control has-icons-left">
				<input class="input has-background-grey-darker" id="user" name="user" type="text" placeholder="Your Email">
				<span class="icon small left">
					<i class="fa fa-envelope"></i>
				</span>
			</div>
		</div>

		<div class="button text-white bg-neutral-800 w-full" on:click={() => auth.signInWith('twitter')}>
			<div class="icon-text">
				<span class="icon">
					<i class="fa-solid fa-envelope"></i>
				</span>
				<span>Login with Email</span>
			</div>
		</div>

		Don't you have an account? <a href="/join">Sign up now!</a>
	</main>

	<footer class="bg-black pb-5">
		<div class="flex flex-direction-row px-3 py-2">
			<a class="button has-text-facebook" href="https://www.facebook.com/LastMessengerS/" target="_blank" title="Our Facebook page">
				<div class="icon-text">
					<span class="icon">
						<i class="fa-brands fa-facebook"></i>
					</span>
				</div>
			</a>
			<a class="button has-text-twitter " href="https://www.facebook.com/LastMessengerS/" target="_blank" title="Our Facebook page">
				<div class="icon-text">
					<span class="icon">
						<i class="fa-brands fa-twitter"></i>
					</span>
				</div>
			</a>
			<a class="button has-text-youtube" href="https://www.facebook.com/LastMessengerS/" target="_blank" title="Our Facebook page">
				<div class="icon-text align-items-center">
					<span class="icon">
						<i class="fa-brands fa-youtube"></i>
					</span>
				</div>
			</a>
			<a class="button has-text-instagram" href="https://www.facebook.com/LastMessengerS/" target="_blank" title="Our Facebook page">
				<div class="icon-text">
					<span class="icon">
						<i class="fa-brands fa-instagram"></i>
					</span>
				</div>
			</a>
		</div>
		<p class="text-neutral-400 ml-3 text-xs">Copyleft Stichting ArtKids Foundation 2022 - Forever</p>
	</footer>
</div>
{/if}

<style lang="scss">
	.login {
		height: 100vh;
		overflow-y:auto;
		position: fixed;
		top: 0;
		right: 0;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		z-index:2;
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