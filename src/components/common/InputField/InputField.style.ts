import styled from '@emotion/native';
import { colors } from '@/constants';
import { ThemeMode } from '@/types';

const PressableContainer = styled.Pressable`
	width: '100%';
`;

const InputContainer = styled.View<{
	deviceHeight: number;
}>`
	border-width: 1px;
	border-color: ${props =>
		props.theme === 'dark' ? colors.dark.GRAY_200 : colors.light.GRAY_200};
	padding: ${props => (props.deviceHeight > 700 ? '15px' : '10px')};
	font-size: 20px;
	background-color: ${props =>
		props.theme === 'dark' ? colors.dark.GRAY_200 : colors.light.GRAY_200};
	border-radius: 20px;
	width: 300px;
`;

const Input = styled.TextInput<{ disabled: boolean; theme: ThemeMode }>`
	color: ${props =>
		props.disabled ? colors.light.GRAY_700 : colors.dark.BLACK};
	font-size: 16px;
	padding: 0px;
`;

const ErrorText = styled.Text`
	color: red;
	font-size: 15px;
	padding-top: 10px;
`;

export { PressableContainer, InputContainer, Input, ErrorText };
