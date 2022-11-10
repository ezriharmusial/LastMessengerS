<script lang="ts">
	import { onMount } from 'svelte';
	import { player } from '$lib/mediaplayer';
	import { media } from '$lib/stores/data';

	onMount(() => {
		if ($media) {
			// Initialize playlist
			$player.playlist = $media.media

			// Initialize Previous, Current, Next track.
			$player.track = $player?.playlist[$player?.index] ? $player.playlist[$player.order] : false
			$player.next = $player?.playlist[$player?.index + 1] ? $player.playlist[$player.order + 1] : false
			$player.previous = $player?.playlist[$player?.index - 1] ? $player.playlist[$player.order - 1] : false
		}
	});
</script>

<slot></slot>