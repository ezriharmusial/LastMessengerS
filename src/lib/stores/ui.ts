import { writable } from "svelte/store";

export const UI = writable(
    {
        isOverlayed: false
    }
)