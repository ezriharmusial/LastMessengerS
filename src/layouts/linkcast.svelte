<!-- src/layouts/svelte -->
<script lang="ts">
	import {Avatar} from "@skeletonlabs/skeleton"
	import LinkcastHeader from "../routes/linkcasts/LinkcastHeader.svelte";

	export let slug, title, subtitle, date, image, url, category, author, authorImage, imageRatio
</script>

<div class="card landscape:grid landscape:xs:grid-cols-2 landscape:sm:grid-cols-3 landscape:md:grid-cols-4 landscape:xl:grid-cols-4 landscape:gap-0">
	<header id="header" class="landscape:xs:col-span-1 landscape:sm:col-span-2 landscape:md:col-span-3 landscape:xl:col-span-3 landscape:max-h-screen landscape:overflow-hidden landscape:overflow-y-auto landscape:object-contain bg-black landscape:flex landscape:flex-col landscape:justify-center">
		<LinkcastHeader linkcast={{'image': image, 'imageRatio': imageRatio }} />
	</header>
	<main class="p-4 space-y-4 landscape:col-span-1 landscape:max-h-screen landscape:overflow-y-auto">
		<h6 class="text-primary-500">{category || 'News & Announcments'}</h6>
		<h3>{title}</h3>
		{#if subtitle}
		<h4>{subtitle}</h4>
		{/if}
		<article>
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