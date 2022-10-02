<script>
	import { media } from '$lib/stores/data';
	import { crossfade, scale } from 'svelte/transition';
	import MediaPlayer from '$lib/components/MediaPlayer.svelte';
	import TrackMediaObject from '$lib/components/TrackMediaObject.svelte';

	// import TrackInfo from '$lib/components/TrackInfo.svelte';

	// Animation Settings
	const [send, receive] = crossfade({
		duration: 200,
		fallback: scale
	});

	// If media is not selected, select first track
	$: if($media?.media && !$media?.selected) $media.selected = $media.media[0]
</script>

{#if $media?.media}
<div id="track-list" class="is-flex is-flex-direction-column">

	{#each $media.media as medium}

	{#if $media.selected !== medium}
	<div class="Track" on:click={() => {$media.selected = medium}} in:receive={{key:medium}} out:send={{key:medium}}>

		<TrackMediaObject {medium} />

	</div>
	{/if}
	{:else}
	<div class="icon-text">
		<span class="fa-solid fa spinner fa-rotate"></span>
		<span>
			Loading Artists's
		</span>
	</div>
	{/each}
</div>
{/if}


<style global lang="scss">
	@import '../lib/styles/common/_variables.scss';
	@import '../lib/styles/layouts/_posts.scss';
	@import '../lib/styles/themes/_lastmessengers.scss';

	.video {
		position: relative;
		display: flex;
		align-items: stretch;
		justify-content: flex-end;
		flex-direction: column;
		will-change: transform;

		.delete {
			position: absolute;
			right: 1rem;
			top: 1rem;
			z-index: 1;
		}

		img {
			object-fit: cover;
			cursor: pointer;
		}
	}

	.column {
		position: relative;
	}
</style>