import React from 'react';
import { FlatList, SafeAreaView, Text } from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import HorizontalCard from '@/components/common/HorizontalCard';
import { DUMMY_MOIM } from '@/components/feedHome/RecruitMemberSection';
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
			<Text className="text-xl font-semibold text-left mt-10 ml-5 text-light-common-black dark:text-light-common-white">
				내가 활동 중인 모임
				<Text className="text-light-gray-600 dark:text-dark-gray-600">
					({DUMMY_MOIM.length})
				</Text>
			</Text>
			<FlatList
				data={DUMMY_MOIM}
				renderItem={({ item }) => (
					<HorizontalCard
						item={item}
						onPress={() => handleMoveDetailPage(item.id)}
					/>
				)}
				keyExtractor={DUMMY_MOIM.id}
				contentContainerStyle={{
					display: 'flex',
					flexDirection: 'column',
					padding: 30,
					gap: 20,
				}}
			/>
		</SafeAreaView>
	);
}

export default MoimHomeScreen;
