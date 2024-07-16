import { FlatList, Text, View } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import HorizontalCard from '@/components/common/HorizontalCard';
import { DUMMY_MOIM } from '@/components/feedHome/RecruitMemberSection';
import { MoimSpaceStackParamList } from '@/navigations/stack/MoimSpaceStackNavigator.tsx';

function NewUpdateMoim() {
	const navigation = useNavigation<NavigationProp<MoimSpaceStackParamList>>();
	const handleMoveDetailPage = (id: number) => {
		navigation.navigate('MoimDetail', {
			id,
		});
	};
	return (
		<View className="p-3">
			<Text className="text-base text-light-common-black dark:text-light-common-white mt-5 font-semibold">
				새로 업데이트 된 신규 모임
			</Text>
			<FlatList
				data={DUMMY_MOIM}
				renderItem={({ item }) => (
					<HorizontalCard item={item} onPress={handleMoveDetailPage} />
				)}
				keyExtractor={DUMMY_MOIM.id}
				contentContainerStyle={{
					display: 'flex',
					flexDirection: 'column',
					padding: 10,
					gap: 5,
				}}
			/>
		</View>
	);
}

export default NewUpdateMoim;
