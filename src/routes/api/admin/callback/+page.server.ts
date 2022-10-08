import { error } from '@sveltejs/kit';
import { AuthorizationCode } from "simple-oauth2";
import { config } from "../config";


// /** @type {import('./$types').RequestHandler} */
// export async function GET({ url }) {
/** @type {import('./$types').PageServerLoad} */
export async function load({params, url}) {
	const code = params.code;
	const provider = params.provider;

	// create our token object
	const tokenParams = {
		code,
		redirect_uri: `https://${url.host}/api/admin/callback?provider=${provider}`
	};

	let status

	try {
		// try to create an access token from the client
		const accessToken = await client.getToken(tokenParams);
		const token = accessToken.token["access_token"];
		const client = new AuthorizationCode(config(provider));

		status = 'succes'

		return {
			status,
			provider,
			token
		}
	} catch (e) {
		// throw error(401, 'not logged in');
		// console.error('error:', e)
		status = "missed"
		return{
			status,
			provider
		}
	}
};
