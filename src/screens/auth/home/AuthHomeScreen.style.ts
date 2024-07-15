import { Dimensions } from 'react-native';
import styled from '@emotion/native';
import CustomButton from '@/components/common/CustomButton/CustomButton.tsx';

const SafeContainer = styled.View`
	flex: 1;
	align-items: center;
	margin: 30px;
`;

const ImageContainer = styled.View<{ width: number }>`
	flex: 1.5;
	width: ${({ width }) => width}px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const Image = styled.Image`
	width: 100px;
	height: 100px;
`;

const TextContainer = styled.View`
	width: 300px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const TitleText = styled.Text`
	margin-top: 20px;
	font-size: 40px;
	font-weight: bold;
`;

const SubTitleText = styled.Text`
	font-size: 20px;
	font-weight: bold;
	white-space: nowrap;
`;

const ButtonContainer = styled.View`
	flex: 1;
	align-items: center;
	gap: 10;
`;

const KakaoButton = styled(CustomButton)`
	background: #fee503;
	color: #181600;
`;

const CircleButtonContainer = styled.View`
	display: flex;
	flex-direction: row;
	gap: 20px;
	margin-bottom: 20px;
`;

const CircleButton = styled.Pressable`
	background: #fee503;
	width: 50px;
	height: 50px;
	border-radius: 100px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	border: 1px solid lightgray;
`;

const CircleLogoImage = styled.Image`
	width: 25px;
	height: 25px;
`;

export {
	SafeContainer,
	ImageContainer,
	Image,
	TextContainer,
	TitleText,
	SubTitleText,
	ButtonContainer,
	CircleButtonContainer,
	CircleLogoImage,
	CircleButton,
};
