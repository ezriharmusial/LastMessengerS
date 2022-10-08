import { error } from '@sveltejs/kit';
import { AuthorizationCode } from "simple-oauth2";
import { config } from "../config";


/** @type {import('./$types').RequestHandler} */
export async function GET({ url }) {
	if (config?.auth?.tokenHost == undefined)
		throw error(418, 'You are a Teapot!');


	const code = url.searchParams.get('code');
	const provider = url.searchParams.get('provider');

	// we recreate the client we used to make the request

	const client = new AuthorizationCode(config(provider));

	// create our token object
	const tokenParams = {
		code,
		redirect_uri: `https://${url.host}/api/admin/callback?provider=${provider}`
	};

	let status
	function formBody(status, provider?, token?){
		return `
		<script>
			const receiveMessage = (message) => {
				window.opener.postMessage('authorization:${provider}:${status}:${JSON.stringify({token, provider})}', message.origin);
				window.removeEventListener("message", receiveMessage, false);
			}
			window.addEventListener("message", receiveMessage, false);
			window.opener.postMessage("authorizing:${provider}", "*");
		}
		</script>
		`
	}

	try {
		// try to create an access token from the client
		const accessToken = await client.getToken(tokenParams);
		const token = accessToken.token["access_token"];

		status = 'succes'

		const body = formBody(status, provider, token)
		return new Response(String(body))
	} catch (e) {
		// throw error(401, 'not logged in');
		// console.error('error:', e)
		status = 'error'
		const body = formBody(status, provider)
		return new Response(String(body))
	}
};
