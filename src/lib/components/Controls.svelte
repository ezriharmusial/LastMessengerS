<script>
	import { player, playerState  } from "$lib/mediaplayer";
	import { media } from "$lib/stores/data";
	console.log('control', $playerState)
</script>

{#if $player}
<nav class="control buttons has-addons">
	<button class="open-modal button is-dark" data-modalid="#search-modal" title="Search LinkCasts">
		<div class="icon">
			<i class="fa-solid fa-search"></i>
		</div>
	</button>

	{#if $media?.selected?.next }
	<button on:click={() => {$media.selected = $media.media.find(track => track.title == $media.selected.next.title)}} class="button is-dark" id="next-linkcast" title="Play Next: {$media.selected.next.track_artist} – {$media.selected.next.title}" aria-label="Play next: {$media.selected.next.track_artist} – {$media.selected.next.title}" data-post-img-url="{$media.selected.next.cover_image}">
		<div class="icon">
			<i class="fa-solid fa-backward"></i>
		</div>
	</button>
	{/if}

	{#if $playerState.state == "paused"}
	<button on:click={() => $player.play()} class="button is-dark" id="previous-linkcast" title="Play Previous: {$media.selected.previous.track_artist} – {$media.selected.previous.title}" aria-label="Play Previous: {$media.selected.previous.track_artist} – {$media.selected.previous.title}" data-post-img-url="{$media.selected.previous.cover_image}">
		<div class="icon">
			<i class="fa-solid fa-play"></i>
		</div>
	</button>
	{/if}
	{#if $playerState.state == "playing"}
	<button on:click={() => {$player.pause()}} class="button is-dark" id="previous-linkcast" title="Play Previous: {$media.selected.previous.track_artist} – {$media.selected.previous.title}" aria-label="Play Previous: {$media.selected.previous.track_artist} – {$media.selected.previous.title}" data-post-img-url="{$media.selected.previous.cover_image}">
		<div class="icon">
			<i class="fa-solid fa-pause"></i>
		</div>
	</button>
	{/if}
	<!--
		{ random_post_link[0] }<svg class="svg-icon" version="1.1" xmlns="https://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path d="M24 22h-3.172l-5-5 5-5H24v5l7-7-7-7v5h-4a2 2 0 0 0-1.414.586L13 14.172 7.414 8.586A2 2 0 0 0 6 8H0v4h5.172l5 5-5 5H0v4h6a2 2 0 0 0 1.414-.586L13 19.828l5.586 5.586A2 2 0 0 0 20 26h4v5l7-7-7-7v5z"></path></svg>{ random_post_link[1] }
	-->

	{#if $media?.selected?.previous }
	<button on:click={() => {$media.selected = $media.media.find(track => track.title == $media.selected.previous.title)}} class="button is-dark" id="previous-linkcast" title="Play Previous: {$media.selected.previous.track_artist} – {$media.selected.previous.title}" aria-label="Play Previous: {$media.selected.previous.track_artist} – {$media.selected.previous.title}" data-post-img-url="{$media.selected.previous.cover_image}">
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
{/if}

<style lang="scss">
	@media all and (orientation: landscape) {
		.control{
			button {
				margin-bottom:0;
			}

			position: fixed;
			right: 50%;
			bottom: 1rem;
			transform: translate(50%, -50%);
			box-shadow: -6px 4px 14px 0 rgba(0, 0, 0, 0.75);
		}
	}
</style>