<script lang="ts">
    import { fade } from "svelte/transition";

    export let medium
    export let closeCallback:Function|Boolean = false
</script>

{#if medium}
<div class="notification is-black is-blurred has-shadow has-pointer-cursor">
    <article class="media" in:fade>
        <figure class="media-left">
            <p class="image is-128x128" style="height:unset;">
                <img alt="Track Cover" src="{medium.cover_image || 'https://lastmessengers.artkidsfoundation.org/wp-content/uploads/2022/09/happysunofyah.jpg'}">
            </p>
        </figure>
        <div class="media-content">
            <div class="content">
                <p>
                    <span class="title is-uppercase is-size-6-mobile is-size-5-touch is-size-2-widescreen is-size-1-fullhd has-shadow">{medium.title} </span>
                    <br />
                    <span class="subtitle is-uppercase is-size-7-mobile is-size-6-touch is-size-3-widescreen is-size-2-fullhd">by {medium.track_artist}</span><br />

                    {#if medium.quote}
                    {@html medium.quote}
                    {/if}
                </p>
            </div>
            <nav class="level is-mobile">
                <div class="level-left">
                    <button class="button is-text level-item">
                        <span class="icon is-small"><i class="fas fa-play"></i></span>
                    </button>
                    <button class="button is-text level-item">
                        <span class="icon is-small"><i class="fas fa-retweet"></i></span>
                    </button>
                    <button class="button is-text level-item">
                        <span class="icon is-small"><i class="fas fa-heart"></i></span>
                    </button>
                </div>
            </nav>
        </div>
        <div class="media-right">
            {#if closeCallback}
            <button class="delete" on:click={closeCallback}></button>
            {/if}
        </div>
    </article>
</div>
{/if}