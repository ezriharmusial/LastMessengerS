<script lang="ts">
    import { onDestroy, onMount } from 'svelte'

    import { player, players, progress, canPlay, playing, pause, seeked, seeking, stalled, ended, emptied } from "$lib/mediaplayer";
    import { setAudio } from "./Scene/animation";
    import { media } from '$lib/stores/data';

    import Controls from './Controls.svelte';

    let autoplay = true

    export function stopAll() {
        $players.forEach(p => p.pause())
    }

    onMount(() => {
        // Like players.push($player)
        $players.add($player)
    })

    onDestroy(() => {
        $players.delete($player)
    })

    let timer = "0:00"
    let duration = 0
    let currentTime = 0

    // Format the Playtime
    const setTimer = function() {
        duration = $player.duration
        currentTime = $player.currentTime
        let time = Math.round(duration - currentTime);
        let minutes = Math.floor(time / 60);
        let seconds = time - 60 * minutes;
        seconds = seconds < 10 ? '0' + seconds : seconds;
        if (isNaN(minutes) && isNaN(seconds))
        timer = "0:00"
        else
        timer = minutes + ':' + seconds;
    };

    $: if ($player && $media?.selected) {
        $player.src = $media.selected.media_file
        $player.load()
    }
    // $: console.log('Media', $media)
    // $: console.log('$player', $player)
</script>

{#if $media?.selected}
<header id="header-title" class="section">
    <h1 class="animated flipInX">
        <span class="orange-header">
            <p class="title is-uppercase is-size-6-mobile is-size-5-touch is-size-2-widescreen is-size-1-fullhd has-shadow">{$media.selected.title} </p>
            <p class="subtitle is-uppercase is-size-7-mobile is-size-6-touch is-size-3-widescreen is-size-2-fullhd">by {$media.selected.track_artist}</p>
        </span>
    </h1>
    <div class="remain-time title is-size-6-mobile is-size-5-touch is-size-2-widescreen is-size-1-fullhd orange-header has-shadow">{timer}</div>
</header>
{/if}

<a class="brand" title="Let's Go Home!" href="/">
    <span class="is-hidden">BiafranUnity.Tv</span>
</a>

<audio {autoplay} id="audio"
src={$media?.selected?.media_file}
bind:this={$player}
class:active={$media?.selected?.src}
on:change={() => setAudio()}
on:progress={progress}
on:canplay={canPlay}
on:playing={playing}
on:timeupdate={() => setTimer()}
on:seeked={seeked}
on:seeking={seeking}
on:stalled={stalled}
on:pause={pause}
on:ended={ended}
on:emptied={emptied}>
</audio>
<Controls />

<progress class="progress is-primary" value={currentTime} max={duration} />


<style global lang="scss">
    // @import '../styles/components/_tube.scss';
    // @import '../styles/components/_youtube.scss';

    // Branding
    .brand {
        background-image: url("../images/svg/clear_unity_rising_sun.svg");
        position: absolute;
        top: 4vw;
        width: 7vw;
        height: 7vw;
        background-size: 7vw 7vw;
        overflow: visible;
        background-repeat: no-repeat;

        /* ==========  Mobile Orientation Method  ========== */
        /* ==========  Mobile First Method  ========== */

        /* Extra Small Devices, Phones */
        @media (min-width: 769px) {
            right: 3vw;
            background-image: url("../images/svg/clear_unity_tv_rising_sun.svg");
        }

        /* Small Devices, Tablets */
        /* Medium Devices, Desktops */
        @media (min-width: 1025px) {
            background-image: url("../images/svg/clear_unity_tv_rising_sun.svg");
        }

        /* Large Devices, Wide Screens */
        /* FullHD */
        @media (min-width: 1409px) {
            background-image: url("../images/svg/clear_biafran_unity_tv_rising_sun.svg");
            background-size: 8vw 8vw;
            width: 8vw;
            height: 8vw;
            right: 4vw;
        }

        /* ==========  Non-Mobile First Method  ========== */

        /* Small Devices Mobile Phones */
        @media (max-width: 768px) {
            right: 7vw;
        }
    }

    .progress {
        height: 3px !important;
    }
    #header-title {
        @media all and (orientation: landscape) {
            position: fixed;
            left: 0;
            right: 0;
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

</style>
