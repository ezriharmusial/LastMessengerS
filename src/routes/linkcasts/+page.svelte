<script>
    export let data
	import Linkcasts from "./Linkcasts.svelte";
</script>

{@html data?.linkcasts[0]?.html?.rendered}
