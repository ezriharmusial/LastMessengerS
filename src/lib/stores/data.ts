import { writable, type Writable } from "svelte/store";

interface Artist {
    nav_label: String
    profile_picture: String
    stage_name: String
    name: String
    genres: String[]

}

interface Album {

}

interface Media {
    date: Date
    excerpt: String
    featured_track_artist: String[]
    genres: String[]
    isIndexFile: Boolean
    media_file: String
    next: Media
    preview: { html: String, text: String }
    previous: Media
    producer: String
    quote: String
    release_year: Date
    selected: Boolean
    slug: String
    title:  String
    track_artist: Artist
}

interface Genre {
    title:  String
    description:  String
}

export const artists:Writable<Media[]> = writable([])
export const media = writable([])
export const albums = writable([])