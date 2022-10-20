import { browser } from '$app/environment'
import { parse } from 'node-html-parser'

// we require some server-side APIs to parse all metadata
if (browser) {
  throw new Error(`albums can only be imported server-side`)
}

// Get all albums and add metadata
export const fetchAlbumsMD = Object.entries(import.meta.glob('/src/lib/md-collections/albums/**/*.md', { eager: true }))
  .map(([filepath, album]) => {
    const html = parse(album.default.render().html)
    const title = album.metadata.title ? parse(album.metadata.title) : html.querySelector('p')

    return {
      ...album.metadata,

      // generate the slug from the file path
      slug: filepath
        .replace(/(\/index)?\.md/, '')
        .split('/')
        .pop(),

      // whether or not this file is `my-album.md` or `my-album/index.md`
      // (needed to do correct dynamic import in albums/[slug].svelte)
      isIndexFile: filepath.endsWith('/index.md'),

      // format date as yyyy-MM-dd
      date: album.metadata.date
        ? //format(
            //offset by timezone so that the date is correct
            addTimezoneOffset(new Date(album.metadata.date)) //,
            // 'yyyy-MM-dd'
          // )
        : undefined,

        // TODO: Find out what this does and why?
      preview: {
        html: title.toString(),
        // text-only preview (i.e no html elements), used for SEO
        text: title.structuredText ?? title.toString()
      },
    }
  })
  // sort by date
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  // add references to the next/previous album
  .map((album, index, allalbums) => ({
    ...album,
    next: allalbums[index - 1],
    previous: allalbums[index + 1]
  }))


function addTimezoneOffset(date) {
  const offsetInMilliseconds = new Date().getTimezoneOffset() * 60 * 1000
  return new Date(new Date(date).getTime() + offsetInMilliseconds)
}