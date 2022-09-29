import { defineMDSveXConfig as defineConfig } from 'mdsvex';
import relativeImages from 'mdsvex-relative-images'
import { visit } from 'unist-util-visit'


const config = defineConfig({
	extensions: ['.svelte.md', '.md', '.svx'],

	smartypants: {
		dashes: 'oldschool'
	},
    "layout": {
		_: "./src/layouts/default.svelte",
	},
	remarkPlugins: [audios, videos, relativeImages],
	rehypePlugins: []
});

export default config;

/**
 * Adds support to video files in markdown image links
 */
 function audios() {
	const extensions = ['mp3', 'wav']
	return function transformer(tree) {
	  visit(tree, 'image', (node) => {
		if (extensions.some((ext) => node.url.endsWith(ext))) {
		  node.type = 'html'
		  node.value = `
			  <audio
				src="${node.url}"
				autoplay
				playsinline
				loop
				title="${node.alt}"
			  />
			`
		}
	  })
	}
}

/**
 * Adds support to video files in markdown image links
 */
 function videos() {
	const extensions = ['mp4', 'webm']
	return function transformer(tree) {
	  visit(tree, 'image', (node) => {
		if (extensions.some((ext) => node.url.endsWith(ext))) {
		  node.type = 'html'
		  node.value = `
			  <video
				src="${node.url}"
				autoplay
				muted
				playsinline
				loop
				title="${node.alt}"
			  />
			`
		}
	  })
	}
  }