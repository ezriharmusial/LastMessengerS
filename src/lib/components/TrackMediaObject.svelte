<script lang="ts">
    import { fade } from "svelte/transition";

    export let medium
    export let closeCallback:Function|Boolean = false
</script>

{#if medium}
<div class="notification bg-black text-white blurred has-shadow has-pointer-cursor">
    <article class="media" in:fade>
        <figure class="media-left flex align-items-center">
            <div class="pr-2">
                {(medium.track_number < 10) ? "0" + medium.track_number : medium.track_number}.
            </div>
            <p class="image 128x128 relative" style="height:unset;">
                <img alt="Track Cover" src="{medium.image || '/uploads/albumcovers/happysunofyah.jpg'}">
                <span class="play icon small">
                    <i class="fas fa-play"></i>
                </span>
            </p>
        </figure>
        <div class="media-content">
            <div class="content">
                <p class="title uppercase text-sm mobile text-sm touch text-lg widescreen text-xl-fullhd has-shadow">
                    {medium.title}
                </p>
                <p class="subtitle uppercase text-xs mobile text-sm touch text-md widescreen text-lg fullhd">
                    by {medium.track_artist}
                </p>

                {#if medium.quote}
                <p>
                    <span class="italic">
                        "{@html medium.quote}"
                    </span>
                </p>
                {/if}
            </div>
        </div>
        <div class="media-right">
            {#if closeCallback}
            <button class="delete" on:click={closeCallback}></button>
            {/if}
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
            width: 3.5rem;
            height: 2.5rem;
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