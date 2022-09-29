<script>
	import { onMount } from "svelte";
	import { fade } from "svelte/transition";
    export let id

    let tag

    async function getTag(id) {

        try {
            const response = await fetch(`https://biafranunity.tv/wp-json/wp/v2/tags/${id}`, {
                method: 'GET',
                headers: {}
            });

            if (response.ok) {
                const result = await response.json();
                // console.log(result);
                tag = result
            }
        } catch (err) {
            console.error(err);
        }
    }

    onMount(() => {
        getTag(id)
    })

</script>

<div class="tag" in:fade>
{#if tag}
    <span transition:fade>
        {tag.name}
    </span>
{:else}
    <span transition:fade>
        Loading...
    </span>
{/if}
</div>