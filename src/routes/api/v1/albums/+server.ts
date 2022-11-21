// src/routes/api/+server.js
import { fetchAlbumsMD } from 'src/routes/unity-album-2022/fetchAlbums'
import { json } from '@sveltejs/kit'

export const GET = async () => {
  const allAlbums = await fetchAlbumsMD

  // const sortedPosts = allPosts.sort((a, b) => {
    // return new Date(b.meta.date) - new Date(a.meta.date)
  // })

  return json(allAlbums)
}