import { goto } from "$app/navigation";
import { writable, derived, type Writable, get } from "svelte/store";
import { getImageMeta } from "./imageMetaData";
import { media, artists, type Media } from "./stores/data";



// if ('mediaSession' in navigator) {
// navigator.mediaSession.metadata = new MediaMetadata();
// }

interface MediaPlayer {
    player: HTMLAudioElement | undefined
    context?: AudioContext | undefined
    analyser?: AnalyserNode | undefined
    state: string
    loop: string
    shuffle: boolean
    source?: MediaElementAudioSourceNode | undefined
    bufferLength?: any
    dataArray?: Uint8Array | undefined
    data: any
}

const loopStates = ['no-repeat', 'repeat', 'repeat-track']

export const mediaPlayer:Writable<MediaPlayer> = writable({
    player: undefined,
    state: "unMounted",
    loop: "no-repeat",
    shuffle: false,
    data: undefined,
})

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

// Togle Loop states
export function toggleLoop(){
    const $mediaPlayer = get(mediaPlayer)

    // get current Index
    let index = loopStates.indexOf($mediaPlayer.loop)

    // add 1 to index, then calculate the modulo based on total amount of loop states
    $mediaPlayer.loop = loopStates[(index + 1 % loopStates.length)] || loopStates[0]
    // console.log('loop', index, loopStates.length, (index + 1 % loopStates.length) - 1, $mediaPlayer.loop)
    mediaPlayer.set($mediaPlayer)
}


// Togle Loop states
export function toggleShuffle(){
    const $mediaPlayer = get(mediaPlayer)


    // add 1 to index, then calculate the modulo based on total amount of loop states
    $mediaPlayer.shuffle = !$mediaPlayer.shuffle
    mediaPlayer.set($mediaPlayer)
}

// Check if there is a next track to skip to.
export function hasPreviousTrack(){
    const $media = get(media)
    const $mediaPlayer = get(mediaPlayer)

    // Normaal als er een volgende is ga er voor
    if($media?.selected?.previous || $mediaPlayer.loop != 'no-repeat')
        return true
    else if($mediaPlayer.loop == 'no-repeat')
        return false
}
// go to previous track
export function previousTrack(){
    const $media = get(media)
    $media.selected = $media.media.find(track => track.title == $media.selected.previous.title);
    // Update Media Writable
    media.set($media)
    goto('/albums/unity-album/' + $media.selected.slug)
}

// Check if there is a next track to skip to.
export function hasNextTrack(){
    const $media= get(media)
    const $mediaPlayer = get(mediaPlayer)

    // Normaal als er een volgende is ga er voor
    if($media?.selected?.next || $mediaPlayer.loop != 'no-repeat')
        return true
    else if($mediaPlayer.loop == 'no-repeat')
        return false
}

export function playTrack(number:number) {
    const $media = get(media)
    $media.selected = $media.media.find(track => track.track_number == number)
    console.log('playtrack', number, $media)
    media.set($media)
}

// go to next track
export function nextTrack(){
    const $media = get(media)
    $media.selected = $media.media.find(track => track.title == $media.selected.next.title)
    // Update Media Writable
    media.set($media)
    goto('/albums/unity-album/' + $media.selected.slug)
}