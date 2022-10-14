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
    state: string | undefined
    loop: string | undefined
    source?: MediaElementAudioSourceNode | undefined
    bufferLength?: any
    dataArray?: Uint8Array | undefined
    data: any
}
export const mediaPlayer:Writable<MediaPlayer> = writable({
    player: undefined,
    state: "unMounted",
    loop: "no-repeat",
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

export function nextTrack(){

}