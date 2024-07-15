import styled from '@emotion/native';

const SafetyContainer = styled.SafeAreaView`
	flex: 1;
	margin: 30px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const TitleContainer = styled.View`
	display: flex;
	justify-content: center;
	align-items: center;
	margin-bottom: 80px;
`;

const TitleText = styled.Text`
	font-size: 40px;
	font-weight: bold;
`;

const SubTitleText = styled.Text`
	font-size: 20px;
	font-weight: bold;
`;

const InputContainer = styled.View`
	gap: 20px;
	margin-bottom: 30px;
`;

export {
	SafetyContainer,
	TitleContainer,
	TitleText,
	SubTitleText,
	InputContainer,
};
