import { get, writable } from 'svelte/store';

export const messages = writable([])

// import Pusher from 'pusher'
// // Enable pusher logging - don't include this in production
// Pusher.logToConsole = true;

// export const pusher = new Pusher('b988a69bbc638befb918', {
// 	cluster: 'eu'
// })

// const channel = pusher.subscribe('LastMessengerS');
// channel.bind('Chat', function(data) {
// 	messages.set([...get(messages), data])
// });