// src/routes/api/genres/+server.js
import { fetchGenresMD } from '$lib/md-collections/fetchGenres'
import { json } from '@sveltejs/kit'

export const prerender = true

export const GET = async () => {
  const allGenres = await fetchGenresMD

  // const sortedPosts = allPosts.sort((a, b) => {
    // return new Date(b.meta.date) - new Date(a.meta.date)
  // })

  return json(allGenres)
}