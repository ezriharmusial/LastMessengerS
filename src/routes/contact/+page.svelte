<script>
	import { browser } from '$app/environment';

	import lazyload from 'vanilla-lazyload';

	import SEO from "$lib/components/SEO/SEO.svelte";
	import website from "$lib/config/website";

	let ogSquareImageSrc = '/images/screenshot.png';
	let ogImageSrc = '/images/screenshot.png';
	let twitterImageSrc = '/images/screenshot.png';
	let featuredImageSrc = '/images/screenshot.png';

	const { author, siteUrl } = website;
	let title = 'Contact LastMessengerS';
	const breadcrumbs = [
	{
		name: 'Home',
		slug: '',
	},
	{
		name: 'Contact',
		slug: 'contact',
	},

	];
	let metadescription =
	'contact us';
	const featuredImageAlt =
	'picture of Contact page';
	const featuredImage = {
		url: siteUrl + featuredImageSrc,
		alt: featuredImageAlt,
		width: 672,
		height: 448,
		caption: 'Contact page',
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

</script>

<svelte:head>
<SEO {...seoProps} />
</svelte:head>

<div
class="relative overflow-hidden bg-no-repeat bg-cover"
style="
background-position: 50%;
background-image: url('https://mdbcdn.b-cdn.net/img/new/slides/146.webp');
height: 500px;
"
>
<div
class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
style="background-color: rgba(0, 0, 0, 0.75)"
>
<div class="flex justify-center items-center h-full">
	<div class="text-center text-white px-6 md:px-12">
		<h1 class="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12">
			Feel free to contact us <br /><em>anytime!</em>
		</h1>
		<button
		type="button"
		class="inline-block px-7 py-3 border-2 border-white text-white font-medium text-sm leading-snug uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
		data-mdb-ripple="true"
		data-mdb-ripple-color="light"
		>
		Contact Us
	</button>
</div>
</div>
</div>
</div>