// src/routes/api/artists/+server.js
import { fetchArtistsMD } from 'src/routes/artists/fetchArtists'
import { json } from '@sveltejs/kit'

export const GET = async () => {
  const allArtists = await fetchArtistsMD

  // const sortedPosts = allPosts.sort((a, b) => {
    // return new Date(b.meta.date) - new Date(a.meta.date)
  // })

  return json(allArtists)
}