import { browser } from '$app/environment'
import { parse } from 'node-html-parser'

// we require some server-side APIs to parse all metadata
if (browser) {
  throw new Error(`artists can only be imported server-side`)
}

// Get all artists and add metadata
export const fetchArtistsMD = Object.entries(import.meta.glob('/src/lib/md-collections/artists/**/*.md', { eager: true }))
  .map(([filepath, artist]) => {
    const html = parse(artist.default.render().html)
    const stage_name = artist.metadata.stage_name ? parse(artist.metadata.stage_name) : html.querySelector('p')

    return {
      ...artist.metadata,

      // generate the slug from the file path
      slug: filepath
        .replace(/(\/index)?\.md/, '')
        .split('/')
        .pop(),

      // whether or not this file is `my-artist.md` or `my-artist/index.md`
      // (needed to do correct dynamic import in artists/[slug].svelte)
      isIndexFile: filepath.endsWith('/index.md'),

      // format date as yyyy-MM-dd
      date: artist.metadata.date
        ? format(
            // offset by timezone so that the date is correct
            addTimezoneOffset(new Date(artist.metadata.date)),
            'yyyy-MM-dd'
          )
        : undefined,

        // TODO: Find out what this does and why?
      preview: {
        html: stage_name.toString(),
        // text-only preview (i.e no html elements), used for SEO
        text: stage_name.structuredText ?? stage_name.toString()
      },
    }
  })
  // sort by date
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  // add references to the next/previous artist
  .map((artist, index, allArtists) => ({
    ...artist,
    next: allArtists[index - 1],
    previous: allArtists[index + 1]
  }))


function addTimezoneOffset(date) {
  const offsetInMilliseconds = new Date().getTimezoneOffset() * 60 * 1000
  return new Date(new Date(date).getTime() + offsetInMilliseconds)
}