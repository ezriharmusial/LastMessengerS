<!-- src/routes/[slug]/+page.svelte -->
<script>
	import { UI } from "$lib/ui";
	import { onMount } from "svelte";
	import Comments from "$lib/components/Comments.svelte";
	import ArtistInfo from "$lib/components/ArtistInfo.svelte";
    import { browser } from '$app/environment';
	import lazyload from 'vanilla-lazyload';
	import Seo from "$lib/components/SEO/SEO.svelte";
	import { seoProps } from "$lib/components/SEO/seo";

	if (browser && !document.lazyloadInstance) {
		document.lazyloadInstance = new lazyload();
	}

    export let title, name, slug, image, featuredImage, twitterImage, ogImage, ogSquareImage, discography, twitter, instagram, tiktok, vskit, youtube, facebook, audiomack, sex, meaning, active_region, genres, active, languages, experience, profession, vocal_type, society, solution, success, feedback, actions, vocal_skills, performance_setup, vision, mission, wishes, reason, motivation, inspiration, influential_artists, influential_genres, youth_influences, purpose = ""

    let filename = discography ? discography.toLowerCase().replace(" ", "-") : ""
	let re = / /gi
	slug = filename.replace(re, "-")

	// const { seoProps } = data

	onMount(() => {
		// $UI.menu.visible = true;
		$UI.controls.visible = false
	})
</script>

<svelte:head>
	<Seo {...seoProps(title, image, featuredImage || image, twitterImage || image, ogImage || image, ogSquareImage || image  )} />
</svelte:head>

{#if active}
<ArtistInfo {title} {name} {slug} {image} {twitter} {instagram} {tiktok} {vskit} {youtube} {facebook} {audiomack} {sex} {meaning} {active_region} {genres} {languages} {experience} {profession} {vocal_type} {society} {solution} {success} {feedback} {actions} {vocal_skills} {performance_setup} {vision} {mission} {wishes} {reason} {motivation} {inspiration} {influential_artists} {influential_genres} {youth_influences} {purpose}>
<slot />
</ArtistInfo>
{:else}
This artist is not Active in LastMessengerS
{/if}
<!-- <Comments /> -->
