// src/routes/artists/[stage_name]/+page.js
export async function load({ params }){
  const artist = await import(`../../../lib/md-collections/artists/${params.stage_name}.md`)
  // const { title, date } = artist.metadata
  const content = artist.default

  return {
    ...artist.metadata,
    content,
  }
}