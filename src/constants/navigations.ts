const authNavigations = {
	AUTH_HOME: 'AuthHome',
	LOGIN: 'Login',
	SIGN_UP: 'SignUp',
	KAKAO: 'Kakao',
} as const;

const feedTabNavigations = {
	CHAT_HOME: 'ChatHome',
	FEED_HOME: 'FeedHome',
	MOIM_HOME: 'MoimHome',
	MY_HOME: 'MyHome',
} as const;

export { authNavigations, feedTabNavigations };
