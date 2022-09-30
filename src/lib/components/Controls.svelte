<script>
	import { media } from "$lib/stores/data";

	export let medium

	// console.log('control', medium)
</script>

<nav class="control buttons has-addons">
	<button class="open-modal button is-dark" data-modalid="#search-modal" title="Search LinkCasts">
		<div class="icon">
			<i class="fa-solid fa-search"></i>
		</div>
	</button>

	{#if medium?.previous }
	<button on:click={() => $media.present = medium.previous} class="button is-dark" id="previous-linkcast" title="Play Previous: {medium.previous.track_artist} – {medium.previous.title}" aria-label="Play Previous: {medium.previous.track_artist} – {medium.previous.title}" data-post-img-url="{medium.previous.cover_image}">
		<div class="icon">
			<i class="fa-solid fa-backward"></i>
		</div>
	</button>
	{/if}

	<!--
		{ random_post_link[0] }<svg class="svg-icon" version="1.1" xmlns="https://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path d="M24 22h-3.172l-5-5 5-5H24v5l7-7-7-7v5h-4a2 2 0 0 0-1.414.586L13 14.172 7.414 8.586A2 2 0 0 0 6 8H0v4h5.172l5 5-5 5H0v4h6a2 2 0 0 0 1.414-.586L13 19.828l5.586 5.586A2 2 0 0 0 20 26h4v5l7-7-7-7v5z"></path></svg>{ random_post_link[1] }
	-->

	{#if medium?.next }
	<button on:click={() => $media.present = medium.next} class="button is-dark" id="next-linkcast" title="Play Next: {medium.next.track_artist} – {medium.next.title}" aria-label="Play next: {medium.next.track_artist} – {medium.next.title}" data-post-img-url="{medium.next.cover_image}">
		<div class="icon">
			<i class="fa-solid fa-forward"></i>
		</div>
	</button>
	{/if}

	<button class="button is-dark" title="Share BUTv LinkCast">
		<div class="icon">
			<i class="fa-solid fa-share"></i>
		</div>
	</button>

	<button href="#donate-for-butv" class="button is-primary" title="Donate to keep BUTv alive">
		<div class="icon">
			<i class="fa-solid fa-circle-dollar-to-slot"></i>
		</div>
	</button>
</nav>

<style lang="scss">
	@media all and (orientation: landscape) {
		.control{
			button {
				margin-bottom:0;
			}

			position: fixed;
			right: 50%;
			transform: translate(50%, -50%);
			box-shadow: -6px 4px 14px 0 rgba(0, 0, 0, 0.75);
			z-index: 1;
		}
	}
</style>