<script lang="ts">
	import { player } from "$lib/mediaplayer";
	import { getArtistImage, type Media } from "$lib/stores/data";
    import { fade } from "svelte/transition";

    export let medium:Media
</script>

{#if medium}
<div class="notification bg-black hover:bg-slate-900 text-white blurred has-shadow has-pointer-cursor py-2 px-1">
    <article class="media flex items-center" in:fade>
        {#if medium.track_number == $player.track.track_number}
        <figure class="w-4 h-4 mx-2">
            <svg id="play-icon px-2" width="10" height="14" viewBox="0 0 31 37" fill="currentColor" xmlns="http://www.w3.org/2000/svg" transition:fade>
                <path clip-rule="evenodd" d="M29.6901 16.6608L4.00209 0.747111C2.12875 -0.476923 0.599998 0.421814 0.599998 2.75545V33.643C0.599998 35.9728 2.12747 36.8805 4.00209 35.6514L29.6901 19.7402C29.6901 19.7402 30.6043 19.0973 30.6043 18.2012C30.6043 17.3024 29.6901 16.6608 29.6901 16.6608Z" class="fill-black dark:fill-white"/>
    		</svg>
        </figure>
        {:else}
        <p class="text-xs w-4 h-4 mx-2">
            {(medium.track_number < 10) ? "0" + medium.track_number : medium.track_number}
        </p>
        {/if}
        <figure class="relative h-7 w-7 mr-2">
            <img class="object-cover h-7 w-7 bg-gradient-to-br from-slate-900 to-black" alt="Track Cover" src="{medium.image || getArtistImage(medium.track_artist) || '/uploads/albumcovers/happysunofyah.jpg'}" width="64" height="64">
            <span class="play icon small">
                <i class="fas fa-play"></i>
            </span>
        </figure>
        <div>
            <p class="title text-xs text-bold w-max truncate overflow-hidden">
                {medium.title}
            </p>
            <p class="subtitle text-xs w-max truncate overflow-hidden">
                by {medium.track_artist}
            </p>
        </div>
    </article>
</div>
{/if}

<style lang="scss">
    @import '../styles/common/_variables.scss';

    .notification {

        .play.icon {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: radial-gradient($dark, $black);;
            text-align: center;
            // width: 3.5rem;
            // height: 2.5rem;
            width: 100%;
            height: 100%;
            border-radius: 25%;
            opacity: 0;
        }

        &:hover {
            .play.icon {
                opacity: .85;
            }
        }
    }
</style>