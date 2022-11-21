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


	<img class="lazy login-logo my-6" alt="Login Logo" src="/images/LMS_web-logo_small_dark.png">

  	<button class="font-mono absolute top-4 right-6 font-bold text-white text-2xl" data-modalid="#search-modal" aria-label="close" on:click={toggleLogin}>x</button>

	<main class="section mt-0 pt-2">
		<div class="buttons">
			<button class="button w-full bg-white text-black" on:click={() => auth.signInWith('google')}>
				<div class="icon-text">
					<span class="icon">
						<svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"/></svg>
					</span>
					<span>Login with Google</span>
				</div>
			</button>
			<button class="button w-full is-facebook" on:click={() => auth.signInWith('facebook')}>
				<div class="icon-text">
					<span class="icon">
						<svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"/></svg>
					</span>
					<span>Login with Facebook</span>
				</div>
			</button>
			<button class="button w-full is-twitter" on:click={() => auth.signInWith('twitter')}>
				<div class="icon-text">
					<span class="icon">
						<svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"/></svg>
					</span>
					<span>Login with Twitter</span>
				</div>
			</button>
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

		<button class="button text-white bg-neutral-800 w-full" on:click={() => auth.signInWith('twitter')}>
			<div class="icon-text">
				<span class="icon">
					<i class="fa-solid fa-envelope"></i>
				</span>
				<span>Login with Email</span>
			</div>
		</button>

		Don't you have an account? <a href="/join">Sign up now!</a>
	</main>

	<footer class="bg-black pb-5">
		<div class="flex flex-direction-row px-3 py-2">
			<a class="button has-text-facebook" href="https://www.facebook.com/LastMessengerS/" target="_blank" rel="nofollow noopener noreferrer" title="Our Facebook page">
				<div class="icon-text">
					<span class="icon">
						<svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"/></svg>
					</span>
				</div>
			</a>
			<a class="button has-text-twitter " href="https://www.facebook.com/LastMessengerS/" target="_blank" rel="nofollow noopener noreferrer" title="Our Facebook page">
				<div class="icon-text">
					<span class="icon">
						<svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"/></svg>
					</span>
				</div>
			</a>
			<a class="button has-text-youtube" href="https://www.facebook.com/LastMessengerS/" target="_blank" rel="nofollow noopener noreferrer" title="Our Facebook page">
				<div class="icon-text align-items-center">
					<span class="icon">
						<svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"/></svg>
					</span>
				</div>
			</a>
			<a class="button has-text-instagram" href="https://www.facebook.com/LastMessengerS/" target="_blank" rel="nofollow noopener noreferrer" title="Our Facebook page">
				<div class="icon-text">
					<span class="icon">
						<svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>
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