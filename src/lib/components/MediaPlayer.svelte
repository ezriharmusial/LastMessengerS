<script lang="ts">
    import { getDigits, player, playPause, seek, setVolume } from "$lib/mediaplayer";
	import { UI, UIState } from "$lib/ui";
	import isMobile from "is-mobile";
	import { fade } from "svelte/transition";
    import Controls from './Controls.svelte';

    // $: if (!$player.seeking) $player.progressProposition = $player.progress
    // $: console.log('isMobile', isMobile())

    let key:string, code:string

    function handleKeydown(event:KeyboardEvent) {
		key = event.key;
		code = event.code;
        const volume = $player.track.howl?.volume() || 1
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

<!-- <div class="fixed top-0 bg-green-300 text-white z-50">
key:{key} code:{code}
</div> -->

<a class="brand fixed transition duration-500 top-5 xl:top-20 z-10 flex items-center {$player.track.align_image == 'left' || $UI.menu.visible ? 'left-5 xl:left-10 right-auto' : 'text-right left-auto right-5 xl:right-10'} {$player.track.align_image == 'right' ? 'flex-row-reverse': ''}" title="Let's Go Home!" href="/">
    <figure class="image transition-all duration-500 m-0 p-0 w-10 xs:w-8 lg:w-14 xl:w-16 {$player.track.align_image == 'right'  ? 'ml-1 md:ml-2 -scale-x-100' : 'mr-1 md:mr-2'}">
        <img class="drop-shadow-2xl" src="/images/red-black-purple-gold-with-sun.svg" alt="LastMessengers Home"/>
    </figure>
    <h1 class="transition-colors xs:hidden duration-500 text-xl leading-4 md:text-2xl md:leading-5 lg:text-3xl xl:text-4xl lg:leading-7 xl:leading-9 drop-shadow-2xl {$player.track.theme == 'dark' ? 'text-white' : 'text-black'}"
        class:portrait:hidden={isMobile()}>
        Last<br />
        MessengerS
    </h1>
</a>

{#if $UI.controls.visible}
<div class="visible-onmouse flex flex-col justify-end" transition:fade>

    <div class="fixed bottom-10 w-full flex flex-col lg:px-10 transition-opacity transition-colors duration-700 delay-0 opacity-0" class:opacity-100={!$player.playing || $UI.controls.visible || $UI.menu.visible} class:delay-1000={$player.playing}>
        <div class="flex w-full justify-between px-5 {$player.track.color} font-bold">
            <span class="amplitude-current-time text-xs font-sans tracking-wide {$player.track.color} {$player.track.bg_color} p-1 rounded">
                {$player.seeking && $player.track.howl ? getDigits($player.track.howl.duration() * $player.progressProposition / 100): $player.currentTime}
            </span>
            <span class="amplitude-duration-time text-xs font-sans tracking-wide {$player.track.color} {$player.track.bg_color} p-1 rounded">
                {$player.duration}
            </span>
        </div>
    </div>
    <div class="mb-6 mx-auto">
        <Controls />
    </div>

    <label class="h-8 absolute left-0 w-full -bottom-3 hover:bottom-0 transition-all">
    <input type="range" id="song-percentage-played"
        class="h-5 block appearance-none cursor-pointer {$player.track.bg_color} w-full amplitude-song-slider mt-4 pt-1" min="0" step="1" max="100"
        bind:value={$player.progressProposition} on:input={(e) =>  { e.target.backgroundSize = $player.progress + '% 100%'; if ($player.track.howl){ $player.seeking = true; }}} on:change={() => {$player.seeking=false;seek($player.progressProposition)}}/>
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
