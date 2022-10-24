<script lang="ts">
    import { getDigits, player, seek } from "$lib/mediaplayer";
	import { UI, UIState } from "$lib/ui";
	import { fade } from "svelte/transition";
    import Controls from './Controls.svelte';

    $: if (!$player.seeking) $player.progressProposition = $player.progress
</script>

<a class="brand fixed top-10 z-10 {$player.track.align_image == 'left' || $UI.menu.visible ? 'left-10 right-auto' : 'left-auto right-10'}" title="Let's Go Home!" href="/">
    <figure class="image m-0 p-0 w-48">
        <img class="drop-shadow-2xl" src="/images/LMS_web-logo_small_{$player.track.theme || 'dark'}.png" alt="LastMessengers Home"/>
    </figure>
    <span class="sr-only">BiafranUnity.Tv</span>
</a>

{#if $UI.controls.visible}
<div class="visible-onmouse flex flex-col justify-end bottom-0" transition:fade>

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

    <label class="h-8 absolute left-0 w-full -bottom-4 hover:bottom-0 transition-all">
    <input type="range" id="song-percentage-played"
        class="h-4 block appearance-none rounded-lg cursor-pointer {$player.track.bg_color} w-full amplitude-song-slider progress mt-3" min="0" step="1" max="100"
        bind:value={$player.progressProposition} on:input={(e) =>  { e.target.backgroundSize = $player.progress + '% 100%'; if ($player.track.howl){ $player.seeking = true; }}} on:change={() => {$player.seeking=false;seek($player.progressProposition)}}/>
    </label>

</div>
{/if}

<style global lang="scss">
    input[type=range] {
        box-shadow: 0 0 2px 0 #555;

        &[value] {
            transition: all 1s linear 0s;
        }
    }
</style>
