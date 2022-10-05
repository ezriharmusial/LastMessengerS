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

{#if $artists}
{#each $artists.artists.filter(lastmessenger => lastmessenger.active == true) as artist}
{#if selected !== artist}
<article class="is-flex notification is-black is-blurred is-align-items-center mx-4 p-4" in:receive={{ key: artist }} out:send={{ key: artist }}>

	<figure class="image is-128x128">
		<img class="has-background-dark is-rounded p-0" style="border:3px solid yellow;" src="{artist.image || '/uploads/albumcovers/happysunofyah.jpg'}" alt="Profile Picture of {artist.stage_name}"/>
	</figure>

	<div>
		<h2 class="title is-uppercase has-text-primary is-size-6-mobile is-size-5-touch is-size-2-widescreen is-size-1-fullhd has-shadow">
			{@html artist.stage_name}
		</h2>

		<h3 class="subtitle is-uppercase is-size-7-mobile is-size-6-touch is-size-3-widescreen is-size-2-fullhd">
			Born as: {@html artist.name}
		</h3>
		<section class="is-7 box is-hidden">
			<div class="content">
				{#if artist?.excerpt}
				{artist.excerpt}
				{/if}
			</div>
		</section>
	</div>
	<a class="cover-link" href="/artists/{artist.slug}"></a>
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
