<script>
	import { player } from "$lib/mediaplayer";
	import Artist from "./Artist.svelte";
	import Share from "./sharing/Share.svelte";

    export let artist
    console.log("artist", artist)
</script>
{#if artist}
<article class="flex align-items-center portrait:flex-col {$player.track.align_image == 'right' ? 'landscape:flex-row-reverse landscape:text-left' : 'landscape:text-right' }">
    <div class="">
        <Artist {artist} />
    </div>
    <!-- {#if artist.sex} -->
    <div class="media-content flex-grow-1">
        <div class="content text-2xl">
            {#if artist.stage_name && artist.meaning || artist.active_region || artist.genres && artist.languages || artist.experience}
            <h3 class="marker text-3xl">The Artist</h3>
            <p>
            {artist.name} is a music artist that records and performs under the name {artist.stage_name}.
            {#if artist.meaning}{artist.sex == "male" ? 'His' : 'Her'} artist name means {artist.meaning}.{/if}
            {#if artist.active_region}Currently active in {artist.active}.{/if}
            {#if artist.genres && artist.languages}{artist.stage_name} makes music in {artist.genres} in the languages {artist.languages}.{/if}
            {#if artist.experience}{artist.sex == "male" ? 'his' : 'her'} audience can expect {artist.experience}{/if}
            </p>
            {/if}

            {#if artist.profession && artist.vocal_type && artist.vocal_skills && artist.performance_setup}
            <h3 class="marker text-3xl">The Music</h3>
                <p>
                {artist.name} is active as {artist.profession} of {artist.sex == "male" ? 'his': 'her'} own songs
                {#if artist.profession == 'featured artist'} and features in songs of other artists as well{/if}.
                {artist.sex == "male" ? 'His' : 'Her'} voices are {artist.vocal_type},
                which {artist.sex == "male" ? 'he' : 'she'} performs {#if artist.vocal_skills} {artist.vocal_skills}{/if} with {artist.performance_setup}.
                </p>
            {/if}

            {#if artist.vision || artist.mision}
            <h3 class="marker text-3xl">Vision & Mission</h3>
            <p>
            {#if artist.vision}{artist.sex == "male" ? 'His' : 'Her'} vision is to {artist.vision}.{/if}
            {#if artist.mission}{artist.sex == "male" ? 'His' : 'Her'} mission is to {artist.mission}.{/if}
            </p>
            {/if}

            {#if artist.wishes && artist.reason || artist.motivation && artist.inspiration || artist.influential_artists && artist.influential_genres}
                <h3 class="marker text-3xl">Motivations & Influences</h3>
                {#if artist.wishes && artist.reason}
                <p>
                {artist.name} makes music {artist.reason} and wishes everyone {artist.wishes}.
                </p>
                {/if}

                {#if artist.motivation && artist.inspiration}
                <p>
                What motivates {artist.sex == "male" ? 'him' : 'her'} to create {artist.sex == "male" ? 'his' : 'her'} music is {artist.motivation}  and finds inspiration {artist.inspiration}.
                </p>
                {/if}

                <h3 class="marker text-3xl">Music & Life</h3>
                {#if artist.youth_influences && artist.influential_artists}
                <p>
                Growing up {artist.sex == "male" ? 'his' : 'her'} main musical influences came from {artist.youth_influences} and popular artists like {artist.influential_artists} {artist.influential_artists}.
                </p>
                {/if}
            {/if}

            {#if artist.purpose || artist.society }
            <h3 class="marker text-3xl">Society & Success</h3>
            {#if artist.purpose}
            <p>
            {#if artist.purpose}The purpose of {artist.sex == "male" ? 'His' : 'Her'} work is to {artist.purpose}{/if}{#if artist.solution} and is convinced music and other arts affect societal issues because {artist.solution}{/if}.
            </p>
            {/if}
            {#if artist.success || artist.actions || artist.feedback || artist.goals}
            <p>
            {#if artist.success}{artist.stage_name} defines success {artist.success}{/if}
            {#if artist.actions}{artist.sex == "male" ? 'He' : 'She'} develops {artist.sex == "male" ? 'his' : 'her'} skills by {artist.actions}.{/if}
            {#if artist.feedback}{artist.sex == "male" ? 'He' : 'She'} embraces feedback from critics and music lovers because {artist.feedback}.{/if}
            {#if artist.goals}{artist.sex == "male" ? 'His' : 'Her'} ultimate carreer goals are {artist.goals}.{/if}
            </p>
            {/if}
            {/if}

            {#if artist.history}
            <h3 class="marker text-3xl">{artist.sex == "male" ? 'His' : 'Her'}tory</h3>
            <p>
            {artist.sex == "male" ? 'His' : 'Her'} story started as {artist.history}.
            </p>
            {/if}

            <div class="columns-2">
                {#each Object.entries(artist) as [key, value]}

                <!-- <svelte:component this={artist.content} /> -->
                <span class="flex-col pb-6">
                    <h2 class="font-bold text-3xl mr-2">{key}</h2>
                    <p class="text-2xl">{value}</p>
                </span>
                {/each}
            </div>
        </div>
    </div>
    <!-- {/if} -->
</article>
{/if}

<style>
    p {
        padding-bottom: 1rem;
    }
</style>
