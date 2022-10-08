import { AuthorizationCode } from "simple-oauth2";
import { PRIVATE_OAUTH_GITHUB_CLIENT_SECRET, PRIVATE_OAUTH_GITHUB_CLIENT_ID } from '$env/static/private'


// /** @type {import('./$types').RequestHandler} */
// export async function GET({ url }) {
/** @type {import('./$types').PageServerLoad} */
export async function load({params, url}) {


	const config = provider => ({
		client: {
			id: client[provider].id,
			secret: client[provider].secret
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

		return {
			status,
			provider: params.provider,
			token
		}
	} catch (e) {
		// throw error(401, 'not logged in');
		// console.error('error:', e)
		status = "missed"
		return{
			status,
			provider: params.provider
		}
	}
};
