// src/routes/artists/[title]/+page.js
export async function load({ params }){
  const artist = await import(`./../../../lib/md-collections/artists/${params.title}.md`)
  // const { title, date } = artist.metadata
  const content = artist.default

  return {
    ...artist.metadata,
    content,
  }
}