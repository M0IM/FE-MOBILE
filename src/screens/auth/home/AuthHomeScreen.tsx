import React from 'react';
import { Dimensions, Image, Pressable, Text, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { StackScreenProps } from '@react-navigation/stack';
// eslint-disable-next-line import/extensions
import CustomButton from '@/components/common/CustomButton/CustomButton.tsx';
import { authNavigations } from '@/constants';
import { AuthStackParamList } from '@/navigations/stack/AuthStackNavigator';
// eslint-disable-next-line import/extensions
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
	const width = Dimensions.get('screen').width / 2;
	return (
		<S.SafeContainer>
			<S.ImageContainer width={width}>
				<S.Image resizeMode="contain" source={require('@/assets/Logo.png')} />
				<S.TextContainer>
					<S.TitleText>moim</S.TitleText>
					<S.SubTitleText>완벽한 모임의 시작, moim</S.SubTitleText>
				</S.TextContainer>
			</S.ImageContainer>
			<S.ButtonContainer>
				<S.CircleButtonContainer>
					<S.CircleButton
						onPress={() => navigation.navigate(authNavigations.KAKAO)}
					>
						<S.CircleLogoImage
							resizeMode="contain"
							source={require('@/assets/kakao.png')}
						/>
					</S.CircleButton>
					<S.CircleButton
						style={{ backgroundColor: 'white' }}
						onPress={() => navigation.navigate(authNavigations.KAKAO)}
					>
						<S.CircleLogoImage
							resizeMode="contain"
							source={require('@/assets/google.png')}
						/>
					</S.CircleButton>
					<S.CircleButton
						onPress={() => navigation.navigate(authNavigations.KAKAO)}
						style={{ backgroundColor: 'black' }}
					>
						<S.CircleLogoImage
							resizeMode="contain"
							source={require('@/assets/apple.png')}
						/>
					</S.CircleButton>
				</S.CircleButtonContainer>
				<CustomButton
					label="이메일 로그인하기"
					onPress={() => navigation.navigate(authNavigations.LOGIN)}
				/>
				<Pressable onPress={() => navigation.navigate(authNavigations.SIGN_UP)}>
					<Text>회원 가입</Text>
				</Pressable>
			</S.ButtonContainer>
		</S.SafeContainer>
	);
}

export default AuthHomeScreen;
