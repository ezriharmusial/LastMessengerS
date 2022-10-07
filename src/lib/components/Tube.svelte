<script>
  import Poster from './Poster.svelte'
  // import { YouTubeVideo } from 'youtube-video-parser';

  export let post;
  // async function getYoutubeData (){
  //   const video_data = await YouTubeVideo.fetch(youtube_id);
  // }
const youtube_id = function YouTubeGetID(url){
  if (!url)
    return
  var ID = '';
  url = post.content.oembed_url.replace(/(>|<)/gi,'').split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);
  if(url[2] !== undefined) {
    ID = url[2].split(/[^0-9a-z_\-]/i);
    ID = ID[0];
  }
  else {
    ID = url;
  }
    return ID;
};
// const youtube_id = YouTubeVideo.getVideoId(post.content.oembed_url);
  const src = `https://www.youtube.com/embed/${youtube_id}?enablejsapi=1&autoplay=1&controls=0&fs=0&iv_load_policy=3&modestbranding=1&rel=0&playsinline=1&showinfo=0&origin=`


      // If browser is listed, Fallback on HTML only, Else Initiate JS
      // window.get_browser_info = function() {
      //   var ua=navigator.userAgent,tem,M=ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
      //   if(/trident/i.test(M[1])){
      //       tem=/\brv[ :]+(\d+)/g.exec(ua) || [];
      //       return {name:'IE ',version:(tem[1]||'')};
      //       }
      //   if(M[1]==='Chrome'){
      //       tem=ua.match(/\bOPR\/(\d+)/);
      //       if(tem!=null)   {return {name:'Opera', version:tem[1]};}
      //       }
      //   M=M[2]? [M[1], M[2]]: [navigator.appName, navigator.appVersion, '-?'];
      //   if((tem=ua.match(/version\/(\d+)/i))!=null) {M.splice(1,1,tem[1]);}
      //   return {
      //     name: M[0],
      //     version: M[1],
      //   };
      // };

      // var e,
      // b = window.get_browser_info(),
      // i = document.getElementById('tube-video'),
      // randomButton = document.getElementById('next-linkcast'),
      // t = document.getElementsByClassName('tube-thumb'),
      // y = document.getElementsByClassName('ytp-button');

      // // Format the Playtime
      // window.formatTime = function(t) {
      //     t = Math.round(t);
      //     var m = Math.floor(t / 60);
      //     var s = t - 60 * m;
      //     s = s < 10 ? '0' + s : s;
      //     return  m + ':' + s;
      // };

      // // Update Player ProgressBar
      // window.updateProgressBar = function() {
      //     var progress = e.getCurrentTime() / e.getDuration() * 100;
      //     document.getElementsByClassName('progress').val(progress);
      // };

      // // Update Timerdisplay
      // window.updateTimerDisplay = function() {
      //     var current_time = e.getCurrentTime();
      //     var duration = e.getDuration();
      //     var remainingtime = duration - current_time;
      //     document.getElementsByClassName('remain-time').text(window.formatTime(remainingtime));
      // };

      // // on Playtime
      // window.onPlayerInit = function(e) {
      //    //do something if mobile device detected
      //     if (b.name === 'Safari' && b.name !== 'chrome' && b.version <= 12){
      //       if (document.body.classList.contains('wp_is_mobile')) {
      //         // e.target.setVolume(100);
      //         e.target.playVideo();
      //       }
      //     } else {
      //       e.target.playVideo();
      //     }
      // };

      // window.onPlayerError = function() {
      //   window.location.href = randomButton.attr('href');
      // //   switch (e.data) {
      // //     case 2:
      // //       console.log('invalid id');
      // //       break;
      // //     case 100:
      // //       console.log('not found');
      // //       break;
      // //     case 101:
      // //       console.log('not allowed');
      // //       break;
      // //     case 150:
      // //       console.log('Unavailable');
      // //       break;
      // //     default:
      // //       console.log(e.data);
      // //       break;
      // //   }
      // };

      // // Youtube PlayerStates
      // window.onPlayerStateChange = function(e) {
      //   var state;
      //   switch (e.data) {
      //     case 0: // On Ended ShufflePlay
      //       state = 'ended';
      //       window.location.href = randomButton.attr('href');
      //       break;
      //     case 1: // On Playing: intervalfunction to update Timer & Progressbar
      //       state = 'playing';
      //       setInterval(function() {
      //         window.updateTimerDisplay();
      //         window.updateProgressBar();
      //       }, 500);
      //       setTimeout(window.titleFlipOutX, 10000);
      //       break;
      //     case 2:
      //       state = 'paused';
      //       window.titleFlipInX;
      //       break;
      //     case 3:
      //       state = 'buffering';
      //       break;
      //     case 5:
      //       state = 'video cued';
      //       break;
      //     default:
      //       state = 'unstarted';
      //   }

      //   document.body.classList.remove(' buffering-mode cued-mode ended-mode paused-mode playing-mode unstarted-mode').add(state + '-mode');
      // };

      // // If browser is listed, Fallback on HTML only, Else Initiate JS YouTubeApi
      // if (b.name === 'Safari' && b.name !== 'chrome' && b.version <= 8){
      //   //
      // } else {

        window.onYouTubeIframeAPIReady = function() {
          t.removeAttribute('href');
          y.hide();
          t.fadeOut(4000);
          e = new window.YT.Player('tube-video', {
            'width': '100%',
            'height': '100%',
            'videoId': i.data('embed'),
            'playerVars': {
                'enablejsapi': 1,
                'autoplay': 1,
                'controls': 0,
                'fs': 0,
                'iv_load_policy': 3,
                'modestbranding': 1,
                'playsinline': 1,
                'showinfo': 0,
                'origin': 'https://localhost:3000',
            },
            events: {
              'onReady': window.onPlayerInit,
              'onStateChange': window.onPlayerStateChange,
              'onError': window.onPlayerError,
            },
          });
        };
      // }
</script>

<style global lang="scss">
@import '../styles/components/_branding.scss';
@import '../styles/components/_tube.scss';
@import '../styles/components/_youtube.scss';
</style>

<section id="tube">
  <a class="brand" title="Let's Go Home!" href="https://butv.biafra.test">
    <span class="hidden">BiafranUnity.Tv</span>
  </a>
  <div class="image 16by9">
    <a class="tube-thumb" href={post.content.youtube_url} style="min-height: 56.52vw;">
      <Poster post="{post}"/>
    </a>
    <iframe
      id="tube-video"
      title="Now Playing:{post.title.rendered}"
      width="100%"
      height="100%"
      data-embed={youtube_id}
      src={src}
      frameborder="0"
      enablejsapi="1"
      allow="autoplay" />

      <div id="tube-video" data-embed="{youtube_id}"></div>
  </div>
  <progress class="progress bg-yellow-400" value="0" max="100" />
</section>
