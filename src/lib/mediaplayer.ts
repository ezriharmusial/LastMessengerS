import { writable, type Writable, get } from "svelte/store";


interface MediaPlayer {
    player: HTMLAudioElement
    context: AudioContext
    analyser: AnalyserNode
    state: string
    source: MediaElementAudioSourceNode
    bufferLength: any
    dataArray: Uint8Array
    data: any
}
export const mediaPlayer:Writable<MediaPlayer> = writable({
    player: undefined,
    state: undefined,
    data: undefined
})

export const players = writable(new Set())

// Skip to next track
export function nextTrack() {

}

// Skip back to precious track
export function previousTrack() {

}

// Track Progress
export const progress = () => {
    console.log('progress')
    const $mediaPlayer = get(mediaPlayer)
    $mediaPlayer.data = "progress"
    mediaPlayer.set($mediaPlayer)
}

// Track can be Played
export const canPlay = () => {
    console.log('canplay')
    const $mediaPlayer = get(mediaPlayer)
    $mediaPlayer.state = "ready"
    mediaPlayer.set($mediaPlayer)
}

// Track is Playing
export const playing = () => {
    console.log('playing')
    const $mediaPlayer = get(mediaPlayer)
    $mediaPlayer.state = "playing"
    mediaPlayer.set($mediaPlayer)
}

// Track is Playing
export const pause = () => {
    console.log('paused')
    const $mediaPlayer = get(mediaPlayer)
    $mediaPlayer.state = "paused"
    mediaPlayer.set($mediaPlayer)
}

// Track Stalled
export const stalled = () => {
    console.log('stalled')
    const $mediaPlayer = get(mediaPlayer)
    $mediaPlayer.data = "stalled"
    mediaPlayer.set($mediaPlayer)
}

// Track Seeked
export const seeked = () => {
    console.log('seeked')
    const $mediaPlayer = get(mediaPlayer)
    $mediaPlayer.data = "seeked"
    mediaPlayer.set($mediaPlayer)
}

// Track Seelomg
export const seeking = () => {
    console.log('progress')
    const $mediaPlayer = get(mediaPlayer)
    $mediaPlayer.data = "seeking"
    mediaPlayer.set($mediaPlayer)
}

// Track Ended
export const ended = () => {
    console.log('ended')
    const $mediaPlayer = get(mediaPlayer)
    $mediaPlayer.state = "ended"
    mediaPlayer.set($mediaPlayer)
}

// Track Emptied
export const emptied = () => {
    console.log('emptied')
    const $mediaPlayer = get(mediaPlayer)
    $mediaPlayer.data = "emptied"
    mediaPlayer.set($mediaPlayer)
}
