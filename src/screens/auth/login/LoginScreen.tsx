import { useRef } from 'react';
import { StyleSheet, TextInput } from 'react-native';
import CustomButton from '@/components/common/CustomButton/CustomButton';
import InputField from '@/components/common/InputField/InputField';
import useForm from '@/hooks/useForm';
import { validateLogin } from '@/utils';
import * as S from './LoginScreen.style';

interface LoginScreenProps {}

function LoginScreen({}: LoginScreenProps) {
	const passwordRef = useRef<TextInput | null>(null);
	const login = useForm({
		initialValue: {
			email: '',
			password: '',
		},
		validate: validateLogin,
	});

	const handleSubmit = () => {};

	return (
		<S.SafetyContainer>
			<S.TitleContainer>
				<S.TitleText>moim</S.TitleText>
				<S.SubTitleText>완벽한 모임의 시작, moim</S.SubTitleText>
			</S.TitleContainer>
			<S.InputContainer>
				<InputField
					autoFocus
					placeholder="이메일"
					error={login.errors.email}
					touched={login.touched.email}
					inputMode="email"
					returnKeyType="next"
					blurOnSubmit={false}
					onSubmitEditing={() => passwordRef.current?.focus()}
					{...login.getTextInputProps('email')}
					// value={values.email}
					// onChangeText={text => handleChangeText('email', text)}
					// onBlur={() => handleBlur('email')}
				/>
				<InputField
					ref={passwordRef}
					placeholder="비밀번호"
					error={login.errors.password}
					touched={login.touched.password}
					// 비밀번호 masking 처리.
					secureTextEntry
					blurOnSubmit={false}
					returnKeyType="join"
					onSubmitEditing={handleSubmit}
					{...login.getTextInputProps('password')}
					// value={values.password}
					// onChangeText={text => handleChangeText('password', text)}
					// onBlur={() => handleBlur('password')}
				/>
			</S.InputContainer>
			<CustomButton
				label="로그인"
				variant="filled"
				size="large"
				onPress={handleSubmit}
			/>
		</S.SafetyContainer>
	);
}

const styles = StyleSheet.create({});

export default LoginScreen;
