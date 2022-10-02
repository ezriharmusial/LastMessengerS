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
    nav_label: String
    media_file: String
    title:  String
    track_artist: Artist
    featured_track_artist: String[]
    genres: String[]
    isIndexFile: Boolean
    preview: { html: String, text: String }
    producer: String
    release_year: Date
    quote: String
    slug: String
    next: Media
    previous: Media
    excerpt: String
}

interface Genre {
    title:  String
    description:  String
}

export const artists:Writable<Media[]> = writable([])
export const media = writable([])
export const albums = writable([])