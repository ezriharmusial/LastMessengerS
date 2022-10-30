<script lang="ts">
	import { player } from '$lib/mediaplayer'
 	export let artist

</script>

<articls class="sticky top-0">
    <figure class="bg-gradient-to-br from-black to-neutral-900 rounded-full mx-10 mb-5">
	    <img class="object-cover rounded-full border-3 border-yellow-300" src="{artist.image || '/uploads/albumcovers/happysunofyah.jpg'}" alt="Profile Picture of {artist.stage_name}"/>
    </figure>

	<div class="m-10">
		<h2 class="title uppercase {$player.track.theme == 'light' ? 'text-red-500' : 'text-yellow-300'} portrait:text-3xl landscape:xs:text-sm landscape:sm:text-md landscape:md:text-lg landscape:lg:text-xl landscape:xl:text-2xl text-shadow">
			{@html artist.stage_name}
		</h2>

		<h3 class="subtitle uppercase portrait:text-xl landscape:xs:text-sm landscape:sm:text-md landscape:md:text-lg landscape:lg:text-xl landscape:xl:text-2xl">
            {#if artist.name != 'unknown' }Born as: {artist.name}{/if}
		</h3>
	</div>
</articls>
