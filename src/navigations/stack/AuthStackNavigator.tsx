import { StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { authNavigations, colors } from '@/constants';
import AuthHomeScreen from '@/screens/auth/home/AuthHomeScreen';
import KakaoLoginScreen from '@/screens/auth/kakao/KakaoLoginScreen';
import LoginScreen from '@/screens/auth/login/LoginScreen';
import SignUpScreen from '@/screens/auth/signup/SignUpScreen';
import useThemeStore from '@/store/useThemeStore';
import { ThemeMode } from '@/types';

// Screen Typing시 아래 타입을 전달해주면 됨.
export type AuthStackParamList = {
	/**
	 * https://reactnavigation.org/docs/typescript/
	 *  Stack Param List라는 타입을 만들고, 스크린 명과 param에 대한 타이핑.
	 */
	[authNavigations.AUTH_HOME]: undefined;
	[authNavigations.LOGIN]: undefined;
	[authNavigations.SIGN_UP]: undefined;
	[authNavigations.KAKAO]: undefined;
};

function AuthStackNavigator() {
	const { theme } = useThemeStore();
	const styles = styling(theme);
	const Stack = createStackNavigator<AuthStackParamList>();
	return (
		<Stack.Navigator
			screenOptions={{
				cardStyle: {
					backgroundColor: colors[theme].WHITE,
				},
				headerTitleStyle: {
					fontSize: 15,
				},
				headerTintColor: colors[theme].BLACK,
			}}
		>
			<Stack.Screen
				name={authNavigations.AUTH_HOME}
				component={AuthHomeScreen}
				options={{
					headerShown: false,
				}}
			/>
			<Stack.Screen
				name={authNavigations.LOGIN}
				component={LoginScreen}
				options={{
					headerTitle: '로그인',
				}}
			/>
			<Stack.Screen
				name={authNavigations.SIGN_UP}
				component={SignUpScreen}
				options={{
					headerTitle: '회원가입',
				}}
			/>
			<Stack.Screen
				name={authNavigations.KAKAO}
				component={KakaoLoginScreen}
				options={{
					headerTitle: '카카오 로그인',
				}}
			/>
		</Stack.Navigator>
	);
}

const styling = (theme: ThemeMode) => StyleSheet.create({});

export default AuthStackNavigator;
