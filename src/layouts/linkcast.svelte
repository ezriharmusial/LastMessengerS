<!-- src/layouts/svelte -->
<script lang="ts">
	import {Avatar} from "@skeletonlabs/skeleton"
	import { getLinkcastType } from "../lib/embeds";
	import LinkcastHeader from "../routes/linkcasts/LinkcastHeader.svelte";
	import Linkcasts from "../routes/linkcasts/Linkcasts.svelte";
	export let data
	export let slug, title, subtitle, date, image, url, type, category, author, authorImage, imageRatio
	type = getLinkcastType(url)
</script>

<div class="card landscape:grid landscape:xs:grid-cols-2 landscape:sm:grid-cols-3 landscape:md:grid-cols-4 landscape:xl:grid-cols-4 landscape:gap-0">
	<header id="header" class="landscape:xs:col-span-1 landscape:sm:col-span-2 landscape:md:col-span-3 landscape:xl:col-span-3 landscape:max-h-screen landscape:overflow-hidden landscape:overflow-y-auto landscape:object-contain bg-black landscape:flex landscape:flex-col landscape:justify-center">
		<LinkcastHeader linkcast={{'url': url, 'type': type, 'image': image, 'imageRatio': imageRatio }} />
	</header>
	<main class="p-4 space-y-4 landscape:col-span-1 landscape:max-h-screen landscape:overflow-y-auto">
		<h6 class="text-primary-500 font-semibold">{category || 'News & Announcments'}</h6>
		<h3 class="font-black text-2xl">{title}</h3>
		{#if subtitle}
		<h4 class="font-medium">{#if subtitle}{subtitle} {/if}<span class="marker text-xs badge badge-filled-surface light:text-black/75 dark:text-white/75">{type}</span></h4>
		{/if}
		<article class="unstyled text-2xl">
			<slot />
			<p>
			{#if url}
			<a class="btn btn-filled-primary" href={url} target="_blank" rel="noreferrer">{url}</a>
			{/if}
			</p>
		</article>
		<hr />
		<!-- Footer -->
		<footer class="p-4 flex justify-start items-center space-x-4">
			<Avatar src={authorImage || '/images/red-black-purple-gold-with-sun.svg'} />
			<div class="flex-auto flex justify-between items-center">
				<h6 class="font-bold">By {author || 'LMS Parrot'}</h6>
				<small>On {new Date(date).toLocaleDateString()}</small>
			</div>
		</footer>
	</main>
</div>
<section>
	{#if data?.linkcasts?.length}
 	<Linkcasts linkcasts={data?.linkcasts} />
	{/if}
</section>