import styled from '@emotion/native';
import CustomButton from '@/components/common/CustomButton/CustomButton.tsx';

const SafeContainer = styled.View`
	flex: 1;
	align-items: center;
	margin: 30px;
`;

const Image = styled.Image`
	width: 100%;
	height: 100%;
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

export { SafeContainer, Image, ButtonContainer, KakaoButton };
