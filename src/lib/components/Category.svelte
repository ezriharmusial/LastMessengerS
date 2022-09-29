<script>
	import { onMount } from "svelte";
	import { fade } from "svelte/transition";

    export let id

    let category

    async function getCategory(id) {

        try {
            const response = await fetch(`https://biafranunity.tv/wp-json/wp/v2/categories/${id}`, {
                method: 'GET',
                headers: {}
            });

            if (response.ok) {
                const result = await response.json();
                // console.log(result);
                category = result
            }
        } catch (err) {
            console.error(err);
        }
    }

    onMount(() => {
        getCategory(id)
    })

</script>

<span class="category" in:fade>
{#if category}
    {category.name}
{:else}
    Loading...
{/if}
</span>