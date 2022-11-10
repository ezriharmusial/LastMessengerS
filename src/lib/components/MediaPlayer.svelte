<script lang="ts">
    import { getDigits, player, playPause, seek, setVolume } from "$lib/mediaplayer";
	import { artists } from "$lib/stores/data";
	import { UI, UIState } from "$lib/ui";
	import isMobile from "is-mobile";
	import { fade } from "svelte/transition";
	import ArtistInfo from "./ArtistInfo.svelte";
    import Controls from './Controls.svelte';
	import Share from "./sharing/Share.svelte";
	import TrackInfo from "./TrackInfo.svelte";

    let key:string, code:string

    function handleKeydown(event:KeyboardEvent) {
		key = event.key;
		code = event.code;
        const volume = $player.track?.howl?.volume() || 1
        const progress = $player.progress

        switch (code) {
            case 'Space':
                // Play Pause
                // console.log('playpause')
                playPause()
                break;
            case 'ArrowRight':
                // Skip Forward
                // console.log('skipForward')
                if (progress < 100)
                    seek(progress + 1.25)
                break;
            case 'ArrowLeft':
                // Skip Backward
                // console.log('skipBackward')
                if (progress > 0)
                    seek(progress - 1.25)
                break;
            case 'ArrowUp':
                // Volume Up
                console.log('volume up', volume)
                if (volume < 1)
                    setVolume(volume + 0.05)
                break;

            case 'ArrowDown':
                // Volume Down
                console.log('volume down', volume)
                if (volume > 0)
                    setVolume(volume - 0.05)
                break;

            default:
                break;
        }

	}

    // $: console.log('track', $player?.track?.howl?.volume())
</script>

<svelte:window on:keydown={handleKeydown}/>

{#if true}
<section class="info-layer absolute portrait:h-full portrait:w-full portrait:top-0 landscape:bottom-10 landscape:sm:bottom-10 landscape:lg:bottom-32 left-0 landscape:m-10 flex portrait:flex-col items-center justify-evenly portrait:justify-end transition-opacity duration-700 delay-0"
class:opacity-0={$player.playing || $UI.menu.visible}
class:delay-1000={$player.playing}
>
<TrackInfo />
</section>
{/if}

{#if $UI.share.visible}
<section class="artist-info flex flex-col content-center justify-center items-center absolute transition-colors duration-700 top-0 left-0 h-full w-full overflow-hidden overflow-y-scroll z-10  {$player.track?.theme == "light" ? 'text-black bg-white/80' : 'text-white bg-black/80'}" transition:fade>
    <TrackInfo />
    <Share />
</section>
{/if}

{#if $UI.artist.visible}
<section class="artist-info absolute transition-colors duration-700 top-0 left-0 h-full w-full overflow-hidden overflow-y-scroll z-10  {$player.track?.theme == "light" ? 'text-black bg-white/80' : 'text-white bg-black/80'}" transition:fade>
	<ArtistInfo artist={$artists.find(artist => $player.track?.artist == artist.stage_name)}/>
</section>
{/if}

{#if $UI.controls.visible}
<div class="visible-onmouse flex flex-col justify-end" transition:fade>

    <div class="fixed bottom-10 w-full flex flex-col lg:px-10 transition-colors duration-700 delay-0 opacity-0" class:opacity-100={!$player.playing || $UI.controls.visible || $UI.menu.visible} class:delay-1000={$player.playing}>
        <div class="flex w-full justify-between px-5 {$player.track?.color} font-bold">
            <span class="amplitude-current-time text-xs font-sans tracking-wide {$player.track?.color} {$player.track?.bg_color} p-1 rounded">
                {$player.seeking && $player.track?.howl ? getDigits($player.track?.howl.duration() * $player.progressProposition / 100): $player.currentTime}
            </span>
            <span class="amplitude-duration-time text-xs font-sans tracking-wide {$player.track?.color} {$player.track?.bg_color} p-1 rounded">
                {$player.duration}
            </span>
        </div>
    </div>
    <div class="mb-6 mx-auto">
        <Controls />
    </div>

    <label class="h-8 absolute left-0 w-full -bottom-3 hover:bottom-0 transition-all">
    <input type="range" id="song-percentage-played"
        class="h-5 block appearance-none cursor-pointer {$player.track?.bg_color} w-full amplitude-song-slider mt-4 pt-1" min="0" step="1" max="100"
        bind:value={$player.progressProposition} on:input={(e) =>  { e.target.backgroundSize = $player.progress + '% 100%'; if ($player.track?.howl){ $player.seeking = true; }}} on:change={() => {$player.seeking=false;seek($player.progressProposition)}}/>
    </label>

</div>
{/if}

<style global lang="scss">
    .brand {
        font-family: 'Permanent Marker', sans-serif;
    }


    input[type=range] {
        box-shadow: 0 0 2px 0 #555;

        &[value] {
            transition: all 1s linear 0s;
        }
    }
</style>
