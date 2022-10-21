// src/routes/albums/[album_title]/[track_title]/+page.js
export async function load({ params }){
  if (!params.track_title)
    return
  const track = await import(`./../../../../lib/md-collections/media/${params.track_title}.md`)
  // const { title, date } = track.metadata
  const content = track.default

  return {
    ...track.metadata,
    content,
  }
}