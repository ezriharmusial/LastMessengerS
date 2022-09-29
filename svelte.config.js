import { mdsvex } from 'mdsvex'
import autoprefixer from 'autoprefixer'
import mdsvexConfig from './mdsvex.config.js'
import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', ...mdsvexConfig.extensions],
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess:[
		mdsvex(mdsvexConfig),
		preprocess()
	],
	kit: {
		adapter: adapter(),


    	// remove this if you don't want prerendering
		preresitemapnder: {
			// TODO: Find repo with these files// entries: ['*', '/sitemap.xml', '/rss.xml']
		}
	}
};

export default config;
