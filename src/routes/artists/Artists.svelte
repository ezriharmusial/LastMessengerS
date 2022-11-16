<script>
	import { artists } from '$lib/stores/data';

	import Artist from '$lib/components/Artist.svelte';

	import lazyload from 'vanilla-lazyload';

	import SEO from "$lib/components/SEO/index.svelte";
	import website from "$lib/config/website";
	import { browser } from '$app/environment';

	let ogSquareImageSrc = '/images/screenshot.png';
	let ogImageSrc = '/images/screenshot.png';
	let twitterImageSrc = '/images/screenshot.png';
	let featuredImageSrc = '/images/screenshot.png';

	const { author, siteUrl } = website;
	let title = 'Home';
	const breadcrumbs = [
		{
			name: 'Home',
			slug: '',
		},
	];
	let metadescription =
		'LastMessengerS Music - connects talented underpriviledged musicians with Management & ICT Professionals to restore Truth in Music';
	const featuredImageAlt =
		'picture of a person with long, curly hair, wearing a red had taking a picture with an analogue camera';
	const featuredImage = {
		url: siteUrl + featuredImageSrc,
		alt: featuredImageAlt,
		width: 672,
		height: 448,
		caption: 'Home page',
	};
	const ogImage = {
		url: siteUrl + ogImageSrc,
		alt: featuredImageAlt,
	};
	const ogSquareImage = {
		url: siteUrl + ogSquareImageSrc,
		alt: featuredImageAlt,
	};

	const twitterImage = {
		url: siteUrl + twitterImageSrc,
		alt: featuredImageAlt,
	};
	const entityMeta = {
		url: `${siteUrl}/`,
		faviconWidth: 512,
		faviconHeight: 512,
		caption: author,
	};
	const seoProps = {
		title,
		slug: '',
		entityMeta,
		datePublished: '2021-07-07T14:19:33.000+0100',
		lastUpdated: '2021-07-07T14:19:33.000+0100',
		breadcrumbs,
		metadescription,
		featuredImage,
		ogImage,
		ogSquareImage,
		twitterImage,
	};

	if (browser && !document.lazyloadInstance) {
		document.lazyloadInstance = new lazyload();
	}

	let selected = null;

	// $: console.log('$artists', $artists.artists, selected)
</script>

<svelte:head>
  <SEO {...seoProps} />
</svelte:head>

<h1 class="bg-black text-white text-5xl p-4 m-auto">LastMessengerS Artists</h1>

<div class="grid landscape:grid-flow-col landscape:grid-rows-3 justify-center">

{#if $artists}
{#each $artists.filter(lastmessenger => lastmessenger.active == true) as artist}
{#if selected !== artist}
<Artist {artist} />
{/if}
{:else}
<section class="section">
	<div class="container mx-auto">
		<div class="content">
			<h1 class="title">
				<div class="icon-text">
					<span class="fa-solid fa spinner fa-rotate" />
					<span> Loading Artists's </span>
				</div>
			</h1>
		</div>
	</div>
</section>
{/each}
{/if}
</div>
