<script>
	import { session } from '$lib/session';

	// $: console.log('session', session)
</script>

		{#if $session.user}
		<slot></slot>
		{:else}
		<section class="section">
			<div class="column">
				<h1 class="title">You are not Logged in</h1>
				<p>Please login <button class="button is-text">here</button></p>
			</div>
		</section>
		{/if}