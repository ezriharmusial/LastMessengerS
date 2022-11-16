<script>
	let tier = "0"

	import lazyload from 'vanilla-lazyload';

	import SEO from "$lib/components/SEO/index.svelte";
	import website from "$lib/config/website";

	let ogSquareImageSrc = '/images/screenshot.png';
	let ogImageSrc = '/images/screenshot.png';
	let twitterImageSrc = '/images/screenshot.png';
	let featuredImageSrc = '/images/screenshot.png';

	const { author, siteUrl } = website;
	let title = 'Home';
	const breadcrumbs = [
		{
			name: 'Home',
			slug: '',
		},
	];
	let metadescription =
		'LastMessengerS Music - connects talented underpriviledged musicians with Management & ICT Professionals to restore Truth in Music';
	const featuredImageAlt =
		'picture of a person with long, curly hair, wearing a red had taking a picture with an analogue camera';
	const featuredImage = {
		url: siteUrl + featuredImageSrc,
		alt: featuredImageAlt,
		width: 672,
		height: 448,
		caption: 'Home page',
	};
	const ogImage = {
		url: siteUrl + ogImageSrc,
		alt: featuredImageAlt,
	};
	const ogSquareImage = {
		url: siteUrl + ogSquareImageSrc,
		alt: featuredImageAlt,
	};

	const twitterImage = {
		url: siteUrl + twitterImageSrc,
		alt: featuredImageAlt,
	};
	const entityMeta = {
		url: `${siteUrl}/`,
		faviconWidth: 512,
		faviconHeight: 512,
		caption: author,
	};
	const seoProps = {
		title,
		slug: '',
		entityMeta,
		datePublished: '2021-07-07T14:19:33.000+0100',
		lastUpdated: '2021-07-07T14:19:33.000+0100',
		breadcrumbs,
		metadescription,
		featuredImage,
		ogImage,
		ogSquareImage,
		twitterImage,
	};
</script>

<svelte:head>
	<SEO {...seoProps} />
</svelte:head>

<div class="columns">
	<div class="column 9">
		<header class="section">
			<div class="content">
				<img loading="eager" alt="Light Logo" src="/images/LMS_web-logo_small_light.png" class="logo-in">
				<h1 class="title">Joining Last-Messengers</h1>
				<p>We offer a Tier for Every Artist; from raw undiscovered Diamons to independant Stars and Producers. Every job has it's costs, so also our services.</p>
			</div>
			<div class="pricing-table comparative">
				<div class="pricing-plan features">
					<div class="plan-header">Features</div>
					<div class="plan-price"><span class="plan-price-amount">&nbsp;</span></div>
					<div class="plan-items">
						<div class="plan-item">Sharable Social Profile</div>
						<div class="plan-item">Songs on #DiscoverMe.vision</div>
						<div class="plan-item">Online Coaching Classes</div>
						<div class="plan-item">Artist Management</div>
						<div class="plan-item">Studio Recordings</div>
						<div class="plan-item">VideoClip Recordings</div>
						<div class="plan-item">Online Music Distribution</div>
						<div class="plan-item">Stage Performance</div>
						<div class="plan-item">Channel on IgboUnity.TV</div>
						<div class="plan-item">Personal Branded Channel</div>
					</div>
					<div class="plan-footer">

					</div>
				</div>
				<div class="pricing-plan">
					<div class="plan-header">#DiscoverMe</div>
					<div class="plan-price has-text-grey"><span class="plan-price-amount"><span class="plan-price-currency">$</span>Free</span></div>
					<div class="plan-items">
						<div class="plan-item" data-feature="Social Profile"><i class="fa-solid fa-check has-text-success fa-lg"></i></div>
						<div class="plan-item" data-feature="Songs">3</div>
						<div class="plan-item" data-feature="Bandwidth">-</div>
						<div class="plan-item" data-feature="Email Boxes">-</div>
						<div class="plan-item" data-feature="Storage"><i class="fa-solid fa-times has-text-danger fa-lg"></i></div>
						<div class="plan-item" data-feature="Storage"><i class="fa-solid fa-times has-text-danger fa-lg"></i></div>
						<div class="plan-item" data-feature="Storage"><i class="fa-solid fa-times has-text-danger fa-lg"></i></div>
					</div>
					<div class="plan-footer">
						<button class="button w-full has-text-grey"  on:click={() => tier = "0"}>Current plan</button>
					</div>
				</div>

				<div class="pricing-plan warning">
					<div class="plan-header">#AcadeMe</div>
					<div class="plan-price"><span class="plan-price-amount"><span class="plan-price-currency">$</span>3</span>/month</div>
					<div class="plan-items">
						<div class="plan-item" data-feature="Storage"><i class="fa-solid fa-check has-text-success fa-lg"></i></div>
						<div class="plan-item" data-feature="Domains">25</div>
						<div class="plan-item" data-feature="Bandwidth">1TB</div>
						<div class="plan-item" data-feature="Email Boxes">-</div>
					</div>
					<div class="plan-footer">
						<button class="button w-full" on:click={() => tier = "1"}>Choose</button>
					</div>
				</div>

				<div class="pricing-plan active">
					<div class="plan-header">#LastMessengerS Artist</div>
					<div class="plan-price"><span class="plan-price-amount"><span class="plan-price-currency">$</span>6</span>/month</div>
					<div class="plan-items">
						<div class="plan-item" data-feature="Storage"><i class="fa-solid fa-check has-text-success fa-lg"></i></div>
						<div class="plan-item" data-feature="Domains">50</div>
						<div class="plan-item" data-feature="Storage"><i class="fa-solid fa-check has-text-success fa-lg"></i></div>
						<div class="plan-item" data-feature="Storage"><i class="fa-solid fa-check has-text-success fa-lg"></i></div>
						<div class="plan-item" data-feature="Storage"><i class="fa-solid fa-check has-text-success fa-lg"></i></div>
						<div class="plan-item" data-feature="Storage"><i class="fa-solid fa-check has-text-success fa-lg"></i></div>
					</div>
					<div class="plan-footer">
						<button class="button w-full" on:click={() => tier = "2"}>Choose</button>
					</div>
				</div>

				<div class="pricing-plan bg-red-400 text-white">
					<div class="plan-header">#Producer</div>
					<div class="plan-price"><span class="plan-price-amount"><span class="plan-price-currency">$</span>9</span>/month</div>
					<div class="plan-items">
						<div class="plan-item" data-feature="Storage">2TB</div>
						<div class="plan-item" data-feature="Domains">100</div>
						<div class="plan-item" data-feature="Bandwidth">1TB</div>
						<div class="plan-item" data-feature="Email Boxes">1000</div>
					</div>
					<div class="plan-footer">
						<button class="button w-full" on:click={() => tier = "3"}>Choose</button>
					</div>
				</div>
			</div>
		</header>
		<main class="section">
			<div class="content">
				<h2 class="subtitle">Paid subscription</h2>

				<p>LastMessengerS is a paid Artist Management Platform. Those who wish to join will have to pay for their registration; if they scale through LastMessengerS Coaching sessions.</p>


			</div>
		</main>

	</div>

	<div class="login column 3 bg-black">
		<section class="section p-4">
			<div class="field">
			<div class="has-text-centered">
				<img class="lazy login-logo" alt="Lastmessengers.Tv logo" src="/images/manifest/pwa-512x512.png">
			</div>
			</div>

			<div class="field">
				<label for="subscription" class="label">Subscription Tier</label>
			<div class="control has-icons-left">
				<div class="select rounded w-full">
				  <select id="subscription" bind:value={tier}>
					<option value="0" selected>#DiscoverMe (Free)</option>
					<option value="1">#Academy ($3/month)</option>
					<option value="2">#LastMessengerS ($7/month)</option>
					<option value="3">#Producer ($12/month)</option>
				  </select>
				</div>
				<span class="icon large left">
				  <i class="fa-solid fa-users-rectangle"></i>
				</span>
			  </div>
			</div>

			<div class="field">
				<label for="user" class="label">Username</label>
				<div class="control has-icons-left">
					<input class="input" id="user" type="text">
					<span class="icon small left">
						<i class="fa fa-user"></i>
					</span>
				</div>
			</div>

			<div class="field">
				<label for="email" class="label">Email</label>
				<div class="control has-icons-left">
					<input class="input" id="email" type="text">
					<span class="icon small left">
						<i class="fa fa-envelope"></i>
					</span>
				</div>
			</div>

			<div class="field">
				<label for="password" class="label">Password</label>
				<div class="control has-icons-left">
					<input class="input" id="password" type="password">
					<span class="icon small left">
						<i class="fa fa-key"></i>
					</span>
				</div>
			</div>
			<div class="has-text-centered">
				<button class="button vcentered bg-yellow-400 outlined">Sign Up!</button>
			</div>
			<div class="has-text-centered">
				<button class="button"> Already have an account? Log in now !</button>
			</div>
		</section>
	</div>
</div>

<style>
	.pricing-table .pricing-plan .plan-price, .plan-header {
		color: grey !important;
	}

	.input {
		border-radius: 50px;
	}

	.button {
		margin-top: 20px;
		margin-bottom: 20px;
		min-width: 150px;
	}

	.login {
		position:sticky;
		top: 68px;
	}

	.login-logo {
		margin: 0 auto;
		margin-bottom: 50px;
		max-height: 100px;

	}

	.columns{
		margin: 0px;
	}
</style>