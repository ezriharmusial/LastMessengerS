import { get, writable, type Writable } from "svelte/store";

export interface Artist {
    nav_label: string
    image: string
    stage_name: string
    name: string
    genres: string[]

}

export interface Album {

}

export interface Media {
    excerpt: string
    featured_track_artist: string[]
    genres: string[]
    isIndexFile: boolean
    image: string
    nav_label: string
    next: Media | undefined
    previous: Media | undefined
    preview: { html: string, text: string }
    producer: string
    quote: string
    release_year: Date
    release_album: string
    slug: string
    title: string
    track_artist: string
    track_number: number
}

export interface MediaCollection {
    media: Media[],
    selected: Media | undefined
}

export interface Genre {
    title: string
    description: string
}

export const artists:Writable<Artist[]> = writable([])
export const media:Writable<MediaCollection> = writable({media: [], selected: undefined})
export const albums = writable([])

export function getArtistImage(artistName:string) {
    const $artists = get(artists)
    return $artists?.find(artist => artist.stage_name == artistName)?.image
}