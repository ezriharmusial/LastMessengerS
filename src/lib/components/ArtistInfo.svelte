<script lang="ts">
	import { player } from "$lib/mediaplayer";
	import Artist from "./Artist.svelte";
	import Share from "./sharing/Share.svelte";

    export let artist
    console.log("artist", artist)

    function sentenceArray(array:[], word:string = 'and'){
        let sentence

        if (!array || !array.length)
            return

        if (array.length == 1)
            return array[0]

        for (let index = 0; index < array.length; index++) {
            if (index + 1 == array.length)
                sentence = sentence ? sentence + ' ' + word + ' ' + array[index] : array[index];
            else
                sentence = sentence ? sentence + ', ' + array[index] : array[index]

        }
        return sentence
    }

</script>
{#if artist}
<article class="flex align-items-stretch landscape:h-full landscape:w-full portrait:flex-col {$player.track?.align_image == 'right' ? 'landscape:text-left' : 'landscape:flex-row-reverse landscape:text-right' } pt-28">

    <div class="landscape:w-72 shrink-0 portrait:h-1/2 {$player.track?.bg_color} portrait:pt-[80px] portrait:md:pt-[120px]">
        <Artist {artist} />
    </div>
    {#if artist.sex}
    <div class="media-content grow-1 overflow-y-auto p-10 portrait:px-6 portrait:py-7 landscape:xs:pt-[60px] landscape:sm:pt-[80px] landscape:md:pt-[100px] landscape:lg:pt-[110px] landscape:xl:pt-[200px]{$player.track?.align_image == "left" ? 'pr-10 text-left' : 'pl-10 text-right'}">
        <div class="content text-2xl landscape:lg:columns-2 landscape:xl:columns-3">
            {#if artist.stage_name && artist.meaning || artist.active_region || artist.genres && artist.languages || artist.experience}
            <h3 class="marker text-3xl">The Artist</h3>
            <p>
            {artist.name} is a music artist that records and performs under the name {artist.stage_name}.
            {#if artist.meaning}{artist.sex == "male" ? 'His' : 'Her'} artist name means
            {artist.meaning}.{/if}
            <!-- {#if artist.active_region}Currently active in {artist.active_region}.{/if} -->
            </p>
            <p>
            {#if artist.genres && artist.languages}{artist.stage_name} makes music in {sentenceArray(artist.genres)} in the languages {sentenceArray(artist.languages)}.{/if}
            </p>
            <p>
            {#if artist.experience}{artist.sex == "male" ? 'His' : 'Her'} audience can expect {artist.experience}.{/if}
            </p>
            {/if}

            {#if artist.profession || artist.vocal_type || artist.vocal_skills || artist.performance_setup}
            <h3 class="marker text-3xl">The Music</h3>
                <p>
                {artist.stage_name} is active as {sentenceArray(artist.profession)} of {artist.sex == "male" ? 'his': 'her'} own songs{#if artist.profession == 'featured artist'} and features in songs of other artists as well{/if}.
                {#if artist.vocal_type}{artist.sex == "male" ? 'His' : 'Her'} { artist.vocal_type?.length > 1 ? 'voices are' : 'voice is'} {sentenceArray(artist.vocal_type)}.{/if}
                which {artist.sex == "male" ? 'he' : 'she'} performs {#if artist.vocal_skills} {sentenceArray(artist.vocal_skills)}{/if} with {sentenceArray(artist.performance_setup, 'or')}.
                </p>
            {/if}

            {#if artist.vision || artist.mision}
            <h3 class="marker text-3xl">Vision & Mission</h3>
            <p>
            {#if artist.vision}{artist.sex == "male" ? 'His' : 'Her'} vision is {artist.vision}.{/if}
            {#if artist.mission}{artist.sex == "male" ? 'His' : 'Her'} mission is {artist.mission}.{/if}
            </p>
            {/if}

            {#if artist.wishes && artist.reason || artist.motivation && artist.inspiration || artist.influential_artists && artist.influential_genres}
                <h3 class="marker text-3xl">Motivations & Influences</h3>
                <p>
                {#if artist.reason}{artist.stage_name} makes music {artist.reason}.{/if} {#if artist.wishes}{artist.sex == "male" ? 'He' : 'She'} wishes everyone {artist.wishes}.{/if}
                </p>

                <p>
                {#if artist.motivation}What motivates {artist.sex == "male" ? 'him' : 'her'} to create {artist.sex == "male" ? 'his' : 'her'} music {artist.motivation}.{/if} {#if artist.inspiration}{artist.sex == "male" ? 'He' : 'She'} finds inspiration {artist.inspiration}.{/if}
                </p>

                {#if artist.youth_influences || artist.influential_artists}
                <h3 class="marker text-3xl">Music & Life</h3>
                <p>
                {#if artist.youth_influences}
                Growing up {artist.sex == "male" ? 'his' : 'her'} main musical influences came from {artist.youth_influences}.
                {/if}
                {#if artist.influential_artists}
                {artist.stage_name} is influenced by popular artists like {artist.influential_artists}.{/if}
                </p>
                {/if}
            {/if}

            {#if artist.purpose || artist.society }
            <h3 class="marker text-3xl">Society & Success</h3>
            {#if artist.purpose}
            <p>
            {#if artist.purpose}The purpose of {artist.sex == "male" ? 'his' : 'her'} work is to {artist.purpose}{/if} {#if artist.solution} and {artist.sex == "male" ? 'he' : 'she'} is convinced {artist.sex == "male" ? 'his' : 'her'} music affects societal issues {artist.solution}{/if}.
            </p>
            {/if}
            {#if artist.success || artist.actions || artist.feedback}
            <p>
            {#if artist.success}{artist.stage_name} defines success by {artist.success}.{/if}
            {#if artist.actions}{artist.sex == "male" ? 'He' : 'She'} develops {artist.sex == "male" ? 'his' : 'her'} skills by {artist.actions}.{/if}
            {#if artist.feedback}{artist.sex == "male" ? 'He' : 'She'} embraces feedback from critics and music lovers because {artist.feedback}.{/if}
            </p>
            {/if}
            {/if}

            {#if artist.history}
            <h3 class="marker text-3xl">{artist.sex == "male" ? 'His' : 'Her'}tory</h3>
            <p>
            {artist.sex == "male" ? 'His' : 'Her'} story started as {artist.history}.
            </p>
            {/if}

            <!--
            <div class="columns-2">
                {#each Object.entries(artist) as [key, value]}

                <svelte:component this={artist.content} />
                <span class="flex-col pb-6">
                    <h2 class="font-bold text-3xl mr-2">{key}</h2>
                    <p class="text-2xl">{value}</p>
                </span>
                {/each}
            </div> -->
        </div>
    </div>
    {/if}
</article>
{/if}

<style>
    p {
        padding-bottom: 1rem;
    }

    @media (orientation: landscape) {
	    .media-content {
           mask-image: linear-gradient(175deg, transparent 5%, black 15%, black 85%, transparent 95%);
	    }
	}

</style>
