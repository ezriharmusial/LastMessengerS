import { browser } from '$app/environment'
import { getLinkcastType } from '$lib/embeds'
import { parse } from 'node-html-parser'

// we require some server-side APIs to parse all metadata
if (browser) {
	throw new Error(`linkcasts can only be imported server-side`)
}

// Get all linkcasts and add metadata
export const fetchLinkcastsMD = Object.entries(import.meta.glob('./**/*.md', { eager: true }))
.map(([filepath, linkcast]) => {
	const html = parse(linkcast.default.render().html)
	const metadescription = linkcast.metadata.metadescription ? parse(linkcast.metadata.metadescription) : html.querySelector('p')
	const type = getLinkcastType(linkcast.metadata.url)

	return {
		...linkcast.metadata,

		// generate the slug from the file path
		slug: filepath
		.replace(/(\/\+page)?\.md/, '' )
		.split('/')
		.pop(),
		type: type,
		// whether or not this file is `my-linkcast.md` or `my-linkcast/index.md`
		// (needed to do correct dynamic import in linkcasts/[slug].svelte)
		isIndexFile: filepath.endsWith('/index.md'),

		// format date as yyyy-MM-dd
		date: linkcast.metadata.date
		? //format(
		// offset by timezone so that the date is correct
		addTimezoneOffset(new Date(linkcast.metadata.date)) //,
		//'yyyy-MM-dd'
		//)
		: undefined,

		// TODO: Find out what this does and why?
		html: {
			rendered: html.toString() || ""
		},

		preview: {
			html: metadescription?.toString() || "",
			// text-only preview (i.e no html elements), used for SEO
			text: metadescription?.structuredText ?? metadescription?.toString()
		},
	}
})
// sort by date
.sort((a, b) => b.date - a.date)
// add references to the next/previous linkcast
.map((linkcast, index, allLinkcasts) => ({
	...linkcast,
	previous: allLinkcasts[index - 1],
	next: allLinkcasts[index + 1]
}))


function addTimezoneOffset(date) {
	const offsetInMilliseconds = new Date().getTimezoneOffset() * 60 * 1000
	return new Date(new Date(date).getTime() + offsetInMilliseconds)
}