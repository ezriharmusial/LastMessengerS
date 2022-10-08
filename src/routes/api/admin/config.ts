// /lib/config.js
import { PRIVATE_OAUTH_GITHUB_CLIENT_SECRET, PRIVATE_OAUTH_GITHUB_CLIENT_ID } from '$env/static/private'


export const config = provider => ({
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
		id: PRIVATE_OAUTH_GITHUB_CLIENT_ID || process.env.PRIVATE_OAUTH_GITHUB_CLIENT_ID,
		secret: PRIVATE_OAUTH_GITHUB_CLIENT_SECRET || process.env.PRIVATE_OAUTH_GITHUB_CLIENT_SECRET
	}
};