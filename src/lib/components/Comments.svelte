<script>
	import { messages } from '$lib/pusher';
	import { session } from '$lib/session';
	let username = "me"
	let message = ''

	const submit = async () => {
		await fetch('/api/messages', {
			method: 'POST',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				username,
				message
			})

		})

		message = ""
	}
</script>

<aside>
    <section id="comments" class="box bg-black text-white blurred">
        <div class="container">
            <div class="header content">
                <h3 class="subtitle text-sm mobile text-sm tablet text-lg widescreen text-xl-fullhd has-text-grey-dark uppercase has-text-weight-normal">{$messages.length} Comment{#if $messages.length != 1}s{/if}</h3>
            </div>
            <div class="comment-list">
                {#each $messages as message}
                <div id="comment-16" class="comment byuser comment-author-admin bypostauthor odd alt thread-odd thread-alt depth-1  media">
                    <div class="media-left">
                        <figure class="image 48x48"> <img alt="" src="https://secure.gravatar.com/avatar/50e521da7fa9ce9c51a7353d92d34e57?s=48&amp;d=retro&amp;r=r" srcset="https://secure.gravatar.com/avatar/50e521da7fa9ce9c51a7353d92d34e57?s=96&amp;d=retro&amp;r=r 2x" class="avatar avatar-48 photo rounded-full" width="48" height="48"></figure>
                    </div>
                    <div class="media-content">
                        <div class="content notification p-4 text-sm">
                            <p class="comment-who mb-3">
                                <strong class="capitalized">{message.username}</strong><br />
                                <span class="has-text-primary text-xs"> 2 years ago</span>&nbsp;
                            </p>
                            {message.message}
                        </div>
                        <nav class="level mobile ml-4">
                            <div class="level-left text-xs">
                                <div class="level-item">
                                    <div class="icon-text has-text-primary">
                                        <span class="icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-thumbs-up p-1 pr-0"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path></svg>
                                        </span>
                                        <span>1</span>
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>

                {/each}

                <div id="respond" class="comment-respond mt-4 notification p-0">
                    <p class="control">
                        <textarea class="textarea has-fixed-size bg-black has-background-grey-dark has-text-grey-lighter" placeholder="What are you Thinking?" id="comment" name="comment" cols="45" rows="3" aria-required="true" bind:value={message}></textarea>
                    </p>



                    <div class="commont-below flex justify-content-space-between align-items-center p-2">
                        {#if $session.user}
                        <div class="">
                            <figure class="image 32x32"><img alt="{$session.user.name}' Profile pic" src="{$session.user.picture}" class="avatar avatar-32 photo rounded-full" width="32" height="32"></figure>
                        </div>
                        <div class="buttons">
                            <figure class="image 32x32">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-smile"><circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line></svg>
                            </figure>
                            <button class="button bg-yellow-400 small post-comment-button" on:click={submit}>
                                <div class="icon-text">
                                    <span>Comment</span>
                                </div>
                            </button>
                        </div>
                        {:else}
                        please login to comment
                        {/if}
                    </div>
                </div>
            </div>
        </div>
    </section>
</aside>


<style>
    #comments {
        position: sticky;
        top: 0;
    }

    .media + .media {
        border-top: 0 !important;
    }

    .comment-who {
        line-height: 18px;
    }

    .image img.rounded-full {
        border: 2px rgb(140, 140, 140) solid;
    }
</style>