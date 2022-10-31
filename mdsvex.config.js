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
	rehypePlugins: []
});

export default config;
