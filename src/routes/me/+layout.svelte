<script>
	import { session } from '$lib/session';

	// $: console.log('session', session)
</script>

		{#if true} <!-- TODO replace with $session.user-->
		<slot></slot>
		{:else}
		<section class="section">
			<div class="column">
				<h1 class="title">You are not Logged in</h1>
				<p>Please login <a href="/login">here</a></p>
			</div>
		</section>
		{/if}