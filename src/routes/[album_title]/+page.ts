// src/routes/[album_title]/[track_title]/+page.js
export async function load({ params }){
  const album = await import(`./../../lib/md-collections/albums/${params.album_title}.md`)
  // const { title, date } = album.metadata
  const content = album.default

  return {
    ...album.metadata,
    content,
  }
}