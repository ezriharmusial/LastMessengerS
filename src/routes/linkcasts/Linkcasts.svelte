<script lang="ts">
	import {Avatar} from "@skeletonlabs/skeleton"
	import LinkcastHeader from "./LinkcastHeader.svelte";

	export let featured = true
	export let start = 1
	export let linkcasts = []
	export let length = linkcasts.length
</script>

<div class="bg-gradient-to-br from-slate-700 to-black w-screen min-h-screen md:p-28 p-6 pt-24">
	<div class="container mx-auto">

		<h2 class="my-6 title marker text-3xl">Latest News</h2>
		{#if featured}
		<a class="card landscape:flex landscape:flex-row glass-surface landscape:mb-6" href="/linkcasts/{linkcasts[0].slug}#header">
			<header class="bg-black max-h-screen overflow-hidden overflow-y-auto">
				<LinkcastHeader linkcast={linkcasts[0]}/>
			</header>
			<!-- Body -->
			<div class="flex-col">

				<main class="p-4 space-y-4">
					<h5 class="text-primary-500 font-semibold">{linkcasts[0].category || 'News & Announcments'}</h5>

					<h3 class="font-black text-xl">{linkcasts[0].title}</h3>

					<h4 class="font-medium">{#if linkcasts[0].subtitle}{linkcasts[0].subtitle} {/if}<span class="marker text-xs badge badge-filled-surface light:text-black/75 dark:text-white/75">{linkcasts[0].type}</span></h4>

					<article class="unstyled text-2xl ">
						{@html linkcasts[0].preview.html}
					</article>
					<div class="grid grid-rows-1 gap-4">
						<!-- {#if linkcast.url}<a class="btn btn-filled-primary" href={linkcast.url} target="_blank" rel="noreferrer">{linkcast.url}</a>{/if} -->
						<div class="btn btn-filled-secondary">Read more...</div>
					</div>
				</main>
				<hr />
				<!-- Footer -->
				<footer class="p-4 flex justify-start items-center space-x-4">
					<Avatar src={linkcasts[0].authorImage || '/images/red-black-purple-gold-with-sun.svg'} />
					<div class="flex-auto flex justify-between items-center">
						<h6 class="font-bold">By {linkcasts[0].author || 'LMS Parrot'}</h6>
						<small>On {new Date(linkcasts[0].date).toLocaleDateString()}</small>
					</div>
				</footer>
			</div>
		</a>
		{/if}

		<div class="landscape:grid landscape:grid-cols-2 landscape:sm:grid-cols-2 landscape:md:grid-cols-2 landscape:xl:grid-cols-3 landscape:grid-flow-dense portrait:flex portrait:flex-col gap-6 mt-6">

			{#each linkcasts.slice(start, length) as linkcast}
			<a class="card glass-surface sm:max-w-sm portrait:mb-6" href="/linkcasts/{linkcast.slug}#header">
				<header>
					<LinkcastHeader {linkcast}/>
				</header>
				<!-- Body -->
				<main class="p-4 space-y-4">
					<h5 class="text-primary-500 font-semibold">{linkcast.category || 'News & Announcments'}</h5>

					<h3 class="font-black text-xl">{linkcast.title}</h3>

					<h4 class="font-medium">{#if linkcast.subtitle}{linkcast.subtitle} {/if}<span class="marker text-xs badge badge-filled-surface light:text-black/75 dark:text-white/75">{linkcast.type}</span></h4>

					<article class="unstyled text-2xl ">
						{@html linkcast.preview.html}
					</article>
					<div class="grid grid-rows-1 gap-4">
						<!-- {#if linkcast.url}<a class="btn btn-filled-primary" href={linkcast.url} target="_blank" rel="noreferrer">{linkcast.url}</a>{/if} -->
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

</div>
