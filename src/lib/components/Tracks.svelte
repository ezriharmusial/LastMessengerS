<script>
	import { media } from '$lib/stores/data';

	import { player, skipTo } from '$lib/mediaplayer';

	import TrackMediaObject from '$lib/components/TrackMediaObject.svelte';

	export let displayTracklist = true

	export function handleButtonKeys(event, order) {
		event.preventDefault()
		if(event.key === "Enter" || event.key === "Space"){
 		   	// do something here
			console.log('event.key', event.key, 'pressed')
			skipTo(order)
		}

	}

	// If media is not selected, select first track
	// $: if($media?.media && !$media?.selected) $media.selected = $media.media[0]
</script>

{#if displayTracklist && $media?.media}
<div id="track-list">

	<header class="sticky top-0 text-xl bg-white dark:bg-black font-semibold mb-0 p-3">
		<h3><a href="/unity-album-2022/" aria-label="Unity Album info">{$media?.media[0]?.release_album}</a> - Track List</h3>
	</header>
	{#each $media.media as medium}

	<div role="button" class="Track cursor-pointer {medium.bgColor} {medium.color}" on:keydown={(event) => handleButtonKeys(event, medium.order)} on:click={() => {skipTo(medium.order)}}>
		<TrackMediaObject {medium} />
	</div>
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
