<script lang="ts">
    import { onDestroy, onMount } from 'svelte'

    import { mediaPlayer, players, progress, canPlay, playing, pause, seeked, seeking, stalled, ended, emptied } from "$lib/mediaplayer";
    import { media } from '$lib/stores/data';

    import Controls from './Controls.svelte';
    import { autoHideControls } from '$lib/ui';

    let autoplay = false
    $mediaPlayer.dataArray
    let visible = true;

    export function stopAll() {
        $players.forEach(p => p.player.pause())
    }

    onMount(() => {
        // Like players.push($mediaPlayer)
        if ($mediaPlayer.player) {
            $players.add($mediaPlayer.player)
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
        duration = $mediaPlayer.duration
        currentTime = $mediaPlayer.currentTime
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
        if ($mediaPlayer.player) {
            // Create Media Element Source
            $mediaPlayer.source = $mediaPlayer.context.createMediaElementSource($mediaPlayer.player);
            // Connect Media Element Source to the Analyser
            $mediaPlayer.source?.connect($mediaPlayer.analyser);
            // Connect the analyser to the context destination
            $mediaPlayer.analyser.connect($mediaPlayer.context.destination);
            // console.log('$mediaPlayer.context', $mediaPlayer.context)
            // console.log('$mediaPlayer.analyser', $mediaPlayer.analyser)
            $mediaPlayer.bufferLength = $mediaPlayer.analyser.frequencyBinCount
            $mediaPlayer.dataArray = new Uint8Array($mediaPlayer.bufferLength);
            $mediaPlayer.player.play()
        }

    }

    $: if ($mediaPlayer && $media?.selected && $mediaPlayer.context) {
        $mediaPlayer.src = 'https://cdn.rawgit.com/ellenprobst/web-audio-api-with-Threejs/57582104/lib/TheWarOnDrugs.m4a' //$media.selected.media_file
        $mediaPlayer.player.load()
        setAudio()
    }

    // $: console.log('DataArray', $mediaPlayer.dataArray)
    // $: console.log('Media', $media)
    // $: console.log('$mediaPlayer', $mediaPlayer)
</script>

<svelte:window on:mousemove={autoHideControls} on:touchmove={autoHideControls}/>


{#if $media?.selected}
<header class="section">
    <div id="header-title">
        <h1 class="animated flipInX">
            <span class="orange-header">
                <p class="title is-uppercase is-size-6-mobile is-size-5-touch is-size-2-widescreen is-size-1-fullhd has-shadow">{$media.selected.title} </p>
                <p class="subtitle is-uppercase is-size-7-mobile is-size-6-touch is-size-3-widescreen is-size-2-fullhd">by {$media.selected.track_artist}</p>
            </span>
        </h1>
        <div class="remain-time title is-size-6-mobile is-size-5-touch is-size-2-widescreen is-size-1-fullhd orange-header has-shadow">{trackTime}</div>
    </div>
</header>
{/if}

<a class="brand" title="Let's Go Home!" href="/">
    <figure class="image m-0 p-0">
        <img src="/images/LMS_web-logo_small_dark.png" alt="LastMessengers Home" style="transform:translate(-100vw);"/>
    </figure>
    <span class="is-sr-only">BiafranUnity.Tv</span>
</a>

<audio {autoplay} id="audio"
bind:this={$mediaPlayer.player}
on:progress={progress}
on:canplay={canPlay}
on:playing={playing}
on:timeupdate={() => setTrackTime()}
on:seeked={seeked}
on:seeking={seeking}
on:stalled={stalled}
on:pause={pause}
on:ended={ended}
on:emptied={emptied}>
</audio>

<span class="is-visible-onmouse" class:is-fading={!visible} >
    <Controls />
</span>

<progress class="progress is-primary" value={currentTime} max={duration} />

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
        // background-color: purple;
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
            position: fixed;
            left: 0;
            left: 0;
            bottom: 1rem;
        }
    }

    .progress {
        position: fixed;
        bottom: 0;
        height: 2px;

        &[value] {
            transition: all 1s linear 0s;
        }
    }

    .is-visible-onmouse {
        opacity: 1;
        transition: opacity 0.5s;
    }

    .is-visible-onmouse.is-fading {
        opacity: 0;
    }

</style>
