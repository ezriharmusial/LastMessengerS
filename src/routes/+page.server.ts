import { fetchMediaMD } from '$lib/md-collections/fetchMedia'

/** @type {import('./$types').PageServerLoad} */
export async function load() {
  console.log('+page.server.ts -> media', fetchMediaMD)
  return {
    // eslint-disable-next-line no-unused-vars
    // recentMedia: media.slice(0, 2)
    media: fetchMediaMD
  }
}