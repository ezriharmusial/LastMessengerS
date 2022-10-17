<script lang="ts">
    import { player } from "$lib/mediaplayer";
	import { UI, UIState } from "$lib/ui";
    import Controls from './Controls.svelte';

    // Load Playlist into Player

    // $: console.log('playrt', $player)
</script>

<a class="brand " title="Let's Go Home!" href="/">
    <figure class="image m-0 p-0 w-48">
        <img src="/images/LMS_web-logo_small_dark.png" alt="LastMessengers Home"/>
    </figure>
    <span class="sr-only">BiafranUnity.Tv</span>
</a>

{#if $UIState == 'fullscreen' && $player.playlist.length}
<div class="visible-onmouse flex flex-col justify-end bottom-0" class:fading={!$UI.controls.visible}>
    <Controls />

    <div class="w-full flex flex-col px-10 pb-6">
        <!-- <input type="range" id="song-percentage-played" class="amplitude-song-slider mb-3" min="0" step="1" max="100" bind:value={$player.progress} on:change={() => {}}/> -->
        <div class="flex w-full justify-between">
            <span class="amplitude-current-time text-xs font-sans tracking-wide font-medium text-sky-500 dark:text-sky-300">{$player.currentTime}</span>
            <span class="amplitude-duration-time text-xs font-sans tracking-wide font-medium text-gray-500">{$player.duration}</span>
        </div>
    </div>

</div>
{/if}

<style global lang="scss">
    // Branding
    .brand {
        transition: all 600ms;
        // background-image: url("/images/LMS_web-logo_small_dark.png");
        position: absolute;
        top: 1rem;
        height: 5.45vw;
        z-index: 3;

        // background-size: contain;
        overflow: visible;
        // background-repeat: no-repeat;

        /* ==========  Mobile Orientation Method  ========== */
        /* ==========  Mobile First Method  ========== */

        /* Extra Small Devices, Phones */
        @media (min-width: 769px) {
            left: 3vw;
        }

        /* Small Devices, Tablets */
        /* Medium Devices, Desktops */
        @media (min-width: 1025px) {
        }

        /* Large Devices, Wide Screens */
        /* FullHD */
        @media (min-width: 1409px) {
            // background-size: 8vw 8vw;
            height: 8vw;
            left: 4vw;
        }

        /* ==========  Non-Mobile First Method  ========== */

        /* Small Devices Mobile Phones */
        @media (max-width: 768px) {
            left: 7vw;
        }
    }

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
