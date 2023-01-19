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
	let title = 'Home';
	const breadcrumbs = [
		{
			name: 'Home',
			slug: '',
		},
		{
			name: 'About LastMessengerS',
			slug: 'about',
		},
	];
	let metadescription =
		'About page description';
	const featuredImageAlt =
		'picture of the About Page';
	const featuredImage = {
		url: siteUrl + featuredImageSrc,
		alt: featuredImageAlt,
		width: 672,
		height: 448,
		caption: 'About page',
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

<header>
  <!-- Background image -->
  <div class="relative overflow-hidden bg-no-repeat bg-cover" style="
    background-position: 50%;
    background-image: url('https://mdbcdn.b-cdn.net/img/new/slides/146.webp');
    height: 350px;
  ">
    <div class="absolute top-0 right-0 bottom-0 pt-20 left-0 w-full h-full overflow-hidden bg-fixed"
      style="background-color: rgba(0, 0, 0, 0.75)">
      <div class="flex justify-center items-center h-full">
        <div class="text-center text-white px-6 md:px-12">
          <h1 class="text-5xl font-bold mt-0 mb-6">About</h1>
          <h3 class="text-3xl font-bold mb-8">LastMessengerS</h3>
          <button type="button"
            class="inline-block px-6 py-2.5 border-2 border-white text-white font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
            data-mdb-ripple="true" data-mdb-ripple-color="light">
            Get started
          </button>
        </div>
      </div>
    </div>
  </div>
  <!-- Background image -->
</header>