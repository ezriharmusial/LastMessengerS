// src/routes/api/+server.js
import { fetchMediaMD } from '../../../unity-album-2022/fetchMedia'
import { json } from '@sveltejs/kit'

export const prerender = true

export const GET = async () => {
  const allMedia = await fetchMediaMD

  // const sortedPosts = allPosts.sort((a, b) => {
    // return new Date(b.meta.date) - new Date(a.meta.date)
  // })

  return json(allMedia)
}