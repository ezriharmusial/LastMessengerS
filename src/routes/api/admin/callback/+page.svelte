<script>
    // Get the HTML
    export let data
    // console.log('Data',data.responseBody)
</script>

<svelte:head>
    <!-- This is a Test -->
    {@html data.responseBody}
</svelte:head>