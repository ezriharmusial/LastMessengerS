import { mdsvex } from 'mdsvex'
// import autoprefixer from 'autoprefixer'
import mdsvexConfig from './mdsvex.config.js'
import adapter from '@sveltejs/adapter-auto';
// import adapter from '@sveltejs/adapter-static';
// import adapter from '@sveltejs/adapter-vercel';
// import adapter from '@sveltejs/adapter-netlify';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', ...mdsvexConfig.extensions],
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess:[
		mdsvex(mdsvexConfig),
		preprocess({
			postcss: true
		})
	],
	kit: {
		adapter: adapter({
			fallback: 'index.html'
		}),


		// remove this if you don't want prerendering
		prerender: {
			// TODO: Find repo with these files// entries: ['*', '/sitemap.xml', '/rss.xml']
		}
	}
};

export default config;
