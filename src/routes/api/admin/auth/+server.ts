import { error, redirect } from "@sveltejs/kit";
import { AuthorizationCode } from "simple-oauth2";
import { randomBytes } from "crypto";
import { scopes } from "../scopes";

export const randomString = () => randomBytes(4).toString("hex");

/** @type {import('./$types').PageServerLoad} */
export async function GET({ params, url}){

	const config = provider => ({
		client: {
			id: client[provider].id,
			secret: client[provider].secret
		},
		auth: {
			tokenHost: auth[provider].tokenHost,
			tokenPath: auth[provider].tokenPath,
			authorizePath: auth[provider].authorizePath
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
			id: import.meta.env.PRIVATE_OAUTH_GITHUB_CLIENT_ID,
			secret: import.meta.env.PRIVATE_OAUTH_GITHUB_CLIENT_SECRET
		}
	};

	// If there are no Env. variables are unconfigured, or you are not live on Vercel
	// if (config?.auth?.tokenHost == undefined)
	// throw error(418, 'You are a Teapot!');


	// simple-oauth will use our config files to generate a client we can use to request access
	const authClient = new AuthorizationCode(config(params.provider));

	// we then make a build the request to our provider
	const authorizationUri = authClient.authorizeURL({
		// your callback url is important! More on this later
		redirect_uri: `https://${url.host}/api/admin/callback?provider=${params.provider}`,
		scope: scopes[params.provider],
		state: randomString()
	});

	// and get redirected to Github for authorisation
	return {
		headers:{ Locatiton: authorizationUri},
		status: 301
	}
};