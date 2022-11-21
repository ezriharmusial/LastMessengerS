import { fetchArtistsMD } from './fetchArtists'
import website from "$lib/config/website";

/** @type {import('./$types').PageServerLoad} */
export async function load() {
	const image = '/images/screenshot.png'
	const title = 'Artists Page'
	const { siteUrl } = website

	const ogSquareImageSrc = siteUrl + image
	const ogImageSrc = siteUrl + image
	const twitterImageSrc = siteUrl + image
	const featuredImageSrc = siteUrl + image

	const breadcrumbs = [
		{
			name: 'Home',
			slug: '',
		},
		{
			name: 'Artists',
			slug: 'artists',
		},
	];
	const metadescription =
	'Artists page description';
	const featuredImageAlt =
	'picture of Artists Page';
	const featuredImageObject = {
		url: featuredImageSrc,
		alt: featuredImageAlt,
		width: 672,
		height: 448,
		caption: 'Artists page',
	};

	const ogImageObject = {
		url: ogImageSrc,
		alt: featuredImageAlt,
	};
	const ogSquareImageObject = {
		url: ogSquareImageSrc,
		alt: featuredImageAlt,
	};

	const twitterImageObject = {
		url: twitterImageSrc,
		alt: featuredImageAlt,
	};
	const entityMeta = {
		url: `${siteUrl}/`,
		faviconWidth: 512,
		faviconHeight: 512,
		caption: title,
	};
	const seoProps = {
		title,
		slug: '',
		entityMeta,
		datePublished: '2021-07-07T14:19:33.000+0100',
		lastUpdated: '2021-07-07T14:19:33.000+0100',
		breadcrumbs,
		metadescription,
		featuredImage: featuredImageObject,
		ogImage: ogImageObject,
		ogSquareImage: ogSquareImageObject,
		twitterImage: twitterImageObject,
	};

	return {
		// eslint-disable-next-line no-unused-vars
		// recentArtists: artists.slice(0, 2)
		artists: fetchArtistsMD,
		seoProps
	}
}