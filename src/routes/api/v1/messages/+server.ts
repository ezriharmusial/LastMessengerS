import { error } from '@sveltejs/kit';
import { json } from '@sveltejs/kit';

import Pusher from "pusher";

const pusher = new Pusher({
  appId: "1481364",
  key: "b988a69bbc638befb918",
  secret: "2d71a676a107a8b46d65",
  cluster: "eu",
  useTLS: true
});




/** @type {import('./$types').RequestHandler} */
export async function POST({ request }) {

    // console.log(request)
    const { username, message } = await request.json();
    pusher.trigger("LastMessengerS", "Chat", {
        username,
        message
    });

  return new Response();
}