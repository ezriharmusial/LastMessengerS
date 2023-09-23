<script>
    import Linkcasts from './Linkcasts.svelte';
    export let data
</script>

{@html data?.linkcasts[0]?.html?.rendered || ""}
<Linkcasts linkcasts={data.linkcasts} />