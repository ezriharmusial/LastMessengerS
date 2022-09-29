<script>
	let tier = "0"
</script>

<svelte:head>
<title>Join</title>
</svelte:head>

<div class="columns">
	<div class="column is-9">
		<header class="section">
			<div class="content">
				<img alt="Light Logo" src="https://lastmessengers.artkidsfoundation.org/wp-content/uploads/2022/09/LMS_web-logo_small_dark.png" class="logo-in">
				<h1 class="title">Joining Last-Messengers</h1>
				<p>We offer a Tier for Every Artist; from raw undiscovered Diamons to independant Stars and Producers. Every job has it's costs, so also our services.</p>
			</div>
			<div class="pricing-table is-comparative">
				<div class="pricing-plan is-features">
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
						<button class="button is-fullwidth has-text-grey"  on:click={() => tier = "0"}>Current plan</button>
					</div>
				</div>

				<div class="pricing-plan is-warning">
					<div class="plan-header">#AcadeMe</div>
					<div class="plan-price"><span class="plan-price-amount"><span class="plan-price-currency">$</span>3</span>/month</div>
					<div class="plan-items">
						<div class="plan-item" data-feature="Storage"><i class="fa-solid fa-check has-text-success fa-lg"></i></div>
						<div class="plan-item" data-feature="Domains">25</div>
						<div class="plan-item" data-feature="Bandwidth">1TB</div>
						<div class="plan-item" data-feature="Email Boxes">-</div>
					</div>
					<div class="plan-footer">
						<button class="button is-fullwidth" on:click={() => tier = "1"}>Choose</button>
					</div>
				</div>

				<div class="pricing-plan is-active">
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
						<button class="button is-fullwidth" on:click={() => tier = "2"}>Choose</button>
					</div>
				</div>

				<div class="pricing-plan is-danger">
					<div class="plan-header">#Producer</div>
					<div class="plan-price"><span class="plan-price-amount"><span class="plan-price-currency">$</span>9</span>/month</div>
					<div class="plan-items">
						<div class="plan-item" data-feature="Storage">2TB</div>
						<div class="plan-item" data-feature="Domains">100</div>
						<div class="plan-item" data-feature="Bandwidth">1TB</div>
						<div class="plan-item" data-feature="Email Boxes">1000</div>
					</div>
					<div class="plan-footer">
						<button class="button is-fullwidth" on:click={() => tier = "3"}>Choose</button>
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

	<div class="login column is-3 has-background-dark">
		<section class="section p-4">
			<div class="field">
			<div class="has-text-centered">
				<img class="login-logo" src="images/manifest/pwa-512x512.png">
			</div>
			</div>

			<div class="field">
				<label for="user" class="label">Subscription Tier</label>
			<div class="control has-icons-left">
				<div class="select is-rounded is-fullwidth">
				  <select bind:value={tier}>
					<option value="0" selected>#DiscoverMe (Free)</option>
					<option value="1">#Academy ($3/month)</option>
					<option value="2">#LastMessengerS ($7/month)</option>
					<option value="3">#Producer ($12/month)</option>
				  </select>
				</div>
				<span class="icon is-large is-left">
				  <i class="fa-solid fa-users-rectangle"></i>
				</span>
			  </div>
			</div>

			<div class="field">
				<label for="user" class="label">Username</label>
				<div class="control has-icons-left">
					<input class="input" id="user" type="text">
					<span class="icon is-small is-left">
						<i class="fa fa-user"></i>
					</span>
				</div>
			</div>

			<div class="field">
				<label class="label">Email</label>
				<div class="control has-icons-left">
					<input class="input" type="text">
					<span class="icon is-small is-left">
						<i class="fa fa-envelope"></i>
					</span>
				</div>
			</div>

			<div class="field">
				<label class="label">Password</label>
				<div class="control has-icons-left">
					<input class="input" type="password">
					<span class="icon is-small is-left">
						<i class="fa fa-key"></i>
					</span>
				</div>
			</div>
			<div class="has-text-centered">
				<button class="button is-vcentered is-primary is-outlined">Sign Up!</button>
			</div>
			<div class="has-text-centered">
				<a href="/login"> Already have an account? Log in now !</a>
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
		height: calc(100vh - 3.25rem);
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