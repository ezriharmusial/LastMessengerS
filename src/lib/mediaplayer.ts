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
    state: "unMounted",
    data: undefined
})

export const players = writable(new Set())

// Skip to next track
export function nextTrack() {

}

// Skip back to precious track
export function previousTrack() {

}