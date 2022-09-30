// src/routes/albums/[album_title]/[track_title]/+page.js
export async function load({ params }){
  const track = await import(`../../../../md/media/${params.track_title}.md`)
  // const { title, date } = track.metadata
  const content = track.default

  return {
    ...track.metadata,
    content,
  }
}