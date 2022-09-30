<script>
	import { albums } from '$lib/stores/data';
	import { crossfade, scale } from 'svelte/transition';

	// Animation Settings
	const [send, receive] = crossfade({
		duration: 200,
		fallback: scale
	});

	// $: console.log('$albums', $albums.albums, selected)
</script>

{#if $albums}
<div id="article-list" class="section columns is-multiline">
	{#each $albums.albums as album}
	<article
	class="column is-half"
	on:click={() => {
		// selected = null;
		// load(album);
	}}
	in:receive={{ key: album }}
	out:send={{ key: album }}
	>
		<a class="cover-link" href="/albums/{album.slug}">
			<div class="tile is-parent is-horizontal">
				<header class="tile is-child">
					<figure class="linkcast-image image is-16x9">
						<div
						class="tube-thumb lazyload"
						style="background-image: url('{album.profile_picture ||
							'https://lastmessengers.artkidsfoundation.org/wp-content/uploads/2022/09/happysunofyah.jpg'}');"
							/>
						</figure>
						<h3 class="has-folded-header orange-header">
							<span
							class="title is-uppercase is-size-6-mobile is-size-5-touch is-size-2-widescreen is-size-1-fullhd has-shadow"
							>{@html album.stage_name}
						</span>
						<br />
						<span
						class="subtitle is-uppercase is-size-7-mobile is-size-6-touch is-size-3-widescreen is-size-2-fullhd"
						>Real Name {@html album.name}</span
						><br />
					</h3>
				</header>
				<section class="tile is-child is-7 box is-hidden">
					<div class="content">
						{#if album?.excerpt}
						{album.excerpt}
						{/if}
					</div>
				</section>
			</div>
		</a>
	</article>
	{:else}
	<section class="section">
		<div class="container">
			<div class="content">
				<h1 class="title">
					<div class="icon-text">
						<span class="fa-solid fa spinner fa-rotate" />
						<span> Loading albums's </span>
					</div>
				</h1>
			</div>
		</div>
	</section>
{/each}
</div>
{/if}

<style global lang="scss">
	@import '../../lib/styles/common/_variables.scss';
	@import '../../lib/styles/layouts/_posts.scss';
	@import '../../lib/styles/themes/_lastmessengers.scss';

	.video {
		position: relative;
		display: flex;
		align-items: stretch;
		justify-content: flex-end;
		flex-direction: column;
		will-change: transform;

		.delete {
			position: absolute;
			right: 1rem;
			top: 1rem;
			z-index: 1;
		}

		img {
			object-fit: cover;
			cursor: pointer;
		}
	}

	.column {
		position: relative;
	}
</style>
