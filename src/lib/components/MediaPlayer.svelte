<script lang="ts">
    import { onDestroy, onMount } from 'svelte'

    import { players } from "$lib/mediaplayer";
    import { setAudio } from "./Scene/animation";
	import Controls from './Controls.svelte';
	import { media } from '$lib/stores/data';

    let autoplay = false
    let player:HTMLAudioElement

    export function stopAll() {
        $players.forEach(p => p.pause())
    }

    onMount(() => {
        // Like players.push(player)
        $players.add(player)
    })

    onDestroy(() => {
        $players.delete(player)
    })

    let canPlay = false
    let timer = "0:00"
    let duration = 0
    let currentTime = 0

    // Format the Playtime
    const setTimer = function() {
        duration = player.duration
        currentTime = player.currentTime
        let time = Math.round(duration - currentTime);
        let minutes = Math.floor(time / 60);
        let seconds = time - 60 * minutes;
        seconds = seconds < 10 ? '0' + seconds : seconds;
        timer = minutes + ':' + seconds;
    };

    // Track can be Played
    const onCanPlay = () => {
        canPlay = true
        player.play()
    }

    // Track Ended
    const ended = () => {
        // If there is a next Track, next Track
    }

    $: if (player && $media?.selected) {
            player.src = $media.selected.media_file
            player.load()
        }
    $: console.log('Media', $media)
    $: console.log('player', player)
</script>

{#if $media?.selected}
<header id="header-title" class="section">
    <h1 class="animated flipInX">
        <span class="orange-header">
            <p class="title is-uppercase is-size-6-mobile is-size-5-touch is-size-2-widescreen is-size-1-fullhd has-shadow">{$media.selected.title} </p>
            <p class="subtitle is-uppercase is-size-7-mobile is-size-6-touch is-size-3-widescreen is-size-2-fullhd">by {$media.selected.track_artist}</p>
        </span>
    </h1>
    {#if canPlay}
    <div class="remain-time title is-size-6-mobile is-size-5-touch is-size-2-widescreen is-size-1-fullhd orange-header has-shadow">{timer}</div>
    {/if}
</header>
{/if}

<section id="tube" on:click={() => {if (!player?.paused) player.pause(); else player.play()}}>
    <a class="brand" title="Let's Go Home!" href="/">
        <span class="is-hidden">BiafranUnity.Tv</span>
    </a>
    <div class="image is-16by9">

        {#if player?.paused}
        <div class="tube-thumb">
            <figure class="image is-16by9">
                <div class="ytp-cued-thumbnail-overlay">
                    <!-- <div class="ytp-cued-thumbnail-overlay-image linkcast-thumb lazyload" style="background-image: url('{$media.selected.cover_image ||  'https://lastmessengers.artkidsfoundation.org/wp-content/uploads/2022/09/happysunofyah.jpg'}');"></div> -->
                    <div class="ytp-large-play-button ytp-button" aria-label="Play">
                        <svg width="68px" height="48px" version="1.1" viewBox="0 0 68 48">
                            <path class="ytp-large-play-button-bg" d="M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z" fill="#212121" fill-opacity="0.8"></path>
                            <path d="M 45,24 27,14 27,34" fill="#fff"></path>
                        </svg>
                    </div>
                </div>
            </figure>
        </div>
        {/if}
    </div>
    <audio {autoplay} id="audio"
        src={$media?.selected?.media_file}
        bind:this={player}
        class:active={$media?.selected?.src}
        on:change={() => setAudio()}
        on:timeupdate={() => setTimer()}
        on:canplay={onCanPlay}
        on:ended={ended}>
    </audio>
    <Controls />
{#if canPlay}
<progress class="progress is-primary" value={currentTime} max={duration} />
{/if}
</section>


<style global lang="scss">
    @import '../styles/components/_branding.scss';
    @import '../styles/components/_tube.scss';
    @import '../styles/components/_youtube.scss';
</style>
