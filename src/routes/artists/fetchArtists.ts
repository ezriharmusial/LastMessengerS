import { browser } from '$app/environment'
import { parse } from 'node-html-parser'

// we require some server-side APIs to parse all metadata
if (browser) {
  throw new Error(`artists can only be imported server-side`)
}

// Get all artists and add metadata
export const fetchArtistsMD = Object.entries(import.meta.glob('./**/*.md', { eager: true }))
  .map(([filepath, artist]) => {
    const html = parse(artist.default.render().html)
    let title = artist.metadata.title
   	let re = / /gi
    return {
      ...artist.metadata,

      // generate the slug from the file path
      slug: filepath
        .replace(/(\/\+page)?\.md/, '' )
        .split('/')
        .pop(),

      // whether or not this file is `my-artist.md` or `my-artist/index.md`
      // (needed to do correct dynamic import in artists/[slug].svelte)
      isIndexFile: filepath.endsWith('/index.md'),
    }
  })
  // sort by date
  // .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  // add references to the next/previous artist
  .map((artist) => ({
    ...artist
  }))


// function addTimezoneOffset(date) {
//   const offsetInMilliseconds = new Date().getTimezoneOffset() * 60 * 1000
//   return new Date(new Date(date).getTime() + offsetInMilliseconds)
// }