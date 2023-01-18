<script lang="ts">
	import { getMixcloudID, getYouTubeID } from "$lib/embeds";
	import { YoutubeGenerator, DeezerGenerator, SpotifyGenerator, SoundcloudGenerator} from "embedgenerator"

	export let linkcast

	let type = getLinkcastType(linkcast.url)

	// get the Linkcast Type
	function getLinkcastType(url:string) {
		// Youtube rexExp
		let youtubeRE = /^(?:https?:\/\/)?(?:m\.|www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/;
		let mixcloudRE = /^.*\mixcloud\.com(.*)$/;
		let spotifyRE = /^.*\spotify\.com(.*)$/;
		let deezerRE = /^.*\deezer\.com(.*)$/;
		let soundcloudRE = /^.*\deezer\.com(.*)$/;
		let whatsappRE = /^.*\whatsapp\.com(.*)$/;

		if (url?.match(youtubeRE)) {
			return 'youtube'
		} else if (url?.match(deezerRE)) {
			return 'deezer'
		} else if (url?.match(spotifyRE)) {
			return 'spotify'
		} else if (url?.match(soundcloudRE)) {
			return 'soundcloud'
		} else if (url?.match(mixcloudRE)) {
			return 'mixcloud'
		} else if (url?.match(whatsappRE)) {
			return 'whatsapp'
		} else {
			return 'image'
		}
	}
</script>

	{#if type == "image"}
	<img src="{linkcast.image}" class="bg-black/50 w-full
		{
			linkcast.imageRatio == 'aspect-squared' ? 'aspect-squared'
			: linkcast.imageRatio == 'aspect-[9/16]' ? 'aspect-[9/16]'
			: linkcast.imageRatio == 'aspect-[16/9]' ? 'aspect-[16/9]'
			: linkcast.imageRatio == 'aspect-[9/21]' ? 'aspect-[9/21]'
			: linkcast.imageRatio == 'aspect-[21/9]' ? 'aspect-[21/9]'
			: linkcast.imageRatio == 'aspect-[4/3]' ? 'aspect-[4/3]'
			: linkcast.imageRatio == 'aspect-[3/4]' ? 'aspect-[3/4]'
			: 'aspect-[21/9]'
		}"
		alt="Post" />

	{:else if type == 'whatsapp'}
	<figure class="relative">
	<img src="{linkcast.image}" class="background-black w-full
		{
			linkcast.imageRatio == 'aspect-squared' ? 'aspect-squared'
			: linkcast.imageRatio == 'aspect-[9/16]' ? 'aspect-[9/16]'
			: linkcast.imageRatio == 'aspect-[16/9]' ? 'aspect-[16/9]'
			: linkcast.imageRatio == 'aspect-[9/21]' ? 'aspect-[9/21]'
			: linkcast.imageRatio == 'aspect-[21/9]' ? 'aspect-[21/9]'
			: linkcast.imageRatio == 'aspect-[4/3]' ? 'aspect-[4/3]'
			: linkcast.imageRatio == 'aspect-[3/4]' ? 'aspect-[3/4]'
			: linkcast.imageRatio == 'aspect-squared' ? 'aspect-squared'
			: 'aspect-[21/9]'
		}"
		alt="Post" />
		<img src="/images/embeds/join-whatsapp-group.png" class="absolute w-full px-10 top-0 left-0 translate-y-1/2 backdrop-blur-3xl" alt="Join Whatsapp Group" />
	</figure>
	<!-- <a href={linkcast.url} class="btn btn-primary" title="Open url to join Whatsapp group" target="_blank" rel="noopener noreferrer"> -->
	<!-- Join our Whatsapp group -->
	<!-- </a> -->
	{:else if type == 'youtube'}
		{#await YoutubeGenerator.embed(linkcast.url)}
			<img src="{linkcast.image}" class="bg-black/50"
				alt="Join our Whatsapp Group" />

		{:then youtubeUrl}
		<iframe width="100%" height="100%" src="https://www.youtube-nocookie.com/embed/{getYouTubeID(youtubeUrl)}?controls=0" title="YouTube video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
		{/await}

	{:else if type == 'soundcloud'}
		{#await SoundcloudGenerator.embed(linkcast.url)}
		<img src="{linkcast.image}" class="bg-black/50 w-full
			{
				linkcast.imageRatio == 'aspect-squared' ? 'aspect-squared'
				: linkcast.imageRatio == 'aspect-[9/16]' ? 'aspect-[9/16]'
				: linkcast.imageRatio == 'aspect-[16/9]' ? 'aspect-[16/9]'
				: linkcast.imageRatio == 'aspect-[9/21]' ? 'aspect-[9/21]'
				: linkcast.imageRatio == 'aspect-[21/9]' ? 'aspect-[21/9]'
				: linkcast.imageRatio == 'aspect-[4/3]' ? 'aspect-[4/3]'
				: linkcast.imageRatio == 'aspect-[3/4]' ? 'aspect-[3/4]'
				: 'aspect-[21/9]'
			}"
			alt="Post" />
		{:then url}
		<iframe width="100%" height="100%" src="https://www.youtube-nocookie.com/embed/{getYouTubeID(url)}?controls=0" title="YouTube video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
		{/await}

	{:else if type == 'spotify'}
		{#await SpotifyGenerator.embed(linkcast.url)}
		<img src="{linkcast.image}" class="bg-black/50 w-full
			{
				linkcast.imageRatio == 'aspect-squared' ? 'aspect-squared'
				: linkcast.imageRatio == 'aspect-[9/16]' ? 'aspect-[9/16]'
				: linkcast.imageRatio == 'aspect-[16/9]' ? 'aspect-[16/9]'
				: linkcast.imageRatio == 'aspect-[9/21]' ? 'aspect-[9/21]'
				: linkcast.imageRatio == 'aspect-[21/9]' ? 'aspect-[21/9]'
				: linkcast.imageRatio == 'aspect-[4/3]' ? 'aspect-[4/3]'
				: linkcast.imageRatio == 'aspect-[3/4]' ? 'aspect-[3/4]'
				: 'aspect-[21/9]'
			}"
			alt="Post" />
		{:then spotifyUrl}
		<iframe width="100%" height="100%" src={spotifyUrl} title="YouTube video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
		{/await}

	{:else if type == 'deezer'}
		{#await DeezerGenerator.embed(linkcast.url)}
		<img src="{linkcast.image}" class="bg-black/50 w-full
			{
				linkcast.imageRatio == 'aspect-squared' ? 'aspect-squared'
				: linkcast.imageRatio == 'aspect-[9/16]' ? 'aspect-[9/16]'
				: linkcast.imageRatio == 'aspect-[16/9]' ? 'aspect-[16/9]'
				: linkcast.imageRatio == 'aspect-[9/21]' ? 'aspect-[9/21]'
				: linkcast.imageRatio == 'aspect-[21/9]' ? 'aspect-[21/9]'
				: linkcast.imageRatio == 'aspect-[4/3]' ? 'aspect-[4/3]'
				: linkcast.imageRatio == 'aspect-[3/4]' ? 'aspect-[3/4]'
				: 'aspect-[21/9]'
			}"
			alt="Post" />
		{:then deezerUrl}
		<iframe width="100%" height="100%" src={deezerUrl} title="deezer-widget" frameborder="0" allowtransparency="true" allow="encrypted-media; clipboard-write" ></iframe>
		{/await}

	{:else if type == 'mixcloud'}
		<iframe width="100%" height="100%" src="https://www.mixcloud.com/widget/iframe/?autoplay={linkcast.autoplay || 0}&feed={getMixcloudID(linkcast.url)}" title="Mixcloud Player" frameborder="0" allow="autoplay"></iframe>
	{/if}
