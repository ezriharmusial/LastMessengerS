<script>
	import { media } from '$lib/stores/data';
	import { onMount } from 'svelte';
	import { crossfade, scale } from 'svelte/transition';
	import Poster from './Poster.svelte';
	import Tube from './Tube.svelte';

	let selected = null;
	let page = 1;
	let loadingPost = false;
	let loadingMedia = false;
	let loadLock;
	let distToBottom = 0;
	let footerHeight = 0;
	let articleHeight = 0;
	let distance = 850;

	onMount(() => {
		// LoadlinkCast on first load
		loadLinkCasts(page)
	})

	// API Source
	const apiRoot = 'https://lastmessengers.artkidsfoundation.org/wp-json'
	// const apiRoot = 'https://biafranunity.tv/wp-json';
	// Animation Settings
	const [send, receive] = crossfade({
		duration: 200,
		fallback: scale
	});

	const load = post => {
		const img = new Image();

		img.onload = () => {
			selected = post;
			loadingPost = false;
		}

		if (post?._embedded["wp:featuredmedia"][0].source_url)
		img.src = post?._embedded["wp:featuredmedia"][0].source_url ? '' + post._embedded["wp:featuredmedia"][0].source_url : "";
	};

	$: loadLock = (!loadingMedia && distToBottom < (footerHeight + articleHeight + distance)) ? true: false;
	// $: console.log('selected:', selected);
	// $: console.log('media:', media);

	function getDistFromBottom () {
		if (typeof window !== 'undefined') {
			var scrollPosition = window.pageYOffset;
			var windowSize     = window.innerHeight;
			var bodyHeight     = document.body.offsetHeight;

			return Math.max(bodyHeight - (scrollPosition + windowSize), 0);
		}
	}

	function infiniteScroll(){
		distToBottom = getDistFromBottom();
		footerHeight = document.getElementById('footer').offsetHeight;
		articleHeight = document.getElementById("article-list").lastChild.offsetHeight || 480;

		// Load media
		if (!loadLock && !loadingMedia && distToBottom > 0 && distToBottom <= (footerHeight + articleHeight + distance) && distToBottom >= footerHeight) {
			// console.log('TCL: infiniteScroll -> loading', !loadingMedia)
			loadingMedia = true;
			loadLinkCasts(page++)
		}
	}

	function loadLinkCasts() {
		fetch(  apiRoot + '/wp/v2/portfolios/?per_page=25&page='+page+'&_embed' )
		.then( response => {
			if (response.status !== 200) {
				console.log('Problem! Status Code: ' +
				response.status);
				return;
			}
			response.json().then( articles => {
				$media = [...$media, ...articles];
				loadingMedia = false;
			});
		})
		.catch(function(err) {
			console.log('Error: ', err);
		});
	}

	// $: console.log('$media', $media, selected)
</script>

<svelte:window on:scroll={infiniteScroll} />
{#if selected}
{#await selected then d}
<div class="video-page" in:receive={{key:d}} out:send={{key:d}}>
	<button class="delete" aria-label="close" on:click="{() => selected = null}"></button>
	<Tube post={d} />
</div>
{/await}
{/if}

{#if $media}
<div id="article-list" class="section columns is-multiline">

	{#each $media as post}

	{#if selected !== post}
	<article class="column is-half" on:click="{() => {selected = null;load(post)}}" in:receive={{key:post}} out:send={{key:post}}>
		<div class="tile is-parent is-horizontal">
			<header class="tile is-child">
				<figure class="linkcast-image image is-16x9">
					<div class="tube-thumb lazyload" style="background-image: url('{ post?.excerpt ? '' : '' }{ post._embedded["wp:featuredmedia"][0].source_url}');"></div>
				</figure>
				<h3 class="has-folded-header orange-header">
					<span class="title is-uppercase is-size-6-mobile is-size-5-touch is-size-2-widescreen is-size-1-fullhd has-shadow">{@html post.title.rendered} </span>
					<br />
					<span class="subtitle is-uppercase is-size-7-mobile is-size-6-touch is-size-3-widescreen is-size-2-fullhd">by {@html post.content.creator_name}</span><br />
				</h3>
			</header>
			<section class="tile is-child is-7 box is-hidden">
				<div class="content">
					{#if post?.excerpt}
					{@html post.excerpt.rendered}
					{/if}
				</div>
			</section>
		</div>
		<a class="cover-link" href="/linkcasts/{post.slug}" title="Watch {post.title.rendered}" aria-label="Listen to {post.title.rendered}">&nbsp;</a>
	</article>
	{/if}
	{:else}
	<section class="section">
		<div class="container">
			<div class="content">
				<h1 class="title">
					<div class="icon-text">
						<span class="fa-solid fa spinner fa-rotate"></span>
						<span>
							Loading Video's
						</span>
					</div>
				</h1>
			</div>
		</div>
	</section>
	{/each}
</div>
{#if loadLock}
<div class="is-flex">
	<button class="button is-primary" on:click={loadLinkCasts}>Load more...</button>
</div>
{/if}
{/if}


<style global lang="scss">
	@import '../styles/common/_variables.scss';
	@import '../styles/layouts/_posts.scss';
	@import '../styles/themes/_lastmessengers.scss';

	.video {
		position: relative;
		display: flex;
		align-items: stretch;
		justify-content: flex-end;
		flex-direction: column;
		will-change: transform;

		.delete {
			position: absolute;
			right: 1rem;
			top: 1rem;
			z-index: 1;
		}

		img {
			object-fit: cover;
			cursor: pointer;
		}
	}

	.column {
		position: relative;
	}
</style>