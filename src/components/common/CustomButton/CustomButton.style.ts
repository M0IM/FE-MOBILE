import styled from '@emotion/native';
import { colors } from '@/constants';
import { ThemeMode } from '@/types';

interface IPressableButton {
	variant: 'filled' | 'outlined';
	theme: ThemeMode;
	isValid: boolean;
}

const PressableButton = styled.Pressable<IPressableButton>`
	border-radius: 50px;
	justify-content: center;
	flex-direction: row;

	&:pressed {
		background-color: ${({ variant }) =>
			variant === 'filled' ? colors.light.GRAY_500 : colors.dark.GRAY_500};
		border-width: ${({ variant }) => variant === 'filled' && '1px'};
	}

	opacity: ${({ isValid }) => isValid && 0.5};
`;

interface ITextContainer {
	size: 'large' | 'medium';
	deviceHeight: number;
}

const TextContainer = styled.View<ITextContainer>`
	width: ${({ size }) => (size === 'large' ? '100%' : '50%')};
	padding-top: ${({ deviceHeight, size }) =>
		size === 'large' && deviceHeight > 700 ? '15px' : '10px'};
	padding-bottom: ${({ deviceHeight, size }) =>
		size === 'large' && deviceHeight > 700 ? '15px' : '10px'};

	padding-top: ${({ deviceHeight, size }) =>
		size === 'medium' && deviceHeight > 700 ? '12px' : '8px'};
	padding-bottom: ${({ deviceHeight, size }) =>
		size === 'medium' && deviceHeight > 700 ? '12px' : '8px'};

	justify-content: center;
	align-items: center;
	flex-direction: row;
	gap: 5;
`;

interface ILabelText {
	variant: 'filled' | 'outlined';
}

const LabelText = styled.Text<ILabelText>`
	font-size: 16px;
	font-weight: 500;
`;

export { PressableButton, TextContainer, LabelText };
