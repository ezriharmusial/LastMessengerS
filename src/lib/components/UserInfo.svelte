<script>
	import { session } from "$lib/session";

</script>

<article class="flex flex-direction-column align-items-center">
    <div class="flex-shrink-0 m-6">
        <figure class="image 128x128">
            <img src="https://avatars.dicebear.com/v2/human/{$session?.user?.name}.svg" alt="Userpic for {$session?.user?.displayName}" class="rounded-full">
        </figure>
    </div>
    <div class="media-content flex-grow-1">
        <div class="content">
            <p>
                <strong>{$session?.user?.name}</strong><br />
                <strong>Email:</strong> {$session?.user?.email} ({$session?.user?.emailVerified ? 'Verified' : 'Unverified'})<br />
                <strong>Telephone:</strong> {@html $session?.user?.telephone || "<em>Not listed</em>"}
            </p>
        </div>
    </div>
</article>