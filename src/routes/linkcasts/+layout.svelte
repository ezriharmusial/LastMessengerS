<script>
    import Linkcasts from './Linkcasts.svelte';
    export let data
</script>

<div class="flex flex-col">
    <slot />
</div>
<Linkcasts linkcasts={data.linkcasts} />