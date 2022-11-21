// src/routes/[album_title]/[track_title]/+page.js
import website from "$lib/config/website";

export async function load({  }){
  const album = await import(`./../../lib/md-collections/albums/unity-album-2022.md`)
  const { title, image, featuredImage, twitterImage, ogImage, ogSquareImage, slug } = album.metadata

  const content = album.default
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
			slug,
		},
	];
	const metadescription =
		'Home page description';
	const featuredImageAlt =
		'picture of something related to the Album page';
	const featuredImageObject = {
		url: featuredImageSrc,
		alt: featuredImageAlt,
		width: 672,
		height: 448,
		caption: 'Unity Album page',
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
    ...album.metadata,
    seoProps,
    content,
  }
}