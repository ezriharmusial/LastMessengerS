// src/routes/[album_title]/[track_title]/+page.js
import website from "$lib/config/website";

export async function load({ params }){
	if (!params.track_title)
	return

	const track = await import(`./../../../lib/md-collections/media/${params.track_title}.md`)
	const artist = await import(`./../../../lib/md-collections/artist/${track.artist}.md`)
	const content = track.default

	const { title, image, featuredImage, twitterImage, ogImage, ogSquareImage, slug } = track.metadata

	const { author, siteUrl } = website;

	const ogSquareImageSrc = ogSquareImage ? siteUrl + ogSquareImage : siteUrl + image;
	const ogImageSrc = ogImage ? siteUrl + ogImage : siteUrl + image
	const twitterImageSrc = twitterImage ? siteUrl + twitterImage : siteUrl + image
	const featuredImageSrc = featuredImage ? siteUrl + featuredImage : siteUrl + image

	const breadcrumbs = [
		{
			name: 'Home',
			slug: '',
		},
		{
			name: 'Unity Album',
			slug: 'unity-album',
		},
		{
			name: title,
			slug: params.track_title,
		},
	];
	const metadescription =
	'Track page description';
	const featuredImageAlt =
	'picture of something related to the Tracks page';
	const featuredImageObject = {
		url: featuredImageSrc,
		alt: featuredImageAlt,
		width: 672,
		height: 448,
		caption: 'Track page',
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
		featuredImage: featuredImageObject,
		ogImage: ogImageObject,
		ogSquareImage: ogSquareImageObject,
		twitterImage: twitterImageObject,
	};

	return {
		...track.metadata,
		artist,
		content,
		seoProps
	}
}