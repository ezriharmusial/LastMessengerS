<script>
    import { auth } from "$lib/auth";
    import { session } from "$lib/session";
	import { toggleLogin } from "$lib/ui";
</script>

<div class="usermenu" on:click={toggleLogin}>
    <div class="dropdown is-hoverable">
        <div class="dropdown-trigger">
            <div class="" aria-haspopup="true" aria-controls="dropdown-menu">
                <span class="icon-text is-align-items-center">
                    <div class="my-2 is-hidden-mobile">{$session?.user?.name || ""}</div>
                    <span class="avatar icon image is-32x32 has-text-centered">
                        {#if $session?.user?.uid}
                        <img alt="{$session?.user?.name || 'Guest'}'s Profile" src="{$session?.user?.picture || 'https://avatars.dicebear.com/api/big-ears-neutral/' + ($session?.user?.uid || 'our-honourable-guest' ) +'.svg' }" class="avatar is-rounded p-0 m-0" width="48" height="48">
                        {:else}
                        <i class="fa-solid fa-user fa-lg" title="You are not logged in"></i>
                        {/if}
                    </span>
                </span>
            </div>
        </div>

        {#if $session.user}
        <div class="dropdown-menu" id="dropdown-menu" role="menu">
            <div class="dropdown-content has-text-left">
                <a class="dropdown-item" href="/me">
                    <div class="icon-text">
                        <span class="icon">
                            <i class="fa-solid fa-address-card"></i>
                        </span>
                        <span>
                            My artist profile
                        </span>
                    </div>
                </a>
                <hr class="dropdown-divider">
                <a class="dropdown-item" href="/" on:click={() => auth.signOut()}>
                    <div class="icon-tex">
                        <span class="icon">
                            <i class="fa-solid fa-sign-out"></i>
                        </span>
                        <span>
                            Log out
                        </span>
                    </div>
                </a>
            </div>
        </div>
        {/if}

    </div>
</div>

<style>
    .usermenu {
        position: fixed;
        top: 1rem;
        right: 1rem;
    }

    .avatar {
        border: 2px yellow solid;
        border-radius: 9999px;
        width: 32px;
        height: 32px;
    }
</style>