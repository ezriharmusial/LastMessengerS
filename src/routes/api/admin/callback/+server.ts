import { AuthorizationCode } from "simple-oauth2";
import { PRIVATE_OAUTH_GITHUB_CLIENT_SECRET, PRIVATE_OAUTH_GITHUB_CLIENT_ID } from '$env/static/private'


// /** @type {import('./$types').RequestHandler} */
// export async function GET({ url }) {
/** @type {import('./$types').PageServerLoad} */
export async function GET({params, url}) {


	const config = provider => ({
		client: {
			// id: client[provider].id,
			// secret: client[provider].secret
			id: PRIVATE_OAUTH_GITHUB_CLIENT_ID || import.meta.env.PRIVATE_OAUTH_GITHUB_CLIENT_ID || process.env.PRIVATE_OAUTH_GITHUB_CLIENT_ID,
			secret: PRIVATE_OAUTH_GITHUB_CLIENT_SECRET || import.meta.env.PRIVATE_OAUTH_GITHUB_CLIENT_SECRET || process.env.PRIVATE_OAUTH_GITHUB_CLIENT_SECRET
		},
		auth: {
			// tokenHost: auth[provider].tokenHost,
			// tokenPath: auth[provider].tokenPath,
			// authorizePath: auth[provider].authorizePath
			tokenHost: "https://github.com",
			tokenPath: "/login/oauth/access_token",
			authorizePath: "/login/oauth/authorize"
		}
	});

	const auth = {
		github: {
			tokenHost: "https://github.com",
			tokenPath: "/login/oauth/access_token",
			authorizePath: "/login/oauth/authorize"
		},
	};

	const client = {
		github: {
			id: PRIVATE_OAUTH_GITHUB_CLIENT_ID || import.meta.env.PRIVATE_OAUTH_GITHUB_CLIENT_ID || process.env.PRIVATE_OAUTH_GITHUB_CLIENT_ID,
			secret: PRIVATE_OAUTH_GITHUB_CLIENT_SECRET || import.meta.env.PRIVATE_OAUTH_GITHUB_CLIENT_SECRET || process.env.PRIVATE_OAUTH_GITHUB_CLIENT_SECRET
		}
	};

	const code = params.code;

	// create our token object
	const tokenParams = {
		code,
		redirect_uri: `https://${url.host}/api/admin/callback?provider=${params.provider}`
	};

	let status
	const authClient = new AuthorizationCode(config(params.provider));

	try {
		// try to create an access token from the client
		const accessToken = await authClient.getToken(tokenParams);
		const token = accessToken.token["access_token"];

		status = 'succes'

		const responseBody = renderBody("success", {
			status,
			provider: params.provider,
			token
		})

		return new Response(responseBody)
	} catch (e) {
		// Return Error
		const responseBody = renderBody("error", e)

		return new Response(responseBody)
	}

	// This renders a simple page with javascript that allows the pop-up page
	// to communicate with its opener
	function renderBody(status, content) {
		return `
		<script>
		const receiveMessage = (message) => {
			window.opener.postMessage(
				'authorization:${content.provider}:${status}:${JSON.stringify(
					content
					)}',
					message.origin
					);
					window.removeEventListener("message", receiveMessage, false);
				}
				window.addEventListener("message", receiveMessage, false);
				window.opener.postMessage("authorizing:${content.provider}", "*");
				</script>
				`;
			}
		};
