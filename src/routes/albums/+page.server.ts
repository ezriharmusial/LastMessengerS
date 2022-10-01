import { fetchAlbumsMD } from '$lib/md-collections/fetchAlbums'

/** @type {import('./$types').PageServerLoad} */
export async function load() {
  return {
    // eslint-disable-next-line no-unused-vars
    // recentArtists: artists.slice(0, 2)
    albums: fetchAlbumsMD
  }
}