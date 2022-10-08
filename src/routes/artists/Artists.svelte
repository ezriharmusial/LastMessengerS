<script>
	import { artists } from '$lib/stores/data';
	import { crossfade, scale } from 'svelte/transition';

	let selected = null;

	// Animation Settings
	const [send, receive] = crossfade({
		duration: 100,
		fallback: scale
	});

	// $: console.log('$artists', $artists.artists, selected)
</script>

<h1 class="bg-black text-white text-6xl p-4 m-auto">Artists</h1>

{#if $artists}
{#each $artists.artists.filter(lastmessenger => lastmessenger.active == true) as artist}
{#if selected !== artist}
<article class="flex items-center notification bg-black text-white blurred align-items-center mx-4 p-4" in:receive={{ key: artist }} out:send={{ key: artist }}>

	<img class="bg-gradient-to-r from-black to-neutral-900 rounded-full p-0 object-cover w-16 h-16 mr-4" style="border:3px solid yellow;" src="{artist.image || '/uploads/albumcovers/happysunofyah.jpg'}" alt="Profile Picture of {artist.stage_name}"/>

	<a href="/artists/{artist.slug}">
		<h2 class="title uppercase has-text-primary text-sm mobile text-sm touch text-lg widescreen text-xl-fullhd has-shadow">
			{@html artist.stage_name}
		</h2>

		<h3 class="subtitle uppercase text-xs mobile text-sm touch text-md widescreen text-lg fullhd">
			Born as: {@html artist.name}
		</h3>
		<section class="text-xs box hidden">
			<div class="content">
				{#if artist?.excerpt}
				{artist.excerpt}
				{/if}
			</div>
		</section>
	</a>
</article>
{/if}
{:else}
<section class="section">
	<div class="container">
		<div class="content">
			<h1 class="title">
				<div class="icon-text">
					<span class="fa-solid fa spinner fa-rotate" />
					<span> Loading Artists's </span>
				</div>
			</h1>
		</div>
	</div>
</section>
{/each}
{/if}
