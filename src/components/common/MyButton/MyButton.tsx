import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { css } from '@emotion/native';
import * as S from './MyButton.style';

function MyButton() {
	return (
		<S.PressableButton
			onPress={() => console.log(1)}
			pressRetentionOffset={{ bottom: 30, left: 20, right: 20, top: 20 }}
		>
			<Text
				style={css`
					color: white;
				`}
			>
				테스트 용 버튼임
			</Text>
		</S.PressableButton>
	);
}

export default MyButton;
