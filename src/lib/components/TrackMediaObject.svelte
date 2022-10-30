<script lang="ts">
	import { player } from "$lib/mediaplayer";
	import { getArtistImage, type Media } from "$lib/stores/data";
    import { fade } from "svelte/transition";

    export let medium:Media
</script>

{#if medium}
<div class="transition-colors duration-700 { medium.order == $player.track.order ? $player.track.bg_color + ' ' + $player.track.color : $player.track.theme == 'light' ? 'bg-white text-black hover:bg-slate-200/50' : 'bg-black text-white hover:bg-slate-800/50' } py-2 px-1">
    <article class="media flex items-center sm:text-md lg:text-2xl" in:fade>
        {#if medium.order == $player.track.order}
        <figure class="w-4 h-4 mx-2 lg:w-5 lg:h-5 lg:mx-4">
		    {#if !$player.playing}
		    <svg id="play-icon" width="19" height="24" viewBox="0 0 31 37" xmlns="http://www.w3.org/2000/svg">
			    <path fill-rule="evenodd" clip-rule="evenodd" d="M29.6901 16.6608L4.00209 0.747111C2.12875 -0.476923 0.599998 0.421814 0.599998 2.75545V33.643C0.599998 35.9728 2.12747 36.8805 4.00209 35.6514L29.6901 19.7402C29.6901 19.7402 30.6043 19.0973 30.6043 18.2012C30.6043 17.3024 29.6901 16.6608 29.6901 16.6608Z"/>
		    </svg>
		    {/if}

		    {#if $player.playing}
		    <svg id="pause-icon" width="13" height="23" viewBox="0 0 24 36" xmlns="http://www.w3.org/2000/svg">
			    <rect width="6" height="36" rx="3"/>
			    <rect x="18" width="6" height="36" rx="3"/>
		    </svg>
		    {/if}
        </figure>
        {:else}
        <p class="w-4 h-4 mx-2 lg:w-6 lg:h-6 lg:mx-4">
            <span class="hover:hidden">
                {(medium.order < 10) ? "0" + medium.order : medium.order}
            </span>
		    <svg class="hidden hover:visible" id="play-icon" width="23" height="30" viewBox="0 0 31 37" xmlns="http://www.w3.org/2000/svg">
			    <path fill-rule="evenodd" clip-rule="evenodd" d="M29.6901 16.6608L4.00209 0.747111C2.12875 -0.476923 0.599998 0.421814 0.599998 2.75545V33.643C0.599998 35.9728 2.12747 36.8805 4.00209 35.6514L29.6901 19.7402C29.6901 19.7402 30.6043 19.0973 30.6043 18.2012C30.6043 17.3024 29.6901 16.6608 29.6901 16.6608Z"/>
		    </svg>
        </p>
        {/if}
        <figure class="relative w-11 lg:w-12 xl:w-14 mr-2 lg:mr-4">
            <img class="object-cover w-11 lg:w-12 xl:w-14 bg-gradient-to-br from-slate-900 to-black" alt="Track Cover" src="{medium.image || getArtistImage(medium.artist) || '/uploads/albumcovers/happysunofyah.jpg'}">
        </figure>
        <div>
            <p class="title font-semibold w-max truncate overflow-hidden">
                {medium.title}
            </p>
            <p class="subtitle w-max truncate overflow-hidden">
                by {medium.artist}
            </p>
        </div>
    </article>
</div>
{/if}

<style lang="scss">
    @import '../styles/common/_variables.scss';

    .notification {

        // .play.icon {
        //     position: absolute;
        //     top: 50%;
        //     left: 50%;
        //     transform: translate(-50%, -50%);
        //     background: radial-gradient($dark, $black);;
        //     text-align: center;
        //     // width: 3.5rem;
        //     // height: 2.5rem;
        //     width: 100%;
        //     height: 100%;
        //     border-radius: 25%;
        //     opacity: 0;
        // }

        // &:hover {
        //     .play.icon {
        //         opacity: .85;
        //     }
        // }
    }
</style>