import { defineMDSveXConfig as defineConfig } from 'mdsvex';
import remarkBreaks from 'remark-breaks';

const config = defineConfig({
	extensions: ['.svelte.md', '.md', '.svx'],

	smartypants: {
		quotes: true,
		ellipses: true,
		dashes: 'oldschool'
	},

	remarkPlugins: [remarkBreaks],
	rehypePlugins: [],
	layout: {
		_: "./src/layouts/default.svelte",
		artist: "./src/layouts/artist.svelte",
		track: "./src/layouts/track.svelte",
	}
});

export default config;
