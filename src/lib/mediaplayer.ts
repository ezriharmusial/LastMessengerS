import { goto } from "$app/navigation";
import { browser } from "$app/environment";
import { writable, derived, type Writable, get } from "svelte/store";
import { media, artists, type Media } from "./stores/data";
import { Howl, Howler} from 'howler';


// if ('mediaSession' in navigator) {
// navigator.mediaSession.metadata = new MediaMetadata();
// }

interface MediaPlayer {
    autoplay: Boolean
    duration: string
    currentTime: string
    progress: number
    volume: number
    context?: AudioContext | undefined
    analyser?: AnalyserNode | undefined
    state: string
    playing: Boolean
    loop: string
    shuffle: Boolean
    playlist: Media[]
    index: number
    source?: MediaElementAudioSourceNode | undefined
    bufferLength?: any
    dataArray?: Uint8Array | undefined
    data: any
    track: Media | boolean
    play: Function
    pause: Function
    skip: Function
    skipTo: Function
    next: Media | boolean
    previous: Media | boolean
    seek: Function
    step: Function
    setVolume: Function
    toggleLoop: Function
    toggleShuffle: Function
}

const loopStates = ['no-repeat', 'repeat', 'repeat-track']

let duration:number
let currentTime:number

export const player:Writable<MediaPlayer> = writable({
    autoplay: true,
    duration: "0:00",
    currentTime: "0:00",
    progress: 0,
    volume: 100,
    state: "unMounted",
    playing: false,
    track: false,
    next: false,
    previous: false,
    loop: "no-repeat",
    shuffle: false,
    data: undefined,
    playlist: [... get(media).media],
    index: 0,
    /**
    * Play a song in the playlist.
    * @param  {Number} index Index of the song in the playlist (leave empty to play the first or current).
    */
    play: function(index: number) {

        let self = this;
        let sound:Media;

        index = typeof index === 'number' ? index : self.index;
        let data = self.playlist[index];

        if (!browser || !data)
            return
        // If we already loaded this track, use the current one.
        // Otherwise, setup and load a new Howl.
        if (data?.howl) {
            sound = data.howl;
        } else {
            sound = data.howl = new Howl({
                src: [data.media_file],
                html5: true, // Force to HTML5 so that the audio can stream in (best for large files).
                onplay: function() {
                    // Display the duration.
                    self.duration = getDigits(Math.round(sound.duration()));

                    // Start updating the progress of the track.
                    requestAnimationFrame(self.step.bind(self));

                    // Start the animation here, if we have already loaded
                    // animation.start();
                    self.playing = true;
                },
                onload: function() {
                    // Start the animation.
                    // animation.start();
                    self.state = 'loaded'
                },
                onend: function() {
                    // Stop the animation.
                    // animation.start();
                    self.skip('next');
                },
                onpause: function() {
                    // Stop the animation.
                    // animation.stop();
                },
                onstop: function() {
                    // Stop the animation.
                    // animation.stop();
                },
                onseek: function() {
                    // Start updating the progress of the track.
                    requestAnimationFrame(self.step.bind(self));
                }
            });
        }

        // Begin playing the sound.
        sound.play();

        // Update the track display.
        // track.innerHTML = (index + 1) + '. ' + data.title;

        // Show the pause button.
        if (sound.state() === 'loaded') {
            self.state = "playing"
        } else {
            self.state = 'loading'
        }

        // Keep track of the index we are currently playing.
        self.index = index;

        self.track = self.playlist[self.index] || false
        self.next = self.playlist[self.index + 1] || false
        self.previous = self.playlist[self.index - 1] || false
        // navigate to track page
        if (browser)
        goto('/albums/unity-album/' + self.track?.slug)
    },

    /**
    * Pause the currently playing track.
    */
    pause: function() {
        let self = this;

        // Get the Howl we want to manipulate.
        let sound = self.playlist[self.index].howl;

        // Puase the sound.
        sound.pause();

        // Show the play button.
        self.playing = false
    },

    /**
    * Skip to the next or previous track.
    * @param  {String} direction 'next' or 'prev'.
    */
    skip: function(direction: "next" | "previous") {
        let self = this;

        // Get the next track based on the direction of the track.
        let index = 0;
        if (direction === 'previous') {
            index = self.index - 1;
            if (index < 0) {
                index = self.playlist.length - 1;
            }
        } else {
            index = self.index + 1;
            if (index >= self.playlist.length) {
                index = 0;
            }
        }

        self.skipTo(index);
    },

    /**
    * Skip to a specific track based on its playlist index.
    * @param  {Number} index Index in the playlist.
    */
    skipTo: function(index: number) {
        let self = this;

        // Stop the current track.
        if (self.playlist[self.index]?.howl) {
            self.playlist[self.index].howl.stop();
        }

        // Reset progress.
        // progress.style.width = '0%';
        self.progress = 0

        // Play the new track.
        self.play(index);
    },

    /**
    * Set the volume and update the volume slider display.
    * @param  {Number} val Volume between 0 and 1.
    */
    setVolume: function(val: number) {
        let self = this;

        // Update the global volume (affecting all Howls).
        Howler.volume(val);

        // Update the display on the slider.
        let barWidth = (val * 90) / 100;
        self.volume = (barWidth * 100);
        //? sliderBtn.style.left = (window.innerWidth * barWidth + window.innerWidth * 0.05 - 25) + 'px';
    },

    /**
    * Seek to a new position in the currently playing track.
    * @param  {Number} per Percentage through the song to skip.
    */
    seek: function(per: number) {
        let self = this;

        // Get the Howl we want to manipulate.
        let sound = self.playlist[self.index].howl;

        // Convert the percent into a seek position.
        if (sound.playing()) {
            sound.seek(sound.duration() * per);
        }
    },

    /**
    * The step called within requestAnimationFrame to update the playback position.
    */
    step: function() {
        let self = this;

        // Get the Howl we want to manipulate.
        let sound = self.playlist[self.index].howl;

        // Determine our current seek position.
        let seek = sound.seek() || 0;
        self.currentTime = getDigits(Math.round(seek));
        self.progress = (((seek / sound.duration()) * 100) || 0);

        // If the sound is still playing, continue stepping.
        if (sound.playing()) {
            requestAnimationFrame(self.step.bind(self));
        }
    },

    /**
    * Togle Loop states
    */
    toggleShuffle: function() {
        let self = this;
        // add 1 to index, then calculate the modulo based on total amount of loop states
        self.shuffle = !self.shuffle
    },

    /**
    * Togle Loop states
    */
    toggleLoop: function() {
        let self = this;

        // get current Index
        let index = loopStates.indexOf(self.loop)

        // add 1 to index, then calculate the modulo based on total amount of loop states
        self.loop = loopStates[(index + 1 % loopStates.length)] || loopStates[0]
    },

    /**
    * Toggle the volume display on/off.
    */
    //   toggleVolume: function() {
    //     let self = this;
    //     let display = (volume.style.display === 'block') ? 'none' : 'block';

    //     setTimeout(function() {
    //       volume.style.display = display;
    //     }, (display === 'block') ? 0 : 500);
    //     volume.className = (display === 'block') ? 'fadein' : 'fadeout';
    //   },

})

/**
* Player class containing the state of our playlist and where we are in it.
* Includes all methods for playing, skipping, updating the display, etc.
* @param {Array} playlist Array of objects with playlist song details ({title, file, howl}).
*/

function getArtwork(track:Media){
    const $artists = get(artists)
    const artwork = [
        { src: 'https://dummyimage.com/96x96',   sizes: '96x96',   type: 'image/png' },
        { src: 'https://dummyimage.com/128x128', sizes: '128x128', type: 'image/png' },
        { src: 'https://dummyimage.com/192x192', sizes: '192x192', type: 'image/png' },
        { src: 'https://dummyimage.com/256x256', sizes: '256x256', type: 'image/png' },
        { src: 'https://dummyimage.com/384x384', sizes: '384x384', type: 'image/png' },
        { src: 'https://dummyimage.com/512x512', sizes: '512x512', type: 'image/png' },
    ]

    // TODO: Automate
    // Get Artist image url
    // let artistImage = $artists.find(artist => artist.stage_name == track.track_artist).image
    // Transform image to
    // do iets met (artistImage)
    // Get Meta Data
    // artwork = getImageMeta(file)

    return artwork
}

export const MediaMetaData = derived([ media, artists], ([ $media, $artists ]) => {
    let MediaMetaData:MediaMetadata[] = []

    $media.media.forEach(track => {
        MediaMetaData = [...MediaMetaData, new MediaMetadata({
            title: track.title + (track.featured_track_artist ? ' ft. ' + track.featured_track_artist.join(', ') : '') || "Unknown Track",
            artist: track.track_artist || "Unknown Artist",
            album: track.release_album || "Unknown Album",
            artwork: getArtwork(track)
        })]
    })

    return MediaMetaData
})

// Get Time Digits
function getDigits(times:number) {
    if (!times)
    return "0:00"

    const time = Math.round(duration - currentTime);
    let minutes = Math.floor(time / 60);
    let seconds = time - 60 * minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    if (isNaN(minutes) && isNaN(seconds))
    return "0:00"
    else
    return minutes + ':' + seconds;
}

async function setAudio() {
    const $player = get(player)
    console.log('setAUdio Called')
    // If there is no COntext, set context first
    if (!$player.context) {
        try {
            // Create COntext
            $player.context = new AudioContext()
            // Create Analyser
            $player.analyser = $player.context.createAnalyser()
            // Set FFT
            $player.analyser.fftSize = 512;
        } catch(e) {
            throw new Error('The Web Audio API is unavailable');
        }
    }

    // If the Player is mounted
    if ($player?.wavesurfer) {
        // Create Media Element Source
        $player.source = $player.context.createMediaElementSource($player?.wavesurfer);
        // Connect Media Element Source to the Analyser
        $player.source?.connect($player.analyser);
        // Connect the analyser to the context destination
        $player.analyser.connect($player.context.destination);
        // console.log('$player.context', $player.context)
        // console.log('$player.analyser', $player.analyser)
        $player.bufferLength = $player.analyser.frequencyBinCount
        $player.dataArray = new Uint8Array($player.bufferLength);
        $player?.wavesurfer.play()
    }

}
