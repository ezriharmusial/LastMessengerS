import { browser } from '$app/environment'
import { parse } from 'node-html-parser'

// we require some server-side APIs to parse all metadata
if (browser) {
  throw new Error(`genres can only be imported server-side`)
}

// Get all genres and add metadata
export const fetchGenresMD = Object.entries(import.meta.glob('/src/lib/md-collections/genres/**/*.md', { eager: true }))
  .map(([filepath, genre]) => {
    const html = parse(genre.default.render().html)
    const description = genre.metadata.description ? parse(genre.metadata.description) : html.querySelector('p')

    return {
      ...genre.metadata,

      // generate the slug from the file path
      slug: filepath
        .replace(/(\/index)?\.md/, '')
        .split('/')
        .pop(),

      // whether or not this file is `my-genre.md` or `my-genre/index.md`
      // (needed to do correct dynamic import in genres/[slug].svelte)
      isIndexFile: filepath.endsWith('/index.md'),

      // format date as yyyy-MM-dd
      date: genre.metadata.date
        ? format(
            // offset by timezone so that the date is correct
            addTimezoneOffset(new Date(genre.metadata.date)),
            'yyyy-MM-dd'
          )
        : undefined,

        // TODO: Find out what this does and why?
      preview: {
        html: description?.toString() || "",
        // text-only preview (i.e no html elements), used for SEO
        text: description?.structuredText ?? description?.toString()
      },
    }
  })
  // sort by date
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  // add references to the next/previous genre
  .map((genre, index, allGenres) => ({
    ...genre,
    next: allGenres[index - 1],
    previous: allGenres[index + 1]
  }))


function addTimezoneOffset(date) {
  const offsetInMilliseconds = new Date().getTimezoneOffset() * 60 * 1000
  return new Date(new Date(date).getTime() + offsetInMilliseconds)
}