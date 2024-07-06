import { useState } from 'react';
import { ActivityIndicator, Platform, SafeAreaView, View } from 'react-native';
import Config from 'react-native-config';
import WebView, {
	WebViewMessageEvent,
	WebViewNavigation,
} from 'react-native-webview';
import axios from 'axios';
import useThemeStore from '@/store/useThemeStore.ts';

const REDIRECT_URI = `${
	Platform.OS === 'ios' ? 'http://localhost:3030/' : 'http://10.0.2.2:3030/'
}auth/oauth/kakao`;

function KakaoLoginScreen() {
	const { theme } = useThemeStore();
	const [isLoading, setIsLoading] = useState(true);
	const [isChangeNavigate, setIsChangeNavigate] = useState(false);

	const handleOnMessage = (event: WebViewMessageEvent) => {
		if (event.nativeEvent.url.includes(`${REDIRECT_URI}?code=`)) {
			const code = event.nativeEvent.url.replace(`${REDIRECT_URI}?code=`, '');

			requestToken(code);
		}
	};

	const requestToken = async (code: string) => {
		const response = await axios({
			method: 'post',
			url: 'https://kauth.kakao.com/oauth/token',
			params: {
				grant_type: 'authorization_code',
				client_id: Config.KAKAO_REST_API_KEY,
				redirect_uri: REDIRECT_URI,
				code,
			},
		});

		// kakaoLoginMutation.mutate(response.data.access_token);
	};

	const handleNavigationChangeState = (event: WebViewNavigation) => {
		const isMatched = event.url.includes(`${REDIRECT_URI}?code=`);
		setIsLoading(isMatched);
		setIsChangeNavigate(event.loading);
	};

	return (
		<SafeAreaView>
			{(isLoading || isChangeNavigate) && (
				<View>
					<ActivityIndicator size="small" />
				</View>
			)}
			{/*<WebView*/}
			{/*	source={{*/}
			{/*		uri: `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${Config.KAKAO_REST_API_KEY}&redirect_uri=${REDIRECT_URI}`,*/}
			{/*	}}*/}
			{/*	onMessage={handleOnMessage}*/}
			{/*	injectedJavaScript={"window.ReactNativeWebView.postMessage('')"}*/}
			{/*	onNavigationStateChange={handleNavigationChangeState}*/}
			{/*/>*/}
		</SafeAreaView>
	);
}

export default KakaoLoginScreen;
