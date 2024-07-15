import { ForwardedRef, ReactNode, forwardRef, useRef } from 'react';
import {
	Dimensions,
	Pressable,
	Text,
	TextInput,
	TextInputProps,
	View,
} from 'react-native';
import { colors } from '@/constants';
import useThemeStore from '@/store/useThemeStore';
import * as S from './InputField.style';

interface InputFieldProps extends TextInputProps {
	disabled?: boolean;
	error?: string;
	touched: boolean;
	icon?: ReactNode;
}

const deviceHeight = Dimensions.get('screen').height;

const InputField = forwardRef(
	(
		{
			disabled = false,
			touched,
			icon = null,
			error,
			...props
		}: InputFieldProps,
		ref?: ForwardedRef<TextInput>,
	) => {
		const { theme } = useThemeStore();
		const innerRef = useRef<TextInput | null>(null);

		const handlePressInput = () => {
			innerRef.current?.focus();
		};

		return (
			<S.PressableContainer onPress={handlePressInput}>
				<S.InputContainer deviceHeight={deviceHeight}>
					{icon}
					<S.Input
						ref={ref}
						editable={!disabled}
						placeholderTextColor={colors[theme].GRAY_500}
						// style={[styles.input, disabled && styles.disabled]}
						theme={theme}
						disabled={disabled}
						autoCapitalize="none"
						spellCheck={false}
						autoCorrect={false}
						{...props}
					/>
				</S.InputContainer>
				{touched && Boolean(error) && <S.ErrorText>{error}</S.ErrorText>}
			</S.PressableContainer>
		);
	},
);

export default InputField;
