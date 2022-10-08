import { error, redirect } from "@sveltejs/kit";
import { AuthorizationCode } from "simple-oauth2";
import { randomBytes } from "crypto";
import { config } from "../config";
import { scopes } from "../scopes";

export const randomString = () => randomBytes(4).toString("hex");

/** @type {import('./$types').RequestHandler} */
export const GET = async ({url}) => {
  // If there are no Env. variables are unconfigured, or you are not live on Vercel
  // if (config?.auth?.tokenHost == undefined)
    // throw error(418, 'You are a Teapot!');

  const provider = url.searchParams.get("provider");

  // simple-oauth will use our config files to generate a client we can use to request access
  const client = new AuthorizationCode(config(provider));

  // we then make a build the request to our provider
  const authorizationUri = client.authorizeURL({
    // your callback url is important! More on this later
    redirect_uri: `https://${url.host}/api/admin/callback?provider=${provider}`,
    scope: scopes[provider],
    state: randomString()
  });

  // and get redirected to Github for authorisation
  redirect(301, authorizationUri)
};