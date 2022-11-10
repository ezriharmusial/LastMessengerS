import { sveltekit } from '@sveltejs/kit/vite';
import VitePluginBrowserSync from 'vite-plugin-browser-sync'
import { imagetools } from '@zerodevx/svelte-img/vite'

import type { UserConfig } from 'vite';

const config: UserConfig = {
	plugins: [
		sveltekit(),
		VitePluginBrowserSync({bs:{port:5173}}),
		imagetools()
	],
};

export default config;