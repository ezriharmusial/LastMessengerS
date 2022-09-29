import { writable, type Writable } from "svelte/store";

export const audio:Writable<HTMLAudioElement> = writable()

export const players = writable(new Set())