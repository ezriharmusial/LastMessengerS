<script>
    export let artist
</script>

{#if artist}
<article class="flex flex-direction-column align-items-center">
    <div class="flex-shrink-0 m-6">
        <figure class="image 128x128">
            <img src="{artist.image}" alt="Userpic for {artist.stage_name}" class="rounded-full">
        </figure>
    </div>
    <div class="media-content flex-grow-1">
        <div class="content">
            <h1>{artist.stage_name}</h1>
            <h2>Name: {artist.name}</h2>

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