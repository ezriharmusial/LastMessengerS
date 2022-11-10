<script lang="ts">
	import { page } from '$app/stores';
	import { player } from '$lib/mediaplayer'
 	export let artist

	const url = $page.url
	const title = "Test"
	// const title = $player.track?.order < 10 ? '0' + $player.track?.order : $player.track?.order + '. ' + $player.track?.artist + ' - ' + $player.track?.title + ($player.track?.featuring) ? ( typeof Array.isArray($player?.track?.featuring) && $player?.track?.featuring?.length > 2 ) ? 'feat. Various Artists' : 'feat. ' + $player.track?.featuring : ''  + $player.track?.track
</script>

<div class="relative overflow-hidden bg-slate-900 bg-no-repeat bg-cover max-w-xs transition-transform duration-700 ease-in-out hover:scale-110 hover:z-10 rounded" data-mdb-ripple="true" data-mdb-ripple-color="light">
	<img class="max-w-xs mt-5" src="{artist.image || '/uploads/albumcovers/happysunofyah.jpg'}" alt="Profile Picture of {artist.stage_name}"/>
  <!-- <img src="https://mdbootstrap.com/img/Photos/Others/mewa.jpg" class="max-w-xs" /> -->
  <a href="/artists/{artist.slug}">
    <div class="absolute top-0 right-0 bottom-0 left-0 p-5 w-full h-full overflow-hidden bg-fixed bg-black/20 hover:bg-transparent flex flex-col justify-end font-shadow">
		<h2 class="title uppercase {$player.track?.theme == 'light' ? 'text-red-500' : 'text-yellow-300'} portrait:text-3xl landscape:xs:text-sm landscape:sm:text-md landscape:md:text-lg landscape:lg:text-xl landscape:xl:text-2xl text-shadow">
			{@html artist.stage_name}
		</h2>

		<h3 class="subtitle uppercase portrait:text-xl landscape:xs:text-sm landscape:sm:text-md landscape:md:text-lg landscape:lg:text-xl landscape:xl:text-2xl">
            {#if artist.name != 'unknown' }Born as: {artist.name}{/if}
		</h3>
	</div>
  </a>
</div>

<!-- <article>
    <figure class="bg-gradient-to-br {$player.track?.theme == 'light' ? 'from-white to-neutral-200' : 'from-black to-neutral-900' } rounded-full m-10">
	    <img class="object-cover rounded-full border-3 border-yellow-300" src="{artist.image || '/uploads/albumcovers/happysunofyah.jpg'}" alt="Profile Picture of {artist.stage_name}"/>
    </figure>

	<div class="m-10">
		<h2 class="title uppercase {$player.track?.theme == 'light' ? 'text-red-500' : 'text-yellow-300'} portrait:text-3xl landscape:xs:text-sm landscape:sm:text-md landscape:md:text-lg landscape:lg:text-xl landscape:xl:text-2xl text-shadow">
			{@html artist.stage_name}
		</h2>

		<h3 class="subtitle uppercase portrait:text-xl landscape:xs:text-sm landscape:sm:text-md landscape:md:text-lg landscape:lg:text-xl landscape:xl:text-2xl">
            {#if artist.name != 'unknown' }Born as: {artist.name}{/if}
		</h3>
	</div>
</article> -->
