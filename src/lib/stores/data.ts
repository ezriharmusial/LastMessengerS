import { writable, type Writable } from "svelte/store";

export interface Artist {
    nav_label: String
    image: String
    stage_name: String
    name: String
    genres: String[]

}

export interface Album {

}

export interface Media {
    excerpt: String
    featured_track_artist: String[]
    genres: String[]
    isIndexFile: Boolean
    image: String
    nav_label: String
    next: Media | undefined
    previous: Media | undefined
    preview: { html: String, text: String }
    producer: String
    quote: String
    release_year: Date
    slug: String
    title:  String
    track_artist: Artist
    track_number: Number
}

export interface MediaCollection {
    media: Media[],
    selected: Media | undefined
}

export interface Genre {
    title:  String
    description:  String
}

export const artists:Writable<Media[]> = writable([])
export const media:Writable<MediaCollection> = writable({media: [], selected: undefined})
export const albums = writable([])