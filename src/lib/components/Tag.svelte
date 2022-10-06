<script>
	import { onMount } from "svelte";
	import { fade } from "svelte/transition";
    export let title

    let genre

    async function getGenre(title) {

        try {
            const response = await fetch(`/api/v1/genres/`, {
                method: 'GET',
                headers: {}
            });

            if (response.ok) {
                const result = await response.json();
                // console.log(result);
                genre = result
            }
        } catch (err) {
            console.error(err);
        }
    }

    onMount(() => {
        getGenre(title)
    })

</script>

<div class="genre" in:fade>
{#if genre}
    <a href="/genres/{genre.slug}" title="Filter {genre.name} Tracks" transition:fade>
        {genre.name}
    </a>
{:else}
    <span transition:fade>
        Loading...
    </span>
{/if}
</div>