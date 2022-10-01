// src/routes/api/albums/+server.js
import { fetchAlbumsMD } from '$lib/md-collections/fetchAlbums'
import { json } from '@sveltejs/kit'

export const GET = async () => {
  const allAlbums = await fetchAlbumsMD

  // const sortedPosts = allPosts.sort((a, b) => {
    // return new Date(b.meta.date) - new Date(a.meta.date)
  // })

  return json(allAlbums)
}