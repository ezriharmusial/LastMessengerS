const pwaConfiguration = {
	srcDir: './build',
	outDir: './.svelte-kit/output/client',
	mode: 'development',
	includeManifestIcons: false,
	scope: '/',
	base: '/',
	manifest: {
		"name" : "LastMessengerS Tv | Liberate your Soul",
		"short_name" : "IgboUnityTV",
		"description" : "Liberate your Soul",
		"lang" : "en-US",
		"dir" : "ltr",
		"start_url" : "/",
		"display": "standalone",
		"orientation" : "any",
		"background_color" : "#000",
		"theme_color" : "#000",
		"icons" : [
		  {
			"src" : "/images/manifest/android-36x36.png",
			"sizes" : "36x36",
			"type" : "image/png"
		  },
		  {
			"src" : "/images/manifest/android-48x48.png",
			"sizes" : "48x48",
			"type" : "image/png"
		  },
		  {
			"src" : "/images/manifest/apple-touch-icon-precomposed.png",
			"sizes" : "57x57",
			"type" : "image/png"
		  },
		  {
			"src" : "/images/manifest/FirefoxOS/icon-60.png",
			"sizes" : "60x60",
			"type" : "image/png"
		  },
		  {
			"src" : "/images/manifest/apple-touch-icon-60x60.png",
			"sizes" : "60x60",
			"type" : "image/png"
		  },
		  {
			"src" : "/images/manifest/browserconfig/tile70x70.png",
			"sizes" : "70x70",
			"type" : "image/png"
		  },
		  {
			"src" : "/images/manifest/apple-touch-icon-72x72-precomposed.png",
			"sizes" : "72x72",
			"type" : "image/png"
		  },
		  {
			"src" : "/images/manifest/apple-touch-icon-76x76.png",
			"sizes" : "76x76",
			"type" : "image/png"
		  },
		  {
			"src" : "/images/manifest/FirefoxOS/icon-90.png",
			"sizes" : "90x90",
			"type" : "image/png"
		  },
		  {
			"src" : "/images/manifest/android-96x196.png",
			"sizes" : "96x196",
			"type" : "image/png"
		  },
		  {
			"src" : "/images/manifest/apple-touch-icon-114x114-precomposed.png",
			"sizes" : "114x114",
			"type" : "image/png"
		  },
		  {
			"src" : "/images/manifest/apple-touch-icon-120x120.png",
			"sizes" : "120x120",
			"type" : "image/png"
		  },
		  {
			"src" : "/images/manifest/FirefoxOS/icon-128.png",
			"sizes" : "128x128",
			"type" : "image/png"
		  },
		  {
			"src" : "/images/manifest/android-144x144.png",
			"sizes" : "144x144",
			"type" : "image/png"
		  },
		  {
			"src" : "/images/manifest/apple-touch-icon-144x144-precomposed.png",
			"sizes" : "144x144",
			"type" : "image/png"
		  },
		  {
			"src" : "/images/manifest/browserconfig/tile150x150.png",
			"sizes" : "150x150",
			"type" : "image/png"
		  },
		  {
			"src" : "/images/manifest/apple-touch-icon-152x152.png",
			"sizes" : "152x152",
			"type" : "image/png"
		  },
		  {
			"src" : "/images/manifest/apple-touch-icon-167x167.png",
			"sizes" : "167x167",
			"type" : "image/png"
		  },
		  {
			"src" : "/images/manifest/apple-touch-icon-180x180.png",
			"sizes" : "180x180",
			"type" : "image/png"
		  },
		  {
			"src" : "/images/manifest/android-192x192.png",
			"sizes" : "192x192",
			"type" : "image/png"
		  },
		  {
			"src" : "/images/manifest/pwa-192x192.png",
			"sizes" : "192x192",
			"type" : "image/png"
		  },
		  {
			"src" : "/images/manifest/browserconfig/tile310x310.png",
			"sizes" : "310x310",
			"type" : "image/png"
		  },
		  {
			"src" : "/images/manifest/browserconfig/tile310x150.png",
			"sizes" : "310x150",
			"type" : "image/png"
		  },
		  {
			"src" : "/images/manifest/FirefoxOS/icon-512.png",
			"sizes" : "512x512",
			"type" : "image/png"
		  },
		  {
			"src" : "/images/manifest/pwa-512x512.png",
			"sizes" : "512x512",
			"type" : "image/png"
		  }
		],
		"scope" : "/"
	},
	devOptions: {
		enabled: process.env.SW_DEV === 'true',
		/* when using generateSW the PWA plugin will switch to classic */
		type: 'module',
		navigateFallback: '/',
		webManifestUrl: '/_app/manifest.webmanifest'
	},
}

const claims = process.env.CLAIMS === 'true'
const reload = process.env.RELOAD_SW === 'true'
const sw = process.env.SW === 'true'
const selfDestroying = process.env.SW_DESTROY === 'true'
const replaceOptions = {
	__DATE__: new Date().toISOString(),
	__RELOAD_SW__: reload ? 'true' : 'false',
	__SW_DEV__: process.env.SW_DEV === 'true' ? 'true' : 'false',
}

const workboxOrInjectManifestEntry = {
	// vite and SvelteKit are not aligned: pwa plugin will use /\.[a-f0-9]{8}\./ by default: #164 optimize workbox work
	dontCacheBustURLsMatching: /-[a-f0-9]{8}\./,
	globDirectory: './build/',
	globPatterns: ['**/*.{js,css,html,png,svg,webmanifest}'],
	globIgnores: sw ? (claims ? ['**/claims-sw*'] : ['**/prompt-sw*']) : ['**/sw*', '**/workbox-*'],
	// Before generating the service worker, manifestTransforms entry will allow us to transform the resulting precache manifest. See the manifestTransforms docs for mode details.
	manifestTransforms: [async(entries) => {
		// manifest.webmanifest is added always by pwa plugin, so we remove it.
		// EXCLUDE from the sw precache sw and workbox-*
		const manifest = entries.filter(({ url }) =>
			url !== 'manifest.webmanifest' && !url.endsWith('sw.js') && !url.startsWith('workbox-')
		).map((e) => {
			let url = e.url
			if (url && url.endsWith('.html')) {
				if (url.startsWith('/'))
					url = url.slice(1)

				e.url = url === 'index.html' ? '/' : `/${url.substring(0, url.lastIndexOf('.'))}`
				console.log(`${url} => ${e.url}`)
			}

			return e
		})
		return { manifest }
	}]
}

if (sw) {
	pwaConfiguration.srcDir = 'src'
	pwaConfiguration.filename = claims ? 'claims-sw.ts' : 'prompt-sw.ts'
	pwaConfiguration.strategies = 'injectManifest'
	pwaConfiguration.manifest.name = 'PWA Inject Manifest'
	pwaConfiguration.manifest.short_name = 'PWA Inject'
	pwaConfiguration.injectManifest = workboxOrInjectManifestEntry
} else {
	workboxOrInjectManifestEntry.mode = 'development'
	workboxOrInjectManifestEntry.navigateFallback = '/'
	pwaConfiguration.workbox = workboxOrInjectManifestEntry
}

if (claims)
	pwaConfiguration.registerType = 'autoUpdate'

if (selfDestroying)
	pwaConfiguration.selfDestroying = selfDestroying

export { pwaConfiguration, replaceOptions }
