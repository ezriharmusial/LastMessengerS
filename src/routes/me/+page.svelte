<script>
	import UserInfo from '$lib/components/UserInfo.svelte';
    import { fade } from 'svelte/transition'
</script>

<div class="container" in:fade>

    <div class="section">
        <h1 class="title p-0">User-profile</h1>
    </div>

    <div class="columns">
        <div class="column is-narrow notification">
            <UserInfo />
        </div>
        <div class="column"></div>
    </div>
</div>