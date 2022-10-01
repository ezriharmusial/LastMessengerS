import { sveltekit } from '@sveltejs/kit/vite';
import { VitePWA } from 'vite-plugin-pwa';
import replace from '@rollup/plugin-replace'

import type { UserConfig } from 'vite';
import { pwaConfiguration, replaceOptions } from './pwa-configuration.js'

const config: UserConfig = {
	plugins: [
		sveltekit(),
		VitePWA(pwaConfiguration),
		replace(replaceOptions)
	],
};

export default config;