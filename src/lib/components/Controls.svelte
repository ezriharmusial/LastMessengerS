<script>
	import { media } from "$lib/stores/data";

	export let medium

	// console.log('control', medium)
</script>

<nav class="control buttons has-addons">
	<button class="open-modal button is-dark" data-modalid="#search-modal" title="Search LinkCasts"><svg class="svg-icon" version="1.1" xmlns="https://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path d="M31.008 27.231l-7.58-6.447c-.784-.705-1.622-1.029-2.299-.998a11.954 11.954 0 0 0 2.87-7.787c0-6.627-5.373-12-12-12s-12 5.373-12 12 5.373 12 12 12c2.972 0 5.691-1.081 7.787-2.87-.031.677.293 1.515.998 2.299l6.447 7.58c1.104 1.226 2.907 1.33 4.007.23s.997-2.903-.23-4.007zM12 20a8 8 0 1 1 0-16 8 8 0 0 1 0 16z"></path></svg></button>

	{#if medium?.previous }
	<button on:click={() => $media.present = medium.previous} class="button is-dark" id="previous-linkcast" title="Play Previous: {medium.previous.track_artist} – {medium.previous.title}" aria-label="Play Previous: {medium.previous.track_artist} – {medium.previous.title}" data-post-img-url="{medium.previous.cover_image}"><svg class="svg-icon" version="1.1" xmlns="https://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path d="M18 5v10L28 5v22L18 17v10L7 16z"></path></svg></button>
	{/if}

	<!--
		{ random_post_link[0] }<svg class="svg-icon" version="1.1" xmlns="https://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path d="M24 22h-3.172l-5-5 5-5H24v5l7-7-7-7v5h-4a2 2 0 0 0-1.414.586L13 14.172 7.414 8.586A2 2 0 0 0 6 8H0v4h5.172l5 5-5 5H0v4h6a2 2 0 0 0 1.414-.586L13 19.828l5.586 5.586A2 2 0 0 0 20 26h4v5l7-7-7-7v5z"></path></svg>{ random_post_link[1] }
	-->

	{#if medium?.next }
	<button on:click={() => $media.present = medium.next} class="button is-dark" id="next-linkcast" title="Play Next: {medium.next.track_artist} – {medium.next.title}" aria-label="Play next: {medium.next.track_artist} – {medium.next.title}" data-post-img-url="{medium.next.cover_image}">
		<svg class="svg-icon" version="1.1" xmlns="https://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path d="M16 27V17L6 27V5l10 10V5l11 11z"></path></svg>
	</button>
	{/if}

	<button class="button is-dark" title="Share BUTv LinkCast"><svg class="svg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M352 320c-22.608 0-43.387 7.819-59.79 20.895l-102.486-64.054a96.551 96.551 0 0 0 0-41.683l102.486-64.054C308.613 184.181 329.392 192 352 192c53.019 0 96-42.981 96-96S405.019 0 352 0s-96 42.981-96 96c0 7.158.79 14.13 2.276 20.841L155.79 180.895C139.387 167.819 118.608 160 96 160c-53.019 0-96 42.981-96 96s42.981 96 96 96c22.608 0 43.387-7.819 59.79-20.895l102.486 64.054A96.301 96.301 0 0 0 256 416c0 53.019 42.981 96 96 96s96-42.981 96-96-42.981-96-96-96z"></path></svg></button>

	<button href="#donate-for-butv" class="button is-primary" title="Donate to keep BUTv alive"><svg class="svg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M111.4 295.9c-3.5 19.2-17.4 108.7-21.5 134-.3 1.8-1 2.5-3 2.5H12.3c-7.6 0-13.1-6.6-12.1-13.9L58.8 46.6c1.5-9.6 10.1-16.9 20-16.9 152.3 0 165.1-3.7 204 11.4 60.1 23.3 65.6 79.5 44 140.3-21.5 62.6-72.5 89.5-140.1 90.3-43.4.7-69.5-7-75.3 24.2zM357.1 152c-1.8-1.3-2.5-1.8-3 1.3-2 11.4-5.1 22.5-8.8 33.6-39.9 113.8-150.5 103.9-204.5 103.9-6.1 0-10.1 3.3-10.9 9.4-22.6 140.4-27.1 169.7-27.1 169.7-1 7.1 3.5 12.9 10.6 12.9h63.5c8.6 0 15.7-6.3 17.4-14.9.7-5.4-1.1 6.1 14.4-91.3 4.6-22 14.3-19.7 29.3-19.7 71 0 126.4-28.8 142.9-112.3 6.5-34.8 4.6-71.4-23.8-92.6z"></path></svg></button>
</nav>

<style lang="scss">
	svg.svg-icon {
		display: inline-block;
	}

	@media all and (orientation: landscape) {
		.control{
			button {
				margin-bottom:0;
			}

			position: fixed;
			right: 50%;
			bottom: 2rem;
			transform: translate(50%, 0);
			box-shadow: -6px 4px 14px 0 rgba(0, 0, 0, 0.75);
			z-index: 1;
		}
	}
</style>