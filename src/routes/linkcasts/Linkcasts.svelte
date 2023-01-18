<script lang="ts">
	import {Avatar} from "@skeletonlabs/skeleton"
	import LinkcastHeader from "./LinkcastHeader.svelte";

	export let length = 8
	export let linkcasts = []
</script>

<div class="bg-gradient-to-br from-slate-700 to-black w-screen min-h-screen md:p-28 p-6 pt-24">
	<h1 class="my-6">Latest News</h1>
	<div class="flex justify-start gap-6 flex-wrap">
		{#each linkcasts.slice(0, length) as linkcast}
			<a class="card glass-survace overflow-hidden w-96" href="/linkcasts/{linkcast.slug}">
				<header>
				<LinkcastHeader {linkcast}/>
				</header>
				<!-- Body -->
				<main class="p-4 space-y-4">
					<h6 class="text-primary-500">{linkcast.category || 'News & Announcments'}</h6>
					<h3>{linkcast.title}</h3>
					{#if linkcast.subtitle}
					<h4>{linkcast.subtitle}</h4>
					{/if}
					<article>
						{@html linkcast.preview.html}
					</article>
					<div class="grid grid-rows-1 gap-4">
						<!-- {#if linkcast.url}
						<a class="btn btn-filled-primary" href={linkcast.url} target="_blank" rel="noreferrer">{linkcast.url}</a>
						{/if} -->
						<div class="btn btn-filled-secondary">Read more...</div>
					</div>
				</main>
				<hr />
				<!-- Footer -->
				<footer class="p-4 flex justify-start items-center space-x-4">
					<Avatar src={linkcast.authorImage || '/images/red-black-purple-gold-with-sun.svg'} />
					<div class="flex-auto flex justify-between items-center">
						<h6 class="font-bold">By {linkcast.author || 'LMS Parrot'}</h6>
						<small>On {new Date(linkcast.date).toLocaleDateString()}</small>
					</div>
				</footer>
			</a>
		{/each}
	</div>
</div>
{#if length < linkcasts.length}
	<a href="/linkcasts" class="btn btn-primary">View linkcasts...</a>
{/if}