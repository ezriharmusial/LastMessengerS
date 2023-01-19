<script>
	import { page } from '$app/stores';

	const dev = process.env.NODE_ENV === 'development';
</script>

<style>
	h1, p {
		margin: 0 auto;
	}

	h1 {
		font-size: 2.8em;
		font-weight: 700;
		margin: 0 0 0.5em 0;
	}

	p {
		margin: 1em auto;
	}

	@media (min-width: 480px) {
		h1 {
			font-size: 4em;
		}
	}
</style>

<svelte:head>
	{#if $page}
	<title>{$page.status}</title>
	{/if}
</svelte:head>

<main class="pt-32 px-10 content text-3xl">

{#if $page}

<h1 class="text-4xl marker">{$page.status}</h1>
{#if $page.error.message}
<p>Sorry we couldn't find what you are finding because of a <em>{$page.error.message}</em></p>
{/if}

{#if dev && $page.error.stack}
<pre>{$page.error.stack}</pre>
{/if}

{/if}
</main>