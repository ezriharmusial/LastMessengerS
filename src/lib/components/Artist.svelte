<script lang="ts">
    export let artist
</script>

<articls class="flex items-center bg-black hover:bg-neutral-800 text-white blurred align-items-center mx-4 p-4">
    <figure class="bg-gradient-to-r from-black to-neutral-900 p-0 w-16 h-16 mr-4 rounded-full">
	    <img class="object-cover rounded-full border-3 border-yellow-300" src="{artist.image || '/uploads/albumcovers/happysunofyah.jpg'}" alt="Profile Picture of {artist.stage_name}"/>
    </figure>

	<a href="/artists/{artist.slug}">
		<h2 class="title uppercase text-yellow-300 landscape:xs:text-sm landscape:sm:text-md landscape:md:text-lg landscape:lg:text-xl landscape:xl:text-2xl text-shadow">
			{@html artist.stage_name}
		</h2>

		<h3 class="subtitle uppercase landscape:xs:text-sm landscape:sm:text-md landscape:md:text-lg landscape:lg:text-xl landscape:xl:text-2xl">
            {#if artist.name != 'unknown' }Born as: {artist.name}{/if}
		</h3>
	</a>
</articls>
