<script lang="ts">
    import { getDigits, player, seek } from "$lib/mediaplayer";
	import { UI, UIState } from "$lib/ui";
    import Controls from './Controls.svelte';

    $: if (!$player.seeking) $player.progressProposition = $player.progress
</script>

<a class="brand fixed top-10 z-10 {$player.track.align_image == 'left' ? 'left-10 right-auto' : 'left-auto right-10'}" title="Let's Go Home!" href="/">
    <figure class="image m-0 p-0 w-48">
        <img class="drop-shadow-2xl" src="/images/LMS_web-logo_small_{$player.track.theme || 'dark'}.png" alt="LastMessengers Home"/>
    </figure>
    <span class="sr-only">BiafranUnity.Tv</span>
</a>

{#if $UIState == 'fullscreen' && $player.track}
<div class="visible-onmouse flex flex-col justify-end bottom-0" class:fading={!$UI.controls.visible}>

    <div class="fixed -bottom-2 w-full flex flex-col lg:px-10 transition-opacity duration-700 delay-0 opacity-0" class:opacity-100={!$player.playing || $UI.controls.visible} class:delay-1000={$player.playing}>
        <div class="flex w-full justify-between px-5 {$player.track.color} font-bold">
            <span class="amplitude-current-time text-xs font-sans tracking-wide {$player.track.color} {$player.track.bg_color} p-1 rounded">
                {$player.seeking && $player.track.howl ? getDigits($player.track.howl.duration() * $player.progressProposition / 100): $player.currentTime}
            </span>
            <span class="amplitude-duration-time text-xs font-sans tracking-wide {$player.track.color} {$player.track.bg_color} p-1 rounded">
                {$player.duration}
            </span>
        </div>
        <input type="range" id="song-percentage-played"
        class="amplitude-song-slider mt-3" min="0" step="1" max="100"
        bind:value={$player.progressProposition} on:input={() =>  { if ($player.track.howl) $player.seeking = true; }} on:change={() => {$player.seeking=false;seek($player.progressProposition)}}/>
    </div>
    <div class="mb-6 mx-auto">
        <Controls />
    </div>
</div>
{/if}

<style global lang="scss">
    // Branding


    .progress {
        height: 3px !important;
    }

    #header-title {
        @media all and (orientation: landscape) {
            position: absolute;
            left: 0;
            left: 0;
            bottom: 1rem;
        }
    }

    .progress {
        position: absolute;
        bottom: 0;
        height: 2px;

        &[value] {
            transition: all 1s linear 0s;
        }
    }

    .visible-onmouse {
        opacity: 1;
        height: 100vh;
        width: 100vw;
        transition: opacity 0.5s;
    }

    .visible-onmouse.fading {
        opacity: 0;
    }
</style>
