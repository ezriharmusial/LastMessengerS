// src/routes/api/albums/+server.js
import { fetchMediaMD } from '$lib/md-collections/fetchMedia'
import { json } from '@sveltejs/kit'

export const GET = async () => {
  const allMedia = await fetchMediaMD

  // const sortedPosts = allPosts.sort((a, b) => {
    // return new Date(b.meta.date) - new Date(a.meta.date)
  // })

  return json(allMedia)
}