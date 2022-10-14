<script lang="ts">
	import { getArtistImage, type Media } from "$lib/stores/data";
    import { fade } from "svelte/transition";

    export let medium:Media
</script>

{#if medium}
<div class="notification bg-black hover:bg-slate-900 text-white blurred has-shadow has-pointer-cursor py-2 px-1">
    <article class="media flex items-center" in:fade>
        <p class="text-xs mr-2">
            {(medium.track_number < 10) ? "0" + medium.track_number : medium.track_number}
        </p>
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