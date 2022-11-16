import { sveltekit } from '@sveltejs/kit/vite';
import VitePluginBrowserSync from 'vite-plugin-browser-sync'
// import { imagetools } from '@zerodevx/svelte-img/vite'
import { imagetools } from 'vite-imagetools'

import type { UserConfig } from 'vite';

const config: UserConfig = {
	define: {
		'process.env.VITE_BUILD_TIME': JSON.stringify(new Date().toISOString()),
	},
	plugins: [
		sveltekit(),
		VitePluginBrowserSync({bs:{port:5173}}),
		imagetools()
	],
};

export default config;