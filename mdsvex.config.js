import { defineMDSveXConfig as defineConfig } from 'mdsvex';

const config = defineConfig({
	extensions: ['.svelte.md', '.md', '.svx'],

	smartypants: {
		dashes: 'oldschool'
	},
    "layout": {
		_: "./src/layouts/default.svelte",
		artist: "./src/layouts/artist.svelte",
		artists: "./src/layouts/artists.svelte"
	},
	remarkPlugins: [],
	rehypePlugins: []
});

export default config;
