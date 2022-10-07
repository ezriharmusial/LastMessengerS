<script lang="ts">
    import { onDestroy, onMount } from 'svelte'

    import { mediaPlayer, players } from "$lib/mediaplayer";
    import { media } from '$lib/stores/data';

    import Controls from './Controls.svelte';
    import { autoHideControls } from '$lib/ui';

    let autoplay = true
    let visible = true;

    export function stopAll() {
        $players.forEach(p => p.player.pause())
    }

    onMount(() => {
        // Like players.push($mediaPlayer)
        if ($mediaPlayer?.player) {
            $players.add($mediaPlayer?.player)
        }
    })

    onDestroy(() => {
        // Delete cyrrent Mediaplayer from memory.
        $players.delete($mediaPlayer)

        // If there is a context destroy it
        if($mediaPlayer.context)
        // $mediaPlayer.context.close()

        // if there is players, destroy them
        if($players.length)
        stopAll()
    })

    let trackTime = "0:00"
    let duration = 0
    let currentTime = 0
    let timer

    let analyser
    // Format the Playtime
    const setTrackTime = function() {
        duration = $mediaPlayer?.player.duration
        currentTime = $mediaPlayer?.player.currentTime
        let time = Math.round(duration - currentTime);
        let minutes = Math.floor(time / 60);
        let seconds = time - 60 * minutes;
        seconds = seconds < 10 ? '0' + seconds : seconds;
        if (isNaN(minutes) && isNaN(seconds))
        trackTime = "0:00"
        else
        trackTime = minutes + ':' + seconds;
    };

    async function setAudio() {

        console.log('setAUdio Called')
        // If there is no COntext, set context first
        if (!$mediaPlayer.context) {
            try {
                // Create COntext
                $mediaPlayer.context = new AudioContext()
                // Create Analyser
                $mediaPlayer.analyser = $mediaPlayer.context.createAnalyser()
                // Set FFT
                $mediaPlayer.analyser.fftSize = 512;
            } catch(e) {
                throw new Error('The Web Audio API is unavailable');
            }
        }

        // If the Player is mounted
        if ($mediaPlayer?.player) {
            // Create Media Element Source
            $mediaPlayer.source = $mediaPlayer.context.createMediaElementSource($mediaPlayer?.player);
            // Connect Media Element Source to the Analyser
            $mediaPlayer.source?.connect($mediaPlayer.analyser);
            // Connect the analyser to the context destination
            $mediaPlayer.analyser.connect($mediaPlayer.context.destination);
            // console.log('$mediaPlayer.context', $mediaPlayer.context)
            // console.log('$mediaPlayer.analyser', $mediaPlayer.analyser)
            $mediaPlayer.bufferLength = $mediaPlayer.analyser.frequencyBinCount
            $mediaPlayer.dataArray = new Uint8Array($mediaPlayer.bufferLength);
            $mediaPlayer?.player.play()
        }

    }

    $: if ($mediaPlayer?.player && $media?.selected && $mediaPlayer.context) {
        $mediaPlayer.player.src = 'https://cdn.rawgit.com/ellenprobst/web-audio-api-with-Threejs/57582104/lib/TheWarOnDrugs.m4a' //$media.selected.media_file
        $mediaPlayer.player.load()
        setAudio()
    }

    // $: console.log('DataArray', $mediaPlayer.dataArray)
    // $: console.log('Media', $media)
    $: console.log('$mediaPlayer', $mediaPlayer.state)
</script>

<svelte:window on:mousemove={autoHideControls} on:touchmove={autoHideControls}/>


<!-- {#if $media?.selected}
<header class="section">
    <div id="header-title">
        <h1 class="animated flipInX">
            <span class="orange-header">
                <p class="title uppercase text-sm mobile text-sm touch text-lg widescreen text-xl-fullhd has-shadow">{$media.selected.title} </p>
                <p class="subtitle uppercase text-xs mobile text-sm touch text-md widescreen text-lg fullhd">by {$media.selected.track_artist}</p>
            </span>
        </h1>
        <div class="remain-time title text-sm mobile text-sm touch text-lg widescreen text-xl-fullhd orange-header has-shadow">{trackTime}</div>
    </div>
</header>
{/if} -->

<a class="brand " title="Let's Go Home!" href="/">
    <figure class="image m-0 p-0">
        <img src="/images/LMS_web-logo_small_dark.png" alt="LastMessengers Home" style="transform:translate(-100vw);"/>
    </figure>
    <span class="sr-only">BiafranUnity.Tv</span>
</a>

<audio {autoplay} id="audio"
bind:this={$mediaPlayer.player}
src='/hip-hop-fresh.mp3'
on:progress={() => $mediaPlayer.state = "progress"}
on:canplay={() => $mediaPlayer.state = "canPlay"}
on:playing={() => $mediaPlayer.state = "playing"}
on:timeupdate={() => setTrackTime()}
on:seeked={() => $mediaPlayer.state = "seeked"}
on:seeking={() => $mediaPlayer.state = "seeking"}
on:stalled={() => $mediaPlayer.state = "stalled"}
on:pause={() => $mediaPlayer.state = "paused"}
on:ended={() => $mediaPlayer.state = "ended"}
on:emptied={() => $mediaPlayer.state = "emptied"}>
</audio>

<div class="absolute bottom-32 m-auto px-10 pt-10 pb-4 flex items-center">
    <img data-amplitude-song-info="cover_art_url" alt="Track CoverArt" class="w-24 h-24 rounded-md mr-6 border border-bg-player-light-background dark:border-cover-dark-border"/>

    <div class="flex flex-col">
        <span data-amplitude-song-info="name" class="font-sans text-lg font-medium leading-7 text-slate-900 dark:text-white">{$media?.selected?.title}</span>
        <span data-amplitude-song-info="artist" class="font-sans text-base font-medium leading-6 text-gray-500 dark:text-gray-400">{$media?.selected?.track_artist}</span>
        <span data-amplitude-song-info="album" class="font-sans text-base font-medium leading-6 text-gray-500 dark:text-gray-400">{$media?.selected?.release_album}</span>
    </div>
</div>

<div class="absolute bottom-14 w-full flex flex-col px-10 pb-6">
    <input type="range" id="song-percentage-played" class="amplitude-song-slider mb-3" step="0.1" max={duration} bind:value={currentTime}/>
    <div class="flex w-full justify-between">
        <span class="amplitude-current-time text-xs font-sans tracking-wide font-medium text-sky-500 dark:text-sky-300">{currentTime || '0:00'}</span>
        <span class="amplitude-duration-time text-xs font-sans tracking-wide font-medium text-gray-500">{$mediaPlayer?.player?.duration || '0:00'}</span>
    </div>
</div>

<div class="visible-onmouse" class:fading={!visible} style="height: 1rem;">
    <Controls />
</div>

<style global lang="scss">
    // @import '../styles/components/_tube.scss';
    // @import '../styles/components/_youtube.scss';

    // Branding
    .brand {
        background-image: url("/images/LMS_web-logo_small_dark.png");
        position: absolute;
        top: 1rem;
        height: 5.45vw;

        background-size: contain;
        overflow: visible;
        background-repeat: no-repeat;

        /* ==========  Mobile Orientation Method  ========== */
        /* ==========  Mobile First Method  ========== */

        /* Extra Small Devices, Phones */
        @media (min-width: 769px) {
            left: 3vw;
            background-image: url("/images/LMS_web-logo_small_dark.png");
        }

        /* Small Devices, Tablets */
        /* Medium Devices, Desktops */
        @media (min-width: 1025px) {
            background-image: url("/images/LMS_web-logo_small_dark.png");
        }

        /* Large Devices, Wide Screens */
        /* FullHD */
        @media (min-width: 1409px) {
            background-image: url("/images/LMS_web-logo_small_dark.png");
            background-size: 8vw 8vw;
            width: 8vw;
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
        transition: opacity 0.5s;
    }

    .visible-onmouse.fading {
        opacity: 0;
    }
</style>
