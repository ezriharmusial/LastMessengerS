<script lang="ts">
	import {Avatar} from "@skeletonlabs/skeleton"
	import LinkcastHeader from "./LinkcastHeader.svelte";

	export let length = -1
	export let linkcasts = []
</script>

<div class="bg-gradient-to-br from-slate-700 to-black w-screen min-h-screen md:p-28 p-6 pt-24">
	<h1 class="my-6">Latest News</h1>
	<div class="landscape:grid landscape:grid-cols-2 landscape:sm:grid-cols-2 landscape:md:grid-cols-3 landscape:xl:grid-cols-4 landscape:grid-flow-dense portrait:flex portrait:flex-col gap-6">
		{#each linkcasts.slice(0, length) as linkcast}
			<a class="card glass-surface sm:max-w-sm portrait:mb-6" href="/linkcasts/{linkcast.slug}#header">
				<header>
				<LinkcastHeader {linkcast}/>
				</header>
				<!-- Body -->
				<main class="p-4 space-y-4">
					<h5 class="text-primary-500 font-semibold">{linkcast.category || 'News & Announcments'}</h5>
					<h3 class="font-black text-3xl">{linkcast.title}</h3>
					{#if linkcast.subtitle}
					<h4 class="font-bold">{linkcast.subtitle}</h4>
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
	{#if length < linkcasts.length}
		<a href="/linkcasts" class="btn btn-filled-primary w-full">View all linkcasts...</a>
	{/if}
</div>

</div>
