<script>
	import UserInfo from '$lib/components/UserInfo.svelte';
    import { fade } from 'svelte/transition'

    import { browser } from '$app/environment';
	import lazyload from 'vanilla-lazyload';

	if (browser && !document.lazyloadInstance) {
		document.lazyloadInstance = new lazyload();
	}
</script>

<div class="container mx-auto" in:fade>

    <div class="section">
        <h1 class="title p-0">User-profile</h1>
    </div>

    <div class="columns-2">
            <UserInfo />
    </div>
</div>