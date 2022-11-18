<!-- src/routes/[album_title]/+page.svelte -->
<script>
	import Footer from "$lib/components/Footer.svelte";
	import Tracks from "$lib/components/Tracks.svelte";
    import { browser } from '$app/environment';
	import lazyload from 'vanilla-lazyload';

	import SEO from "$lib/components/SEO/SEO.svelte";
	import website from "$lib/config/website";

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

	export let data;
</script>

<svelte:head>
	<SEO {...seoProps} />
</svelte:head>

<!-- Section: Design Block -->
<section class="mb-10 background-radial-gradient pt-20">
	<div class="px-6 py-12 md:px-12 text-center lg:text-left">
		<div class="grid lg:grid-cols-2 gap-12 flex items-center">
			<div class="mt-12 lg:mt-0">
				<h1 class="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12" style="color: hsl(218, 81%, 95%);">Africa4Africa <br /><span style="color: hsl(218, 81%, 75%);">{ data.title }</span></h1>
				<a class="inline-block px-7 py-3 mr-2 bg-gray-200 text-gray-700 font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-gray-300 hover:shadow-lg focus:bg-gray-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-400 active:shadow-lg transition duration-150 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="light" href="/unity-album/rise-%E2%80%98n%E2%80%99-shine" role="button">Play Album</a>
				<a class="inline-block px-7 py-3 bg-transparent text-white font-medium text-sm leading-snug uppercase rounded focus:outline-none focus:ring-0 transition duration-150 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="light" href="#more" role="button">Learn more</a>
			</div>
			<div class="mb-12 lg:mb-0">
				<img loading="eager" src="{data.image || '/uploads/albumcovers/happysunofyah.jpg'}" class="w-full rounded-lg shadow-lg" alt="Album cover for {data.title}" />
			</div>
		</div>
	</div>
</section>
<!-- Section: Design Block -->

<main id="more" class="flex portrait:flex-col items-center">
	<Tracks />
	<div class="md-content p-5 md:px-10 text-2xl grid lg:grid-cols-2 gap-12 ">
		<svelte:component this={data.content} />
	</div>
</main>

<Footer />

<style>
	.background-radial-gradient {
		background-color: hsl(218, 41%, 15%);
		background-image: radial-gradient(
		650px circle at 0% 0%,
		hsl(218, 41%, 35%) 15%,
		hsl(218, 41%, 30%) 35%,
		hsl(218, 41%, 20%) 75%,
		hsl(218, 41%, 19%) 80%,
		transparent 100%
		),
		radial-gradient(
		1250px circle at 100% 100%,
		hsl(218, 41%, 45%) 15%,
		hsl(218, 41%, 30%) 35%,
		hsl(218, 41%, 20%) 75%,
		hsl(218, 41%, 19%) 80%,
		transparent 100%
		);
	}
</style>