import { media } from '$lib/media'

/** @type {import('./$types').PageServerLoad} */
export async function load() {
  return {
    // eslint-disable-next-line no-unused-vars
    // recentMedia: media.slice(0, 2)
    media: media
  }
}