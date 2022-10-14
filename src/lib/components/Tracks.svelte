<script>
	import { media } from '$lib/stores/data';
	import { crossfade, fly, scale } from 'svelte/transition';

	import { Body } from 'svelte-body';
	import TrackMediaObject from '$lib/components/TrackMediaObject.svelte';

	export let displayTracklist = true

	// Animation Settings
	const [send, receive] = crossfade({
		duration: 200,
		fallback: scale
	});

	// If media is not selected, select first track
	$: if($media?.media && !$media?.selected) $media.selected = $media.media[0]
</script>

{#if displayTracklist && $media?.media}
<Body class="overlayed" />

<div id="track-list" class="" transition:fly>
	{#each $media.media as medium}

	{#if $media.selected !== medium}
	<a href="/albums/unity-album/{medium.slug}" class="Track" on:click={() => {$media.selected = medium;}} in:receive={{key:medium}} out:send={{key:medium}}>
		<TrackMediaObject {medium} />
	</a>
	{/if}
	{:else}
	<section class="icon-text">
		<span class="fa-solid fa spinner fa-rotate"></span>
		<span>
			Loading Artists's
		</span>
	</section>
	{/each}
	<footer class="notification bg-black text-white mb-0 p-3">
		<h3><a href="/albums/unity-album/">{$media?.media[0]?.release_album}</a> - Track List</h3>
	</footer>
</div>
{/if}
