<script>
	export let post;
	export let poster;
	export const size = 'large';

	const youtube_id = YouTubeGetID(post.content.oembed_url);
	// console.log('TCL: post.content.oembed_url', post.content.oembed_url)

	function YouTubeGetID(source_url){
		if (!source_url)
			return
		let ID;
		let url = source_url.replace(/(>|<)/gi,'').split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);

		if(url[2] !== undefined) {
			ID = url[2].split(/[^0-9a-z_\-]/i);
			ID = ID[0];
		} else {
			ID = url;
		}

		console.log('ID', ID);
		return ID;
	};

	// switch (size) {
		//   case 'thumbnail':
		//     poster = `http://img.youtube.com/vi/${youtube_id}/default.jpg`;
		//     break;
		//   case 'medium':
		//     poster = `http://img.youtube.com/vi/${youtube_id}/mqdefault.jpg`;
		//       // poster = (post && post._embedded['wp:featuredmedia'])[0].media_details.source_url ? post._embedded['wp:featuredmedia'][0].media_details.sizes.medium.source_url : '';
		//     break;
		//   case 'large':
		//   default:
		//     // poster = `http://img.youtube.com/vi/${youtube_id}/hqdefault.jpg`;
		//       poster = (post && post._embedded['wp:featuredmedia'])[0].source_url ? post._embedded['wp:featuredmedia'][0].source_url : '';
		//     break;
		// }
		// console.log(poster);
	</script>

	<figure class="image 16by9">
		<div class="ytp-cued-thumbnail-overlay">
			<div class="ytp-cued-thumbnail-overlay-image linkcast-thumb lazyload" style="background-image: url('{poster}');"></div>
			<div class="ytp-large-play-button ytp-button" aria-label="Play">
				<svg width="68px" height="48px" version="1.1" viewBox="0 0 68 48">
					<path class="ytp-large-play-button-bg" d="M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z" fill="#212121" fill-opacity="0.8"></path>
					<path d="M 45,24 27,14 27,34" fill="#fff"></path>
				</svg>
			</div>
		</div>
	</figure>

	<style global lang="scss">
		/* ======== Youtube Button Styles Copy ======= */
		.ytp-button {
			border: none;
			background-color: transparent;
			padding: 0;
			color: inherit;
			text-align: inherit;
			font-size: 100%;
			font-family: inherit;
			cursor: default;
			line-height: inherit;

			&,
			&:focus {
				outline: 0;
			}
		}

		.ytp-cued-thumbnail-overlay {
			position: absolute;
			width: 100%;
			height: 100%;
			top: 0;
			left: 0;
			background-position: center;
			background-repeat: no-repeat;
			transition: opacity 0.25s cubic-bezier(0, 0, 0.2, 1);
			background-size: cover;

			.ytp-cued-thumbnail-overlay-image {
				background-size: cover;
				background-position: center;
				background-repeat: no-repeat;
				width: 100%;
				height: 100%;
				position: absolute;
				transition: background-image 0.2s ease-in-out;
			}
		}

		.ytp-button:not([aria-disabled="true"]):not([disabled]):not([aria-hidden="true"]),
		.ended-mode .ytp-cued-thumbnail-overlay:not([aria-hidden="true"]),
		.unstarted-mode:not(.playing-mode) .ytp-cued-thumbnail-overlay:not([aria-hidden="true"]) {
			cursor: pointer;
		}

		.ytp-large-play-button {
			position: absolute;
			left: 50%;
			top: 50%;
			width: 68px;
			height: 48px;
			margin-left: -34px;
			margin-top: -24px;
			transition: opacity 0.25s cubic-bezier(0, 0, 0.2, 1);
			// z-index: 3;

			svg {
				height: 100%;
				left: 0;
				position: absolute;
				top: 0;
				width: 100%;
				pointer-events: none;
			}
		}

		.ytp-large-play-button.ytp-touch-device .ytp-large-play-button-bg,
		.ytp-cued-thumbnail-overlay:hover .ytp-large-play-button-bg {
			transition: fill 0.1s cubic-bezier(0, 0, 0.2, 1), fill-opacity 0.1s cubic-bezier(0, 0, 0, 1);
			fill: #f00;
			fill-opacity: 1;
		}
	</style>
