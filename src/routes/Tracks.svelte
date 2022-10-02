<script>
	import { media } from '$lib/stores/data';
	import { crossfade, fly, scale } from 'svelte/transition';
	import MediaPlayer from '$lib/components/MediaPlayer.svelte';
	import TrackMediaObject from '$lib/components/TrackMediaObject.svelte';

	// import TrackInfo from '$lib/components/TrackInfo.svelte';

	export let displayTracklist = false

	// Animation Settings
	const [send, receive] = crossfade({
		duration: 200,
		fallback: scale
	});

	// If media is not selected, select first track
	$: if($media?.media && !$media?.selected) $media.selected = $media.media[0]
</script>

<button class="button toggle-playlist is-dark is-text is-blurred" class:has-text-primary={displayTracklist} on:click={() => displayTracklist = !displayTracklist} title="Togge Playlist">
	<div class="icon-text">
		<span class="icon">
			<i class="fa-solid fa-list"></i>
		</span>
	</div>
</button>

{#if displayTracklist && $media?.media}
<div id="track-list" class="is-flex is-flex-direction-column" transition:fly>
	<header class="notification is-black is-flex mb-0">
		<h3>Track List</h3>
            <button class="delete is-large" on:click={() => displayTracklist = !displayTracklist}></button>
	</header>
	{#each $media.media as medium}

	{#if $media.selected !== medium}
	<section class="Track" on:click={() => {$media.selected = medium}} in:receive={{key:medium}} out:send={{key:medium}}>

		<TrackMediaObject {medium} />

	</section>
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


<style global lang="scss">
	@import '../lib/styles/common/_variables.scss';
	@import '../lib/styles/layouts/_posts.scss';
	@import '../lib/styles/themes/_lastmessengers.scss';

	.toggle-playlist{
		position: fixed;
		bottom: 1rem;
		right: 1rem;
	}

	#track-list {
		position: fixed;
		top: 0;
		right:0;
		bottom: 0;
		height: 100vh;
		overflow-y: auto;
		max-width: 60vw;
	}

	header.notification {
		position: sticky;
		top: 0;
		z-index:1;
	}

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