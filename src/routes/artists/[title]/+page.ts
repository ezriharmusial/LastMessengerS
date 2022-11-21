// src/routes/artists/[title]/+page.js
import website from "$lib/config/website";

export async function load({ params }){
	const artist = await import(`./../../../lib/md-collections/artists/${params.title}.md`)
	const { title, image, featuredImage, twitterImage, ogImage, ogSquareImage, slug, discography } = artist.metadata
	const content = artist.default

	let filename = discography.toLowerCase().replace(" ", "-");
	let re = / /gi
	filename = filename.replace(re, "-")
	const track = await import(`../${filename}/+page.md`)


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
	'Profile page description';
	const featuredImageAlt =
	'picture of ' + title;
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
		...artist.metadata,
		track,
		content,
		seoProps
	}

}