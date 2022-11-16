<script lang="ts">
	let ogSquareImageSrc = '/images/screenshot.png';
	let ogImageSrc = '/images/screenshot.png';
	let twitterImageSrc = '/images/screenshot.png';
	let featuredImageSrc = '/images/screenshot.png';

	import Footer from "$lib/components/Footer.svelte";
	import { media, albums, getArtistImage} from "$lib/stores/data";
	import { fade} from "svelte/transition";

	import SEO from "$lib/components/SEO/index.svelte";
	import website from "$lib/config/website";

	export let data;
	const { posts } = data;

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
</script>

<svelte:head>
	<SEO {...seoProps} />
</svelte:head>

<header class="relative landscape:flex landscape:flex-row-reverse">
	<img class="lazy water absolute left-0 top-0 w-screen h-screen portrait:h-full portrait:hidden" alt="Backtround" src="/images/webp/background.webp" in:fade/>
	<div class="relative landscape:w-1/2 portrait:min-h-full landscape:h-screen flex-col justify-end align-middle text-center mt-20">
		<img class="lazy water absolute left-0 top-0 w-screen h-screen portrait:h-full landscape:hidden" alt="Backtround" src="/images/webp/background.webp" in:fade/>
		<figure class="h-1/4">
			<p class="text-3xl title p-4 marker">
				LastMessengerS Present
			</p>
			<img class="lazy pt-5 w-5/6 mx-auto" src="/images/webp/africa4africa.webp" alt="Africa4Africa" in:fade/>
		</figure>
		<figure class="h-1/4">
			<img class="lazy w-2/3 landscape:pt-20 mx-auto" src="/images/webp/rise-n-shine.webp" alt="Rise-n-Shine" in:fade/>
		<p class="p-4 font-semibold text-xl">
			Our debut Track Rise 'N' Shine by Africa4Africa group will release the 11th of November 2022 on all major Streaming Platforms. Keep Posted!
		</p>
		</figure>
		<figure class="h-1/4">
			<img class="lazy w-11/12 mx-auto" src="/images/webp/artists.webp" alt="Artists group" in:fade/>
		</figure>
		<!-- <img class="lazy w-max" alt="Red Soil" src="/images/red-soil.jpg" in:fade/> -->
		<figure class="h-1/4">
			<img class="lazy w-11/12 mx-auto" alt="Official Release 11/11/2022 on Soundcloud, Apple Music, YouTube Musuc, Spotify & Audiomack" src="/images/webp/release.webp" in:fade/>
		</figure>
	</div>

	<div class="landscape:w-1/2 landscape:h-screen landscape:p-10 landscape:mt-32 drop-shadow-md">
		<div class="content bg-black/20 text-white text-2xl rounded">
			<div class="aspect-w-16 aspect-h-9 mb-4">
				<iframe class="lazy" width="100%" height="100%" loading="lazy" src="https://www.youtube.com/embed/esWgldLXXZI" title="Africa4Africa - Rise 'n' (Shine Official videoclip) YouTube" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen in:fade></iframe>
			</div>
			<h3 class="title marker text-4xl p-4 mt-10">
				Rise 'n' Shine Video Release!
			</h3>
			<p class="p-4">
				Africa4Africa - Rise 'N' Shine is a wake-up call for Africans to resurrect from their age-long backwardness and dependency on foreigners.
			</p>
			<p class="p-4">
				The singers urged Africans to pay adequate attention to the deceivers who are out to fool them again.
			</p>
		</div>
	</div>
</header>

<section class="mb-10 background-radial-gradient pt-20">
	<div class="px-6 py-12 md:px-12 text-center lg:text-left">
		<div class="grid lg:grid-cols-2 gap-12 flex items-center">
			<div class="mt-12 lg:mt-0">
				<h1 class="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12" style="color: hsl(218, 81%, 95%);">Africa4Africa <br /><span style="color: hsl(218, 81%, 75%);">{ $albums[0]?.title }</span></h1>
				<a class="inline-block px-7 py-3 mr-2 bg-gray-200 text-gray-700 font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-gray-300 hover:shadow-lg focus:bg-gray-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-400 active:shadow-lg transition duration-150 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="light" href="/unity-album/rise-%E2%80%98n%E2%80%99-shine" role="button">Play Album</a>
				<a class="inline-block px-7 py-3 bg-transparent text-white font-medium text-sm leading-snug uppercase rounded focus:outline-none focus:ring-0 transition duration-150 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="light" href="/unity-album/#more" role="button">Learn more</a>
			</div>
			<div class="mb-12 lg:mb-0">
				<img src="{$albums[0]?.image || '/uploads/albumcovers/happysunofyah.jpg'}" class="lazy w-full rounded-lg shadow-lg" alt="Album cover for {$albums[0]?.title}" />
			</div>
		</div>
	</div>
</section>
<div class="m-10 text-3xl">
	<p>
		LastMessengerS Music is connecting Musical Talents, Managers, Promoters, Marketers and ICT/Media professionals together so as to reach the world with vital messages.
	</p>
	<p>
		Granted, so many important messages are begging to be delivered to the public but our modern artists have deviated from the main goal of music=Revelations, Prophecies and Truths.
	</p>
	<p>
		LastMessengerS are restoring one of the ancient music values~TRUTH, by packaging messages as enjoyable songs targeting the curious ears of the general public.
	</p>
</div>

<main class="py-10 bg-slate-900">
	<h3 class="title marker text-3xl p-10">Unity Album Tracks</h3>
<div class="content relative w-full flex gap-10 snap-x overflow-x-auto">

	{#each $media.media as medium, i}
	<a href="/unity-album/{medium.slug}" class="portrait:text-2xl landscape:text-xl sm:text-3xl landscape:lg:text-4xl snap-center hover:scale-110 flex shrink-0 portrait:flex-col portrait:self-start p-10 mb-5 {medium.color} {medium.bg_color} rounded drop-shadow-2xl">
		<img src={medium.image || getArtistImage(medium.artist)} class="lazy shrink-0 grow-1 drop-shadow bg-gradient-to-br from-slate-900 to-black portrait:m-10 portrait:w-2/4 portrait:mx-auto landscape:mr-6 landscape:w-28 landscape:sm:w-32 landscape:md:w-32 landscape:md:h-32 landscape:lg:w-48 landscape:lg:h-48 rounded-md border-3" data-amplitude-song-info="cover_art_url" alt="Track CoverArt" />

		<span class="content w-11/12">

		<p class="font">
			<span class="portrait:text-3xl landscape:text-2xl landscape:sm:text-4xl landscape:lg:text-5xl">
				{medium.order < 10 ? '0' + medium.order : medium.order}. {medium.artist} - {medium.title}
				{(medium.featuring) ? ( typeof Array.isArray(medium?.featuring) && medium?.featuring?.length > 2 ) ? 'feat. Various Artists' : 'feat. ' + medium.featuring : '' }
			</span>
		</p>
		{#if medium.release_album}
		<p data-amplitude-song-info="album" class="opacity-75 flex justify-self-center">
			<a class="font-semibold" href="/{$albums[0]?.slug}" alt="Unity Album 22">{medium.release_album}</a>
			{#if medium.genres}
			<span class="text-lg my-auto">
				{#each medium.genres as genre, i}
				<span class="rounded py-1 px-2 mx-2 d{medium.bg_color} mix-blend-multiply">{genre}</span>
				{/each}
			</span>
			{/if}
		</p>
		{/if}
		{#if medium.producer}
		<p>
			Produced by:
			{#each medium.producer as producer, i}
			{producer}{medium.producer.length > i + 1 ? ', ' : ''}
			{/each}
		</p>
		{/if}
	</span>
	</a>
	{/each}
</main>

<Footer />

<style>
	/* .water-container {
		overflow: hidden;
	} */

	.water {
		/* transform-origin: center center; */
		animation: water 6s ease-in-out alternate infinite;
		transition: opacity 3s;
		opacity:1;
	}


	@keyframes water {
		0%,
		100% {
			transform: skew(0deg, 0deg) scale(1.15, 1.15);
			filter: saturate(100%) invert(0%);
		}

		25% {
			filter: saturate(140%) invert(5%);
		}

		50% {
			transform: skew(1deg, 1deg) scale(1.15, 1.15);
			filter: saturate(100%) invert(0%);
		}

		75% {
			filter: saturate(125%) invert(10%);
		}
	}
</style>