import { mdsvex } from 'mdsvex'
// import autoprefixer from 'autoprefixer'
import mdsvexConfig from './mdsvex.config.js'
// import adapter from '@sveltejs/adapter-auto';
import vercel from '@sveltejs/adapter-vercel';
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
		adapter: vercel({
			// if true, will deploy the app using edge functions
			// (https://vercel.com/docs/concepts/functions/edge-functions)
			// rather than serverless functions
			edge: false,

			// an array of dependencies that esbuild should treat
			// as external when bundling functions
			external: [],

			// if true, will split your app into multiple functions
			// instead of creating a single one for the entire app
			split: false
		  }),


    	// remove this if you don't want prerendering
		prerender: {
			// TODO: Find repo with these files// entries: ['*', '/sitemap.xml', '/rss.xml']
		}
	}
};

export default config;
