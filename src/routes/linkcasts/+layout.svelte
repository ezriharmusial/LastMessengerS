<script>
    export let data
	import Linkcasts from "./Linkcasts.svelte";
</script>

<slot />
<Linkcasts linkcasts={data.linkcasts} />
