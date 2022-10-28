<script>
	import { player } from "$lib/mediaplayer";
	import Share from "./sharing/Share.svelte";

    export let artist
</script>

{#if artist}
<article class="flex align-items-center {$player.track.align_image == 'right' ? 'flex-row-reverse text-left' : ' text-right' }">
    <div class="flex-shrink-0 m-6 sticky top-0 h-full flex flex-col {$player.track.align_image == 'right' ? 'text-right' : 'text-left' }">
        <h1 class="marker text-5xl">{artist.stage_name}</h1>
        <h2 class="marker text-4xl">{artist.name}</h2>

        <figure class="image 128x128">
            <img src="{artist.image}" alt="Userpic for {artist.stage_name}" class="rounded-full">
        </figure>

		<Share />
    </div>
    <div class="media-content flex-grow-1">
        <div class="content text-2xl">

            <h3 class="marker text-3xl">The Artist</h3>
            <p>
            {artist.name} is a music artist that records and performs under the name {artist.stage_name}.
            {#if artist.meaning}{artist.sex == "male" ? 'His' : 'Her'} artist name means {artist.meaning}.{/if}
            {#if artist.active_region}Currently active in {artist.active}.{/if}
            {artist.stage_name} makes music in {artist.genres} in the languages {artist.languages}.
            {#if artist.experience}{artist.sex == "male" ? 'his' : 'her'} audience can expect {artist.experience}{/if}
            </p>

            <h3 class="marker text-3xl">The Music</h3>
            <p>
            {artist.name} is active as {artist.profession} of {artist.sex == "male" ? 'his': 'her'} own songs
            {#if artist.profession == 'featured artist'} and features in songs of other artists as well{/if}.
            {artist.sex == "male" ? 'He' : 'She'} sings {artist.vocal_type} {#if artist.vocal_skills} and {artist.vocal_skills} {/if}
            which {artist.sex == "male" ? 'he' : 'she'} performs with {artist.performance_setup}.
            </p>

            {#if artist.vision || artist.mision}
            <h3 class="marker text-3xl">Vision & Mission</h3>
            <p>
            {#if artist.vision}{artist.sex == "male" ? 'His' : 'Her'} vision is to {artist.vision}.{/if}
            {#if artist.mission}{artist.sex == "male" ? 'His' : 'Her'} mission is to {artist.mission}.{/if}
            </p>
            {/if}

            <h3 class="marker text-3xl">Goals & Purpose</h3>
            <p>
            {artist.name} makes music to {artist.reason}
            and wishes everyone {artist.wishes}.
            Growing up {artist.sex == "male" ? 'His' : 'Her'} main musical influences came from {artist.influences} and popular artists like {artist.artists} and today listens to just {artist.genres}. What motivates {artist.sex == "male" ? 'Him' : 'Her'} to create is {artist.sex == "male" ? 'His' : 'Her'} {artist.motivates} and finds inspiration in {artist.inspiration}. {artist.sex == "male" ? 'He' : 'She'} finds inspiration in {artist.influences}.
            </p>

            <p>
            Growing up {artist.experience}. music has been {artist.experience}. Music and other arts {artist.sex == "male" ? 'He' : 'She'} deems important to the society because {artist.reason}. Art helps {artist.sex == "male" ? 'Him' : 'Her'} in other parts of  life as well by {artist.reason}.
            </p>

            <p>
            {artist.name} defines success as an artist by {artist.reason}. The purpose of {artist.sex == "male" ? 'His' : 'Her'} work is to {artist.purspose} and believes to affect societal issues by {artist.solution}.
            </p>

            <p>
            {artist.name} develops {artist.sex == "male" ? 'His' : 'Her'} skills by {artist.actions}. {artist.sex == "male" ? 'He' : 'She'} embraces feedback from critics and music lovers because {artist.reason}. {artist.sex == "male" ? 'His' : 'Her'} ultimate career goals are {artist.goals}.
            </p>

            {#if artist.history}
            <h3 class="marker text-3xl">History</h3>
            <p>
            {artist.name} develops {artist.sex == "male" ? 'His' : 'Her'} skills by {artist.actions}. {artist.sex == "male" ? 'He' : 'She'} embraces feedback from critics and music lovers because {artist.reason}. {artist.sex == "male" ? 'His' : 'Her'} ultimate career goals are {artist.goals}.
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
</article>
{/if}

<style>
    p {
        padding-bottom: 1rem;
    }
</style>
