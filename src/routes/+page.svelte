<script lang="ts">
	import { getArtistImage} from "$lib/stores/data";
	import { fade} from "svelte/transition";
	import SEO from "$lib/components/SEO/SEO.svelte";
	import Linkcasts from "./linkcasts/Linkcasts.svelte";

	export let data;
	const { seoProps, unityAlbum } = data
</script>

<svelte:head>
	<SEO {...seoProps} />
</svelte:head>

<section class="mb-10 background-radial-gradient pt-20">
	<div class="container mx-auto px-6 text-center flex items-center lg:text-left">
		<div class="grid lg:grid-cols-2 gap-12">
			<div class="mt-12 lg:mt-0">
				<h1 class="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12" style="color: hsl(218, 81%, 95%);">Africa4Africa <br /><span style="color: hsl(218, 81%, 75%);">{ unityAlbum.title }</span></h1>
				<a class="inline-block px-7 py-3 mr-2 bg-gray-200 text-gray-700 font-track text-sm leading-snug uppercase rounded shadow-md hover:bg-gray-300 hover:shadow-lg focus:bg-gray-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-400 active:shadow-lg transition duration-150 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="light" href="/unity-album-2022/rise-n-shine" role="button">Play Album</a>
				<a class="inline-block px-7 py-3 bg-transparent text-white font-track text-sm leading-snug uppercase rounded focus:outline-none focus:ring-0 transition duration-150 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="light" href="/unity-album-2022/#more" role="button">Learn more</a>
			</div>
			<div class="mb-12 lg:mb-0">
				<img src="{unityAlbum.image || '/uploads/albumcovers/happysunofyah.jpg'}" class="lazy w-full rounded-lg shadow-lg" alt="Album cover for {unityAlbum.title}" />
			</div>
		</div>
	</div>
</section>
<div class="container mx-auto px-6 my-10 text-3xl">
	<p class="unstyled">
		LastMessengerS Music is connecting Musical Talents, Managers, Promoters, Marketers and ICT/Media professionals together so as to reach the world with vital messages.
	</p>
	<p class="unstyled">
		Granted, so many important messages are begging to be delivered to the public but our modern artists have deviated from the main goal of music=Revelations, Prophecies and Truths.
	</p>
	<p class="unstyled">
		LastMessengerS are restoring one of the ancient music values~TRUTH, by packaging messages as enjoyable songs targeting the curious ears of the general public.
	</p>
</div>

<main class="py-10 bg-slate-900">
	<h3 class="title marker text-3xl p-10">Unity Album Tracks</h3>
<div class="content relative w-full flex gap-10 snap-x overflow-x-auto">
	<!-- TODO: No UX indicators  -->
	{#each unityAlbum.tracklist as track, i}
	<a href="/unity-album-2022/{track.slug}" class="{track.theme} portrait:max-w-[60vw] portrait:text-2xl portrait:aspect-square landscape:text-xl sm:text-3xl landscape:lg:text-4xl snap-center hover:scale-110 flex shrink-0 portrait:flex-col portrait:self-start p-10 mb-5 {track.color} {track.bgColor} rounded drop-shadow-2xl">
		<img src={track.image || getArtistImage(track.artist)} class="lazy shrink-0 grow-1 drop-shadow bg-gradient-to-br from-slate-900 to-black portrait:m-10 portrait:w-2/4 portrait:mx-auto landscape:mr-6 landscape:w-28 landscape:sm:w-32 landscape:md:w-32 landscape:md:h-32 landscape:lg:w-48 landscape:lg:h-48 rounded-md border-3" data-amplitude-song-info="cover_art_url" alt="Track CoverArt" />

		<span class="content w-11/12">

		<p class="unstyled font-bold {track.color}">
			<span class="portUnity Album Tracksrait:text-3xl landscape:text-2xl landscape:sm:text-4xl landscape:lg:text-5xl">
				{track.order < 10 ? '0' + track.order : track.order}. {track.artist} <br /> {track.title}
				{@html (track.featuring) ? ( typeof Array.isArray(track?.featuring) && track?.featuring?.length > 2 ) ? '<small>feat. Various Artists</small>' : '<small>feat. ' + track.featuring + '</small>' : '' }
			</span>
		</p>
		{#if track.release_album}
		<p data-amplitude-song-info="album" class="{track.color} opacity-75 flex justify-self-center">
			<a class="font-semibold" href="/{unityAlbum.slug}" alt="Unity Album 22">{track.release_album}</a>
			{#if track.genres}
			<span class="text-lg my-auto">
				{#each track.genres as genre, i}
				<span class="rounded py-1 px-2 mx-2 {track.bgColor} {track.color} mix-blend-multiply">{genre}</span>
				{/each}
			</span>
			{/if}
		</p>
		{/if}
		{#if track.producer}
		<p class="unstyled {track.color}">
			Produced by:
			{#each track.producer as producer, i}
			{producer}{track.producer.length > i + 1 ? ', ' : ''}
			{/each}
		</p>
		{/if}
	</span>
	</a>
	{/each}
</main>

<Linkcasts linkcasts={data.linkcasts} length={8} start={0}/>

<div class="min-w-screen min-h-screen bg-yellow-300 flex items-center py-24 px-10 overflow-hidden relative">
    <div class="w-full max-w-6xl rounded bg-white shadow-xl p-10 lg:p-20 mx-auto text-gray-800 relative md:text-left">
		<img src="/uploads/posts/cubana-artkids-202.jpg" class="w-full relative z-10" alt="">
        <div class="md:flex items-center -mx-10">
            <div class="w-full md:w-1/2 px-10 mb-10 md:mb-0">
                <div class="relative">
                    <img src="/uploads/posts/cubana-artkids-2022.jpg" class="w-full relative z-10" alt="">
                </div>
            </div>
            <div class="w-full md:w-1/2 px-10">
                <div class="mb-10">
                    <h2 class="font-bold uppercase text-2xl mb-5">CUBANA~ARTKIDS® '22</h2>
					<dl class="text-xl mb">
						<b>Event:</b> Talent Showcase<br/>
						<b>Venue:</b> Cubana Lounge Owerri<br/>
						<b>Date:</b> 17 DEC. 2022<br />
						<b>Time:</b> 8:00 PM<br/>
					</dl>
                    <p class="text-xl mb-5">Cubana Lounge and ArtKids® Holland welcome you to our very first Cubana~Artkids® Talent showcase; happening on the 17th of Dec. 2022 @Cubana Lounge Owerri.  <!--a href="#" class="opacity-50 text-gray-900 hover:opacity-100 inline-block text-xs leading-none border-b border-gray-900">MORE <i class="mdi mdi-arrow-right"></i></a--></p>
					<p class="text-xl mb-5">
					The following Artists will perform LIVE:
					</p>
					<ol class="mb-5 text-lg">
						<li>
							01. Thinking Faculty TF - O'laga Port
							Genre: Langwabeat
						</li>

						<li>
							02. WhitneyZinny - Captured My Heart
							Genre: R&B
						</li>

						<li>
							03. Wizron - Ego
							Genre: Afrobeat
						</li>

						<li>
							04. Favour Lee - Sere Ft. Maya Skyler
							Genre: Afrobeat
						</li>

						<li>
							05. Maya Skyler - Falling for You
							Genre: R&B
						</li>

						<li>
							06. Chuzzykeys - Cradle
							Genre: Afrobeat
						</li>

						<li>
							07. Skillful Kennis SK - Anya-Anwu
							Genre: Hip Hop
						</li>

						<li>
							08. ZehkEzehk - LoveTonic
							Genre: AfroR&B
						</li>
					</ol>
					<p class="pt-5 text-xl">
					<b>Be there!</b>
					</p>

                </div>
                <!-- <div>
                    <div class="inline-block align-bottom mr-5">
                        <span class="text-2xl leading-none align-baseline">$</span>
                        <span class="font-bold text-5xl leading-none align-baseline">59</span>
                        <span class="text-2xl leading-none align-baseline">.99</span>
                    </div>
                    <div class="inline-block align-bottom">
                        <button class="bg-yellow-300 opacity-75 hover:opacity-100 text-yellow-900 hover:text-gray-900 rounded-full px-10 py-2 font-semibold"><i class="mdi mdi-cart -ml-2 mr-2"></i> BUY NOW</button>
                    </div>
                </div> -->
            </div>
        </div>
    </div>
</div>

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
			<div class="aspect-[16/9] mb-4">
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