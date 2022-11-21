import type { LayoutServerLoad } from './$types'
import { getSession } from './session/+server'
import { fetchAlbumsMD } from '../lib/md-collections/fetchAlbums'
import { fetchArtistsMD } from './artists/fetchArtists'
import { fetchMediaMD } from './unity-album-2022/fetchMedia'
import website from '$lib/config/website';

export const load: LayoutServerLoad = async ({ locals }) => {
	// session consists of just the user object, but could contain other preferences
	const { user } = locals
	const session = getSession(user)

	const { author, siteUrl } = website;

	const ogSquareImageSrc = siteUrl + '/images/screenshot.png';
	const ogImageSrc = siteUrl + '/images/screenshot.png';
	const twitterImageSrc = siteUrl + '/images/screenshot.png';
	const featuredImageSrc = siteUrl + '/images/screenshot.png';

	const title = 'Home';
	const breadcrumbs = [
		{
			name: 'Home',
			slug: '',
		},
	];
	const metadescription =
		'Home page description';
	const featuredImageAlt =
		'picture of something related to the Home page';
	const featuredImage = {
		url: featuredImageSrc,
		alt: featuredImageAlt,
		width: 672,
		height: 448,
		caption: 'Home page',
	};
	const ogImage = {
		url: ogImageSrc,
		alt: featuredImageAlt,
	};
	const ogSquareImage = {
		url: ogSquareImageSrc,
		alt: featuredImageAlt,
	};

	const twitterImage = {
		url: twitterImageSrc,
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

	return {
		session,
		albums: fetchAlbumsMD,
		media: {media: fetchMediaMD},
		artists: fetchArtistsMD,
		unityAlbum: {...fetchAlbumsMD[0], tracklist: fetchMediaMD},
		seoProps
	}
}
