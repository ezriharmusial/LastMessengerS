
<script>
    import { browser } from "$app/environment";
    import { onMount } from "svelte";

	/** @type {import('./$types').PageData} */
    export let data

    const { status, provider, token } = data

    onMount(() => {
        if(browser)
        window.opener?.postMessage("authorizing:${provider}", "*");
    })


    const receiveMessage = (message) => {
        console.log('Received Message:', message)
        if(browser)
        window.opener?.postMessage('authorization:${provider}:${status}:${JSON.stringify({token, provider})}', message.origin);
        // window.removeEventListener("message", receiveMessage, false);
    }
    // window.addEventListener("message", receiveMessage, false);
    // window.opener.postMessage("authorizing:${provider}", "*");
    $: console.log('ServerData', data)
</script>

<svelte:window on:message={(eventMessage) => receiveMessage(eventMessage)} />

<section class="bg-black rounded p-4 m-auto">
    <h1 class="text-3xl text-white">Processing Request...</h1>
</section>