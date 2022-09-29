import { browser } from '$app/environment'
import { parse } from 'node-html-parser'

// we require some server-side APIs to parse all metadata
if (browser) {
  throw new Error(`media can only be imported server-side`)
}

// Get all media and add metadata
export const media = Object.entries(import.meta.glob('/src/md/media/**/*.md', { eager: true }))
  .map(([filepath, medium]) => {
    const html = parse(medium.default.render().html)
    const lyrics = medium.metadata.lyrics ? parse(medium.metadata.lyrics) : html.querySelector('p')

    return {
      ...medium.metadata,

      // generate the slug from the file path
      slug: filepath
        .replace(/(\/index)?\.md/, '')
        .split('/')
        .pop(),

      // whether or not this file is `my-medium.md` or `my-medium/index.md`
      // (needed to do correct dynamic import in media/[slug].svelte)
      isIndexFile: filepath.endsWith('/index.md'),

      // format date as yyyy-MM-dd
      date: medium.metadata.date
        ? format(
            // offset by timezone so that the date is correct
            addTimezoneOffset(new Date(medium.metadata.date)),
            'yyyy-MM-dd'
          )
        : undefined,

        // TODO: Find out what this does and why?
      preview: {
        html: lyrics?.toString() || "",
        // text-only preview (i.e no html elements), used for SEO
        text: lyrics?.structuredText ?? lyrics?.toString()
      },
    }
  })
  // sort by date
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  // add references to the next/previous medium
  .map((medium, index, allMedia) => ({
    ...medium,
    next: allMedia[index - 1],
    previous: allMedia[index + 1]
  }))


function addTimezoneOffset(date) {
  const offsetInMilliseconds = new Date().getTimezoneOffset() * 60 * 1000
  return new Date(new Date(date).getTime() + offsetInMilliseconds)
}