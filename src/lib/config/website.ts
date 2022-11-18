import {
	PUBLIC_CONTACT_EMAIL,
	PUBLIC_FACEBOOK_AUTHOR_PAGE,
	PUBLIC_FACEBOOK_PAGE,
	PUBLIC_GITHUB_PAGE,
	PUBLIC_LINKEDIN_PROFILE,
	PUBLIC_SITE_URL,
	PUBLIC_TELEGRAM_USERNAME,
	PUBLIC_TIKTOK_USERNAME,
	PUBLIC_TWITTER_USERNAME,
	PUBLIC_TWITTER_USER_ID,
	PUBLIC_WIRE_USERNAME,
} from '$env/static/public';

const facebookPageName = PUBLIC_FACEBOOK_PAGE;
const facebookAuthorPageName = PUBLIC_FACEBOOK_AUTHOR_PAGE;

const website = {
	author: 'LastMessengerS Music',
	ogLanguage: 'en_GB',
	siteLanguage: 'en-GB',
	siteTitle: 'LastMessengerS Music',
	siteShortTitle: 'LastMessengerS',
	description:
		'LastMessengerS Music is connecting Musical Talents, Managers, Promoters, Marketers and ICT/Media professionals together so as to reach the world with vital messages.',
	siteUrl: PUBLIC_SITE_URL,
	backgroundColor: '#000000',
	themeColor: '#800080',
	contactEmail: PUBLIC_CONTACT_EMAIL,
	facebookAuthorPage: `https://www.facebook.com/${facebookAuthorPageName}`,
	facebookAuthorPageName,
	facebookPage: `https://www.facebook.com/${facebookPageName}`,
	facebookPageName,
	githubPage: PUBLIC_GITHUB_PAGE,
	linkedinProfile: PUBLIC_LINKEDIN_PROFILE,
	telegramUsername: PUBLIC_TELEGRAM_USERNAME,
	tiktokUsername: PUBLIC_TIKTOK_USERNAME,
	twitterUsername: PUBLIC_TWITTER_USERNAME,
	twitterUserId: PUBLIC_TWITTER_USER_ID,
	wireUsername: PUBLIC_WIRE_USERNAME,
};

export { website as default };
