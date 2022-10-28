<script>
	import { player } from "$lib/mediaplayer";
	import Share from "./sharing/Share.svelte";

    export let artist
</script>

{#if artist}
<article class="flex flex-direction-column align-items-center">
    <div class="flex-shrink-0 m-6 sticky top-0 h-full flex flex-col">
        <h1 class="marker text-5xl">{artist.stage_name}</h1>
        <h2 class="marker text-4xl">Name: {artist.name}</h2>

        <figure class="image 128x128">
            <img src="{artist.image}" alt="Userpic for {artist.stage_name}" class="rounded-full">
        </figure>

		<Share />
    </div>
    <div class="media-content flex-grow-1 {$player.track.align_image == 'left' ? 'text-right' : '' }">
        <div class="content text-2xl">

            <h3 class="marker text-3xl">The Artist</h3>
            <p>
            {artist.name} is a music artist that records and performs under the name {artist.stagename}. {artist.sex == "m" ? 'His' : 'Her'} artist name means {artist.meaning}. {#if artist.pindrop}Currently residing active locally in {artist.pindrop}, {/if}{artist.stage_name} makes music in {artist.genres} in {artist.languages}. {artist.sex == "m" ? 'His' : 'Her'} audience can expect a performance that {artist.experience}
            </p>

            <h3 class="marker text-3xl">The Music</h3>
            <p>
            {artist.name} writes, composes and produces {artist.sex == "m" ? 'his': 'her'} own songs and features in songs of other artists as well. {artist.sex == "m" ? 'He' : 'She'} sings {artist.voices} and raps as well (YES/NO) which {artist.sex == "m" ? 'he' : 'she'} performs with instrumental tracks or with a band (YES/NO).
            </p>

            {#if artist.vision || artist.mision}
            <h3 class="marker text-3xl">Vision & Mission</h3>
            <p>
            {#if artist.vision}{artist.sex == "m" ? 'His' : 'Her'} vision is to {artist.vision}.{/if}{#if artist.mision}{artist.sex == "m" ? 'His' : 'Her'} mission is to {artist.mission}.{/if}
            </p>
            {/if}

            <h3 class="marker text-3xl">Goals & Purpose</h3>
            <p>
            {artist.name} makes music for {artist.reason} and wishes everyone {artist.wish}. Growing up {artist.sex == "m" ? 'His' : 'Her'} main musical influences came from {artist.influences} and popular artists like {artist.artists} and today listens to just {artist.genres}. What motivates {artist.sex == "m" ? 'Him' : 'Her'} to create is {artist.sex == "m" ? 'His' : 'Her'} {artist.motivates} and finds inspiration in {artist.inspiration}. {artist.sex == "m" ? 'He' : 'She'} finds inspiration in {artist.influences}.
            </p>
            <p>
            Growing up {artist.experience}. music has been {artist.experience}. Music and other arts {artist.sex == "m" ? 'He' : 'She'} deems important to the society because {artist.reason}. Art helps {artist.sex == "m" ? 'Him' : 'Her'} in other parts of  life as well by {artist.reason}.
            </p>

            <p>
            {artist.name} defines success as an artist by {artist.reason}. The purpose of {artist.sex == "m" ? 'His' : 'Her'} work is to {artist.purspose} and believes to affect societal issues by {artist.solution}.
            </p>

            <p>
            {artist.name} develops {artist.sex == "m" ? 'His' : 'Her'} skills by {artist.actions}. {artist.sex == "m" ? 'He' : 'She'} embraces feedback from critics and music lovers because {artist.reason}. {artist.sex == "m" ? 'His' : 'Her'} ultimate career goals are {artist.goals}.
            </p>

            {#if artist.history}
            <h3 class="marker text-3xl">History</h3>
            <p>
            {artist.name} develops {artist.sex == "m" ? 'His' : 'Her'} skills by {artist.actions}. {artist.sex == "m" ? 'He' : 'She'} embraces feedback from critics and music lovers because {artist.reason}. {artist.sex == "m" ? 'His' : 'Her'} ultimate career goals are {artist.goals}.
            {artist.sex == "m" ? 'His' : 'Her'} story started as {artist.history}.
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
</article>
{/if}

<style>
    p {
        padding-bottom: 1rem;
    }
</style>
