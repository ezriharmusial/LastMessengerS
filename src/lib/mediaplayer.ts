import { goto } from "$app/navigation";
import { browser } from "$app/environment";
import { writable, derived, type Writable, get } from "svelte/store";
import { media, artists, type Media } from "./stores/data";
import { Howl, Howler} from 'howler';


// if ('mediaSession' in navigator) {
// navigator.mediaSession.metadata = new MediaMetadata();
// }

interface MediaPlayer {
	[x: string]: any;
    autoplay: Boolean
    duration: string
    currentTime: string
    seeking: Boolean
    progress: number
    progressProposition: number
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
    next: Media | boolean
    previous: Media | boolean
}

const loopStates = ['no-repeat', 'repeat', 'repeat-track']

let duration:number
let currentTime:number

export const player:Writable<MediaPlayer> = writable({
    autoplay: true,
    duration: "0:00",
    currentTime: "0:00",
    seeking: false,
    progress: 0,
    progressProposition: 0,
    volume: 100,
    state: "unMounted",
    playing: false,
    loop: "no-repeat",
    shuffle: false,
    data: undefined,
    playlist: [... get(media).media],
    index: 0,
    track: this?.playlist[this?.index] || false,
    next: this?.playlist[this?.index + 1] || false,
    previous: this?.playlist[this?.index - 1] || false,
})

    /**
    * Play a song in the playlist.
    * @param  {Number} index Index of the song in the playlist (leave empty to play the first or current).
    */
    export const play = function(index: number) {
        let $player = get(player)
        let sound:Media;

        index = typeof index === 'number' ? index : $player.index;
        let data = $player.playlist[index];

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
                    $player.duration = getDigits(Math.round(sound.duration()));

                    // Start updating the progress of the track.
                    requestAnimationFrame(step.bind(self));

                    // Start the animation here, if we have already loaded
                    // animation.start();
                    $player.playing = true;
                },
                onload: function() {
                    // Start the animation.
                    // animation.start();
                    $player.state = 'loaded'
                },
                onend: function() {
                    // Stop the animation.
                    // animation.start();
                    skip('next');
                    $player.playing = false
                },
                onpause: function() {
                    // Stop the animation.
                    // animation.stop();
                    $player.playing = false
                },
                onstop: function() {
                    // Stop the animation.
                    // animation.stop();
                    $player.playing = false
                },
                onseek: function() {
                    // Start updating the progress of the track.
                    requestAnimationFrame(step.bind(self));
                }
            });
        }

        // Begin playing the sound.
        sound.play();


        // Update the track display.
        // track.innerHTML = (index + 1) + '. ' + data.title;

        // Show the pause button.
        if (sound.state() === 'loaded') {
            $player.state = "loaded"
        } else {
            $player.state = 'loading'
        }

        // Keep track of the index we are currently playing.
        $player.index = index;

        $player.track = $player.playlist[index] || false
        $player.next = $player.playlist[index + 1] || false
        $player.previous = $player.playlist[index - 1] || false

        player.set($player)

        // Set Media Metadata
        setMediaMetaData()

        if (browser)
        // navigate to track page
        goto('/albums/unity-album/' + $player.track?.slug)
    }

    /**
    * Pause the currently playing track.
    */
    export const pause = function() {
        let $player = get(player)

        // Get the Howl we want to manipulate.
        let sound = $player.playlist[$player.index].howl;

        // Puase the sound.
        sound.pause();

        // Show the play button.
        $player.playing = false
    }

    /**
    * Skip to the next or previous track.
    * @param  {String} direction 'next' or 'previous'.
    */
    export const skip = function(direction: "next" | "previous") {
        // Get Writable
        let $player = get(player)

        // Get the next track based on the direction of the track.
        let index = 0;
        if (direction === 'previous') {
            index = $player.index - 1;
            if (index < 0) {
                index = $player.playlist.length - 1;
            }
        } else {
            index = $player.index + 1;
            if (index >= $player.playlist.length) {
                index = 0;
            }
        }

        // Set Writable
        player.set($player)
        skipTo(index);
    }

    /**
    * Skip to a specific track based on its playlist index.
    * @param  {Number} index Index in the playlist.
    */
    export const skipTo = function(index: number) {
        // Get Writable
        let $player = get(player)

        // Stop the current track.
        if ($player.playlist[$player.index]?.howl) {
            $player.playlist[$player.index].howl.stop();
        }

        // Reset progress.
        // progress.style.width = '0%';
        $player.progress = 0

        // Play the new track.
        play(index);
    }

    /**
    * Set the volume and update the volume slider display.
    * @param  {Number} val Volume between 0 and 1.
    */
    export const setVolume = function(val: number) {
        // Get Writable
        let $player = get(player)

        // Update the global volume (affecting all Howls).
        Howler.volume(val);

        // Update the display on the slider.
        let barWidth = (val * 90) / 100;
        $player.volume = (barWidth * 100);
        //? sliderBtn.style.left = (window.innerWidth * barWidth + window.innerWidth * 0.05 - 25) + 'px';
    }

    /**
    * Seek to a new position in the currently playing track.
    * @param  {Number} per Percentage through the song to skip.
    */
    export const seek = function(per: number) {
        // Get Writable
        let $player = get(player)


        // Get the Howl we want to manipulate
        if (!$player.playlist[$player.index].howl)
            play($player.index)

        // Get the Howl we want to manipulate
        let sound = $player.playlist[$player.index].howl ;

        // Convert the percent into a seek position.
        if (sound) {
            sound.seek(sound.duration() * per / 100);
            // Update Writable
        }

        player.set($player)
    }

    /**
    * The step called within requestAnimationFrame to update the playback position.
    */
    export const step = function() {
        // Get Writable
        let $player = get(player)

        // Get the Howl we want to manipulate.
        let sound = $player.playlist[$player.index].howl;

        // Determine our current seek position.
        let seek = sound?.seek() || 0;
        $player.currentTime = getDigits(Math.round(seek));
        $player.progress = (((seek / sound.duration()) * 100) || 0);

        // Update Mediasession
        if ('mediaSession' in navigator){
            navigator.mediaSession.setPositionState({
                duration: sound.duration(),
                playbackRate: sound.rate(),
                position: sound.seek() || 13,
            })
        }

        // If the sound is still playing, continue stepping.
        if (sound.playing()) {
            requestAnimationFrame(step.bind(self));
        }

        // Update Writable
        player.set($player)
    }

    /**
    * Togle Loop states
    */
    export const toggleShuffle = function() {
        // Get Writable
        let $player = get(player)

        // add 1 to index, then calculate the modulo based on total amount of loop states
        $player.shuffle = !$player.shuffle

        // Update Writable
        player.set($player)
    }

    /**
    * Togle Loop states
    */
    export const toggleLoop = function() {
        // Get Writable
        let $player = get(player)

        // get current Index
        let index = loopStates.indexOf($player.loop)

        // add 1 to index, then calculate the modulo based on total amount of loop states
        $player.loop = loopStates[(index + 1 % loopStates.length)] || loopStates[0]

        // Update Writable
        player.set($player)
    }

    /**
    * Toggle the volume display on/off.
    */
    //   toggleVolume: function() {
    //     let $player = get(player)
    //     let display = (volume.style.display === 'block') ? 'none' : 'block';

    //     setTimeout(function() {
    //       volume.style.display = display;
    //     }, (display === 'block') ? 0 : 500);
    //     volume.className = (display === 'block') ? 'fadein' : 'fadeout';
    //   },

    // Get Time Digits
    export const getDigits = function(times:number) {
        // Get Writable
        const $player = get(player)
        const sound = $player.playlist[$player.index].howl

        // there is no sound, bail
        if (!sound)
            return "0:00"

        const time = times || Math.round(sound.duration - sound.currentTime);
        let minutes = Math.floor(time / 60);
        let seconds = Math.floor(time - 60 * minutes);
        seconds = seconds < 10 ? '0' + seconds : seconds;

        if (isNaN(minutes) && isNaN(seconds))
        return "0:00"
        else
        return minutes + ':' + seconds;
    }


/**
* Player class containing the state of our playlist and where we are in it.
* Includes all methods for playing, skipping, updating the display, etc.
* @param {Array} playlist Array of objects with playlist song details ({title, file, howl}).
*/

function getArtwork(){
    // const $artists = get(artists)
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

export const setMediaMetaData = () => {
    const $media = get(media)
    const $player = get(player)

    let MediaMetaData:MediaMetadata

    if ('mediaSession' in navigator){
        MediaMetaData = new MediaMetadata({
            title: $player.track.title + ($player.track.featured_track_artist ? ' ft. ' + $player.track.featured_track_artist.join(', ') : '') || "Unknown Track",
            artist: $player.track.track_artist || "Unknown Artist",
            album: $player.track.release_album || "Unknown Album",
            artwork: getArtwork()
        })

        const actionHandlers = [
            ['play',          () => { play($player.index) }],
            ['pause',         () => { pause() }],
            ['previoustrack', () => { skip('previous') }],
            ['nexttrack',     () => { skip('next') }],
            ['stop',          () => { stop() } ],
            ['seekbackward',  (details) => { seek($player.progress - 5) }],
            ['seekforward',   (details) => { seek($player.progress + 5) }],
            ['seekto',        (details) => { seek(details.seekOffset) }],
        ]

        navigator.mediaSession.setPositionState({
            duration: $player.track.howl.duration(),
            playbackRate: $player.track.howl.rate(),
            position: $player.track.howl.seek() || 0,
        })

        for (const [action, handler] of actionHandlers) {
            try {
              navigator.mediaSession.setActionHandler(action, handler);
            } catch (error) {
              console.log(`The media session action "${action}" is not supported yet.`);
            }
        }

        return MediaMetaData[$player.index]
    }
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
        // $player?.wavesurfer.play()
    }

    // Update Writable
    player.set($player)
}
