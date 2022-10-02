import { writable, type Writable } from "svelte/store";

export const audio:Writable<HTMLAudioElement> = writable()

export const players = writable(new Set())

// Skip to next track
export function nextTrack() {

}

// Skip back to precious track
export function previousTrack() {

}

// Start
// Stop
// Pause