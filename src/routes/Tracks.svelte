<script>
	import { media } from '$lib/stores/data';
	import { crossfade, fly, scale } from 'svelte/transition';

    import { Body } from 'svelte-body';
	import TrackMediaObject from '$lib/components/TrackMediaObject.svelte';

	export let displayTracklist = false

	// Animation Settings
	const [send, receive] = crossfade({
		duration: 200,
		fallback: scale
	});

	// If media is not selected, select first track
	$: if($media?.media && !$media?.selected) $media.selected = $media.media[0]
</script>

<button class="button toggle-playlist is-text is-blurred" class:has-text-primary={displayTracklist} on:click={() => displayTracklist = !displayTracklist} title="Togge Playlist">
	<div class="icon-text">
		<span class="icon">
			<i class="fa-solid fa-list"></i>
		</span>
	</div>
</button>


{#if displayTracklist && $media?.media}
<Body class="is-overlayed" />
<div class="backdrop" on:click={() => displayTracklist = !displayTracklist}></div>

<div id="track-list" class="column is-three-fifths-tablet is-flex is-flex-direction-column" transition:fly>
	{#each $media.media as medium}

	{#if $media.selected !== medium}
	<a href="/albums/unity-album/{medium.slug}" class="Track" on:click={() => {$media.selected = medium; displayTracklist = !displayTracklist}} in:receive={{key:medium}} out:send={{key:medium}}>

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
	<footer class="notification is-black mb-0">
		<h3><a href="/albums/unity-album/">{$media.media[0].release_album}</a> - Track List</h3>
		<button class="delete is-large" on:click={() => displayTracklist = !displayTracklist}></button>
	</footer>
</div>
{/if}



<style global lang="scss">
	@import '../lib/styles/common/_variables.scss';
	@import '../lib/styles/layouts/_posts.scss';
	@import '../lib/styles/themes/_lastmessengers.scss';

	.toggle-playlist{
		position: fixed !important;
		bottom: 1rem !important;
		right: 1rem !important;
	}

	#track-list {
		position: absolute;
		top: 0;
		right:0;
		max-height: 100vh;
		overflow-y: scroll;
	    backdrop-filter: blur(5px);
	}

	footer.notification {
		position: sticky;
		bottom: 0;
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

	.backdrop {
		position: fixed;
		top: 0;
		left: 0;
		background: purple;
		width: 100vw;
		height: 100vh;
		opacity: 0.2;

	}
</style>