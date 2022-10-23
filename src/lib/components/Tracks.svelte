<script>
	import { media } from '$lib/stores/data';
	import { fly } from 'svelte/transition';

	import { Body } from 'svelte-body';
	import TrackMediaObject from '$lib/components/TrackMediaObject.svelte';
	import { player, skipTo } from '$lib/mediaplayer';

	export let displayTracklist = true

	// If media is not selected, select first track
	$: if($media?.media && !$media?.selected) $media.selected = $media.media[0]
</script>

{#if displayTracklist && $media?.media}
<Body class="overlayed" />

<div id="track-list">

	<header class="sticky top-0 text-xl {$player.track.theme == 'light' ? 'bg-white' : 'bg-black'} font-semibold mb-0 p-3 z-50">
		<h3><a href="/albums/unity-album/">{$media?.media[0]?.release_album}</a> - Track List</h3>
	</header>
	{#each $media.media as medium}

	{#if $media.selected !== medium}
	<div class="Track cursor-pointer" on:click={() => {skipTo(medium.order)}}>
		<TrackMediaObject {medium} />
	</div>
	{/if}
	{:else}
	<section class="icon-text">
		<span class="fa-solid fa spinner fa-rotate"></span>
		<span>
			Loading Artists's
		</span>
	</section>
	{/each}
</div>
{/if}
