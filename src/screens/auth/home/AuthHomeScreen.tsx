import React from 'react';
import { Image, Pressable, Text, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { StackScreenProps } from '@react-navigation/stack';
import CustomButton from '@/components/common/CustomButton/CustomButton.tsx';
import { authNavigations } from '@/constants';
import { AuthStackParamList } from '@/navigations/stack/AuthStackNavigator';
import * as S from './AuthHomeScreen.style.ts';

/** *
 * Screen Typing
 * Navigator에서 정의한 ParamList를 타입으로 전달, 조금 더 명확히 하기 위해서 스크린 명까지 전달.
 */
type AuthHomeScreenProps = StackScreenProps<
	AuthStackParamList,
	typeof authNavigations.AUTH_HOME
>;

function AuthHomeScreen({ navigation }: AuthHomeScreenProps) {
	return (
		<S.SafeContainer>
			<View>
				<Image resizeMode="contain" />
			</View>
			<S.ButtonContainer>
				<S.KakaoButton
					label="카카오 로그인하기"
					onPress={() => authNavigations.KAKAO}
					icon={
						<Ionicons name={'chatbubble-sharp'} color={'#181500'} size={16} />
					}
				/>
				<CustomButton
					label="이메일 로그인하기"
					onPress={() => navigation.navigate(authNavigations.LOGIN)}
				/>
				<Pressable onPress={() => navigation.navigate(authNavigations.SIGN_UP)}>
					<Text>이메일로 가입하기</Text>
				</Pressable>
			</S.ButtonContainer>
		</S.SafeContainer>
	);
}

export default AuthHomeScreen;
