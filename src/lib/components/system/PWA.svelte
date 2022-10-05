<script>
    import { slide } from 'svelte/transition';

    let toast = true
    // $: toast = $offlineReady || $needRefresh;
	 // $: console.log('session', session)
</script>


{#if toast}
    <div class="fixed right-0 bottom-0 m-4 p-6 rounded shadow z-[100] bg-white border-blue-500 border max-w-sm" in:slide out:slide
         role="alert">
        <div class="mb-4">
            <span>&#127881;</span>
            {#if $offlineReady}
      <span>
        This site is ready to use offline.
      </span>
            {:else}
      <span>
        A new version of this site is available! Click the reload button to update.
      </span>
            {/if}
        </div>
        {#if $needRefresh}
            <button class="button m-0" on:click={() => updateServiceWorker(true)}>
                Reload
            </button>
        {/if}
        <button class="button m-0" on:click={close}>
            Close
        </button>
    </div>
{/if}
