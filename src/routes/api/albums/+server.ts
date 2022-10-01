// src/routes/api/posts/+server.js
import { fetchAlbumsMD } from '$lib/md-collections/albums'
import { json } from '@sveltejs/kit'

export const GET = async () => {
  const allPosts = await fetchMarkdownPosts()

  const sortedPosts = allPosts.sort((a, b) => {
    return new Date(b.meta.date) - new Date(a.meta.date)
  })

  return json(sortedPosts)
}