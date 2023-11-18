<script>
	import LinkcastHeader from './LinkcastHeader.svelte';
    import Linkcasts from './Linkcasts.svelte';
    export let data
</script>

<main class="flex portrait:flex-col">
    <div class="bg-black object-contain landscape:max-h-[90vh] landscape:overflow-hidden">
        <LinkcastHeader linkcast={data.linkcasts[0]}/>
    </div>

    <article class="unstyled text-2xl p-4 space-y-4 h-full landscape:max-h-[90vh] landscape:overflow-y-auto">
        <h5 class="text-primary-500 font-semibold">{data.linkcasts[0].category || 'News & Announcments'}</h5>

        <h3 class="font-black text-xl">{data.linkcasts[0].title}</h3>

        <h4 class="font-medium">{#if data.linkcasts[0].subtitle}{data.linkcasts[0].subtitle} {/if}<span class="marker text-xs badge badge-filled-surface light:text-black/75 dark:text-white/75">{data.linkcasts[0].type}</span></h4>

        {@html data.linkcasts[0]?.preview.html || ""}
    </article>
</main>
<section>
    <Linkcasts linkcasts={data.linkcasts} start={1} />
</section>