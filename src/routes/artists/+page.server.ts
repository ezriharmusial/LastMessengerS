import { fetchArtistsMD } from '$lib/md-collections/fetchArtists'

/** @type {import('./$types').PageServerLoad} */
export async function load() {
  return {
    // eslint-disable-next-line no-unused-vars
    // recentArtists: artists.slice(0, 2)
    artists: fetchArtistsMD
  }
}