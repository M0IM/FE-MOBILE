import React from 'react';
import { Pressable, SafeAreaView, StyleSheet, Text } from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import { MoimSpaceStackParamList } from '@/navigations/stack/MoimSpaceStackNavigator';

interface MoimHomeScreenProps {
	navigation: NavigationProp<MoimSpaceStackParamList>;
}

function MoimHomeScreen({ navigation }: MoimHomeScreenProps) {
	const handleMoveDetailPage = (id: number) => {
		navigation.navigate('MoimDetail', {
			id,
		});
	};
	return (
		<SafeAreaView className="flex-1 bg-light-common-white dark:bg-light-common-black">
			<Pressable onPress={() => handleMoveDetailPage(1)}>
				<Text className="text-2xl">내 모임</Text>
			</Pressable>
		</SafeAreaView>
	);
}

export default MoimHomeScreen;
