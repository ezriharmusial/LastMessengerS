import { writable, type Writable, get } from "svelte/store";

export const player:Writable<HTMLAudioElement> = writable()
export const playerState = writable({
    data: "unMounted",
    state: "unMounted"
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
    const $playerState = get(playerState)
    $playerState.data = "progress"
    playerState.set($playerState)
}

// Track can be Played
export const canPlay = () => {
    const $playerState = get(playerState)
    $playerState.state = "ready"
    playerState.set($playerState)
}

// Track is Playing
export const playing = () => {
    const $playerState = get(playerState)
    $playerState.state = "playing"
    playerState.set($playerState)
}

// Track is Playing
export const pause = () => {
    const $playerState = get(playerState)
    $playerState.state = "paused"
    playerState.set($playerState)
}

// Track Stalled
export const stalled = () => {
    const $playerState = get(playerState)
    $playerState.data = "stalled"
    playerState.set($playerState)
}

// Track Seeked
export const seeked = () => {
    const $playerState = get(playerState)
    $playerState.data = "seeked"
    playerState.set($playerState)
}

// Track Seelomg
export const seeking = () => {
    const $playerState = get(playerState)
    $playerState.data = "seeking"
    playerState.set($playerState)
}

// Track Ended
export const ended = () => {
    const $playerState = get(playerState)
    $playerState.state = "ended"
    playerState.set($playerState)
}

// Track Emptied
export const emptied = () => {
    const $playerState = get(playerState)
    $playerState.data = "emptied"
    playerState.set($playerState)
}
