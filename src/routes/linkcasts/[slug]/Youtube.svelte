<script>
	import { YouTubeGetID } from "./Youtube";


  export let post;

  // $: youtubeID = console.log('Youtube post:', post)
</script>

<style>
.video-container {
  position: relative;
  padding-bottom: 56.25%; /*16:9*/
  padding-top: 30px;
  height: 0;
  overflow: hidden;
}

.video-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>

{#if post}
    <div class="video-container">
      <iframe title="Youtube Player" id="ytplayer" type="text/html" width="100%" height="100%" src="{'https://www.youtube.com/embed/' + YouTubeGetID( post.content.oembed_url)}?enablejsapi=1&autoplay=1&controls=0&fs=0&iv_load_policy=3&modestbranding=1&rel=0&playsinline=1&showinfo=0&origin=http://localhost:5173/" frameborder="0"></iframe>
    </div>
{/if}