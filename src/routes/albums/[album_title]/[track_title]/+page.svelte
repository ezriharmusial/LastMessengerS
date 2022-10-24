<!-- src/routes/[slug]/+page.svelte -->
<script lang="ts">
	import { play, player, skipTo } from '$lib/mediaplayer';
	import { getArtistImage, albums } from '$lib/stores/data';
	import { UI, UIState } from '$lib/ui';
	import { onMount, onDestroy } from 'svelte';
	import mobile from 'is-mobile';
	import { Body } from 'svelte-body';

	/** @type {import('./$types').PageData} */
	export let data;

	let lyricsScroller: HTMLElement;
	let scrollerTimer;
	let autoScroll = true;
	let loaded = false;
	let position;

	onMount(() => {
		// Set UI
		$UI.menu.visible = false;
		$UI.controls.visible = true;
		if ($UIState == 'navigation') UIState.toggle();
		loaded = true;
		// play track according to URL
		$player.index = data.order;

		scrollerTimer = setInterval(printOffsetLeft, 10);
	});

	onDestroy(() => {
		clearInterval(scrollerTimer);
	});

	function printOffsetLeft() {
		// console.log(
		// 	'lyrics',
		// 	lyricsScroller?.scrollHeight,
		// 	lyricsScroller?.offsetTop,
		// 	lyricsScroller?.offsetLeft,
		// 	autoScroll,
		// 	Math.floor($player?.currentTime / ( $player?.duration ) * 100) + "%",
		// )
		if (lyricsScroller && autoScroll)
			position = ($player.progress / 100) * lyricsScroller.offsetHeight;
		// lyricsScroller.scrollTo({
		// 	left: 0,
		// 	top: ($player.progress / 100) * (lyricsScroller?.scrollHeight - lyricsScroller.offsetHeight),
		// 	behavior: 'smooth'
		// })
	}

	// $: console.log('position', position);
</script>
<Body class="{$player.track.theme == 'light' ? 'bg-white' : 'bg-dark'}"/>

{#if $player?.track}
	<article class="transition-colors duration-1000 fixed w-full h-full top-0 left-0 p-4 portrait:pt-24 {$player.track.bg_color}">
		<header
			class="transition-colors duration-700 absolute w-full h-full top-0 left-0 {$player.track.color} {$player.track
				.bg_color} {$player.track.bg_size} {$player.track
				.bg_blend} transition-opacity duration-700 {$player.track.bg_opacity} delay-0 {$player.track
				.bg_position}"
			class:opacity-0={!$player.playing}
			class:delay-3000={$player.playing}
			style="background-image: url('/images/animated-bg/{$player.track.bg}.gif'); transition: background 3s;">
	</header>
		<main class="absolute top-0 left-0 right-0 bottom-0 {$player.track.align_image == 'left' ? 'left' : 'right'}">
			<div
				class="lyrics absolute -z-5 {$player.track
					.color} portrait:w-4/5 landscape:w-4/5 landscape:sm:w-2/3 landscape:lg:w-2/3 landscape:xl:w-1/2 {$player.track.align_image ==
				'left'
					? 'left portrait:left-1/5 landscape:xs:left-4 landscape:sm:left-1/5 lg:left-1/3 xl:left-1/2 right-14'
					: 'right portrait:right-1/5 landscape:xs:right-4 landscape:sm:right-1/5 lg:right-1/3 xl:right-1/2 left-14'} overflow-hidden flex flex-col md-content landscape:text-4xl portrait:text-4xl landscape:xs:text-xl landscape:sm:text-4xl landscape:md:text-5xl landscape:lg:text-6xl landscape:xl:text-7xl {$player
					.track.align_image != 'left'
					? 'text-left'
					: 'text-right'} text-bold transition-opacity duration-700 delay-0 ease-in"
				class:opacity-0={!$player.lyrics || !$player.playing}
				class:delay-1000={$player.playing}
				style="transform:translate(0vw, {'-' + position + 'px'});"
				on:mouseover={() => (autoScroll = false)}
				on:mouseleave={() => (autoScroll = true)}
				on:focus={() => (autoScroll = false)}
				on:mouseleave={() => (autoScroll = true)}
				bind:this={lyricsScroller}
			>
				{#if data.content}
					<svelte:component this={data.content} />
				{/if}
			</div>
		</main>
			<div class="images transition-opacity duration-700 delay-0 ease-in-out"
				class:opacity-10={!$player.playing}
				class:delay-1000={$player.playing}>
				<img
					class="fixed bottom-0 portait:w-3/4 landscape:h-4/5 h-1/2 drop-shadow-2xl {$player.track.align_image == 'left' ? '-left-30 landscape:-left-12 landscape:sm:-left-20 landscape:xl:left-0 portrait:-left-16' : $player.track.align_image == 'right' ? '-right-30 landscape:-right-12 landscape:sm:-right-20 landscape:xl:right-0 portrait:-right-16' : 'bottom-50 left-50 translate-x-1/2'}"
					data-amplitude-song-info="cover_art_url"
					alt="Picture of {$player.track.featuring}"
					src={$player.track.artist != 'LastMessengerS'
						? getArtistImage($player.track.artist)
						: '/images/Africa4Africa-Unity_Album_Poster-Web.jpg'}
				/>

				{#if Array.isArray($player.track.featuring) && $player.track.featuring.length < 3}
					<div class="fixed bottom-0 left-0 portait:w-3/4 flex flex-row w-full">
						{#each $player.track.featuring as artist, i}
							{#if getArtistImage(artist)}
								<img
									class="portrait:w-3/4 sm:-ml-20 landscape:sm:w-1/4 lg:-ml-50"
									width={innerWidth / ($player.track.featuring.length * 0.5) + 1}
									data-amplitude-song-info="cover_art_url"
									alt="Picture of {artist}"
									src={getArtistImage(artist)}
								/>
							{/if}
						{/each}
					</div>
				{:else if $player.track.featuring && getArtistImage($player.track.featuring)}
					<img
						class="h-3/4 fixed bottom-0 light-0"
						data-amplitude-song-info="cover_art_url"
						alt="Picture of {$player.track.featuring}"
						src={getArtistImage($player.track.featuring)}
					/>
				{/if}
			</div>

		<footer
			class="absolute portrait:h-full portrait:w-full portrait:top-0 landscape:bottom-10 landscape:sm:bottom-10 landscape:lg:bottom-32 left-0 landscape:m-10 flex portrait:flex-col items-center justify-evenly portrait:justify-end transition-opacity duration-700 delay-0"
			class:opacity-0={$player.playing || $UI.menu.visible}
			class:delay-1000={$player.playing}
		>
			<img
				class="shrink-0 grow-1 bg-gradient-to-br from-slate-900 to-black portrait:w-2/3 portrait:mx-auto landscape:mr-6 landscape:w-28 landscape:sm:w-32 landscape:md:w-32 landscape:md:h-32 landscape:lg:w-48 landscape:lg:h-48 rounded-md border-3"
				data-amplitude-song-info="cover_art_url"
				alt="Track CoverArt"
				src={$player.track.image || getArtistImage($player.track.artist)}
			/>

			<div class="portrait:text-2xl landscape:text-xl sm:text-3xl landscape:lg:text-4xl flex shrink-1 grow-0 flex-col portrait:self-start p-6 portrait:w-full portrait:mb-20 {$player.track.color} drop-shadow-2xl">
				<p class="font-bold">
					<span class="portrait:text-3xl landscape:text-2xl landscape:sm:text-4xl landscape:lg:text-5xl">
						{$player.track.order < 10 ? '0' + $player.track.order : $player.track.order}. {$player
							.track.artist} - {$player.track.title}
						{($player.track.featuring) ? ( typeof Array.isArray($player?.track?.featuring) && $player?.track?.featuring?.length > 2 ) ? 'feat. Various Artists' : 'feat. ' + $player.track.featuring : '' }
					</span>
				</p>
				{#if $player.track.release_album}
				<p data-amplitude-song-info="album" class="opacity-75 flex justify-self-center">
					<a class="font-semibold" hreft:text-3xl ="/albums/{$albums[0]?.slug}" alt="">{$player.track.release_album}</a>
								{#if $player.track.genres}
					<span class="text-lg my-auto">
						{#each $player.track.genres as genre, i}
							<span class="rounded py-1 px-2 mx-2 d{$player.track.bg_color} mix-blend-multiply">{genre}</span>
						{/each}
					</span>
				{/if}
				</p>
				{/if}
				{#if $player.track.producer}
					<p>
						Produced by:
						{#each $player.track.producer as producer, i}
							{producer}{$player.track.producer.length > i + 1 ? ', ' : ''}
						{/each}
					</p>
				{/if}
			</div>
		</footer>
	</article>
{/if}

<a class="absolute font-bold drop-shadow-2xl- transition-opacity duration-700 opacity-0 bottom-5 {$player.track.theme == "dark" ? ' text-white' : ' text-black'} {$player.track.align_image == 'left' ? 'left-1/4 right-5 text-right' : 'right-1/4 left-5'} px-4 py-3 z-200 marker text-4xl {$player.track.bc_color} {$player.track.color}" class:opacity-100={!$player.lyrics} href="/artists/">
{$player.track.order < 10 ? '0' + $player.track.order : $player.track.order}. {$player
	.track.artist} - {$player.track.title}
{($player.track.featuring) ? ( typeof Array.isArray($player?.track?.featuring) && $player?.track?.featuring?.length > 2 ) ? 'feat. Various Artists' : 'feat. ' + $player.track.featuring : '' }
</a>
<style lang="scss">
	main {
		overflow: hidden;
		max-height: 100vh;

		&.right {
			mask-image: linear-gradient(185deg, transparent 10%, black 30%, black 70%, transparent 90%);
		}
		&.left {
			mask-image: linear-gradient(175deg, transparent 10%, black 30%, black 70%, transparent 90%);
		}
	}
</style>
