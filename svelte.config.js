import adapter from '@sveltejs/adapter-static';
import { imagetools } from 'vite-imagetools';
import { mdsvex } from 'mdsvex';
import mdsvexConfig from './mdsvex.config.js';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', ...mdsvexConfig.extensions],
	preprocess: [preprocess(), mdsvex(mdsvexConfig)],

	kit: {
		adapter: adapter({ fallback: './index.html' }),
		vite: {
			plugins: [imagetools({ force: true })],
		},
	}
};

export default config;
