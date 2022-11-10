<script>
	import { artists } from '$lib/stores/data';

	import Artist from '$lib/components/Artist.svelte';

	let selected = null;

	// $: console.log('$artists', $artists.artists, selected)
</script>

<h1 class="bg-black text-white text-5xl p-4 m-auto">LastMessengerS Artists</h1>

<div class="grid landscape:grid-flow-col landscape:grid-rows-3 justify-center">

{#if $artists}
{#each $artists.filter(lastmessenger => lastmessenger.active == true) as artist}
{#if selected !== artist}
<Artist {artist} />
{/if}
{:else}
<section class="section">
	<div class="container mx-auto">
		<div class="content">
			<h1 class="title">
				<div class="icon-text">
					<span class="fa-solid fa spinner fa-rotate" />
					<span> Loading Artists's </span>
				</div>
			</h1>
		</div>
	</div>
</section>
{/each}
{/if}
</div>
