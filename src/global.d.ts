/// <reference types="@sveltejs/kit" />

import type { ILazyLoadInstance } from 'vanilla-lazyload';

declare global {
	interface Document {
		lazyloadInstance: ILazyLoadInstance;
	}
}

interface ImportMetaEnv {
    VITE_GOOGLE_OAUTH_CLIENT_ID: string;
    VITE_GOOGLE_OAUTH_CLIENT_SECRET: string;
    VITE_TWITCH_OAUTH_CLIENT_ID: string;
    VITE_TWITCH_OAUTH_CLIENT_SECRET: string;
    VITE_FACEBOOK_OAUTH_CLIENT_ID: string;
    VITE_FACEBOOK_OAUTH_CLIENT_SECRET: string;
    VITE_TWITTER_API_KEY: string;
    VITE_TWITTER_API_SECRET: string;
    VITE_REDDIT_API_KEY: string;
    VITE_REDDIT_API_SECRET: string;
    VITE_SPOTIFY_CLIENT_ID: string;
    VITE_SPOTIFY_CLIENT_SECRET: string;
    VITE_JWT_SECRET_KEY: string;
    PRIVATE_OAUTH_GITHUB_CLIENT_SECRET: string;
    PRIVATE_OAUTH_GITHUB_CLIENT_ID: string;
}