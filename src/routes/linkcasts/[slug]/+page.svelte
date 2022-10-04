<script>
	import Category from "$lib/components/Category.svelte";
	import Comments from "$lib/components/Comments.svelte";
	import { setAudio } from "$lib/components/Scene/animation";
	import Tag from "$lib/components/Tag.svelte";
	import { mediaPlayer } from "$lib/mediaplayer";


	/** @type {import('./$types').PageData} */  export let data;

	// console.log('pagedata', data.data); // [{ slug: 'profile', title: 'Profile' }, ...]

	$: if($mediaPlayer?.player.src) {
        $mediaPlayer.player.load();
        const playPromise = $mediaPlayer.player.play();

		//TODO: Make into funcction in Mediaplayer, Trigger UI to show play button
		if (playPromise !== undefined) {
		playPromise.then(_ => {
			// Autoplay started!
			setAudio()
		}).catch(error => {
			// Autoplay was prevented.
			// Show a "Play" button so that user can start playback.
			console.log('press play!')
		});
		}
	}
	$: post = data.data ? data.data : undefined
	// $: console.log('post', post)
</script>

<!-- svelte-ignore missing-declaration -->
<svelte:head>
{#if post}
<title>{post.title.rendered}</title>
{/if}
</svelte:head>

{#if post}

<!-- <Youtube {post}/> -->

<header class="hero is-fullheight">

	<div class="hero-head">
		<div class="container" style="">
			<div class="image" style="max-width: 250px;">
				<img alt="Light Logo" src="/images/LMS_web-logo_small_dark.png" class="logo-in">
			</div>
		</div>
	</div>
	<div class="hero-body">
		<div class="is-flex">

			<div id="header-title" class="section">
				<h1 class="animated flipInX">
					<a class="orange-header" href="/{post.content.oembed_url}" title="Watch {post.title.rendered} on YouTube" aria-label="Listen to {post.title.rendered} on YouTube">
						<span class="title is-uppercase is-size-6-mobile is-size-5-touch is-size-2-widescreen is-size-1-fullhd has-shadow">{@html post.title.rendered} </span><br />
						<span class="subtitle is-uppercase is-size-7-mobile is-size-6-touch is-size-3-widescreen is-size-2-fullhd">by {post.content.creator_name}</span>
					</a>
				</h1>
				<div class="remain-time title is-size-6-mobile is-size-5-touch is-size-2-widescreen is-size-1-fullhd orange-header has-shadow">0:00</div>
			</div>

		</div>
	</div>
	<div class="hero-foot">
	</div>
</header>

<article class="{post.class} container">
	<div class="columns">
		<div class="column">

			<section class="section has-background-dark">
				<div class="container is-fluid">
					<h2 class="title is-size-6-mobile is-size-4-tablet is-size-2-widescreen is-size-1-fullhd has-text-grey-dark is-uppercase has-text-weight-normal">
						{#if post.categories}{#each post.categories as category}
						<Category id={category} />
						{/each}
						:
						{/if}
						{@html post.title.rendered}
					</h2>
					<h3 class="subtitle is-size-7-mobile is-size-5-tablet is-size-3-widescreen is-size-2-fullhd has-text-grey-dark is-uppercase has-text-weight-normal">by {post.content.creator_name}</h3>
				</div>
			</section>

			<section class="section has-background-dark">
				<div class="container is-fluid content">
					{@html post.content.rendered}
				</div>
			</section>
			{#if post.tags && post.tags.length}
			<section class="section has-background-dark">
				<div class="container is-fluid">
					<h3 class="subtitle is-size-6-mobile is-size-5-tablet is-size-2-widescreen is-size-1-fullhd has-text-grey-dark is-uppercase has-text-weight-normal">Tags: </h3>
					<p class="tags">
						{#each post.tags as tag}
						<Tag id={tag} />
						{/each}
					</p>
				</div>
			</section>
			{/if}
			<section id="share-linkcast" class="section has-background-dark">
				<div class="container is-fluid">
					<h3 class="subtitle is-size-6-mobile is-size-5-tablet is-size-2-widescreen is-size-1-fullhd has-text-grey-dark is-uppercase has-text-weight-normal">Share: </h3>
					<!-- @include('partials.social-buttons') -->
				</div>
			</section>
		</div>
		<div class="column is-narrow">
			<Comments />
		</div>
	</div>

</article>
{/if}