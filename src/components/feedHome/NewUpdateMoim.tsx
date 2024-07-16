import { FlatList, Text, View } from 'react-native';
import HorizontalCard from '@/components/common/HorizontalCard';
import { DUMMY_MOIM } from '@/components/feedHome/RecruitMemberSection';

function NewUpdateMoim() {
	return (
		<View className="p-3">
			<Text className="text-base text-light-common-black dark:text-light-common-white mt-5 font-semibold">
				새로 업데이트 된 신규 모임
			</Text>
			<FlatList
				data={DUMMY_MOIM}
				renderItem={HorizontalCard}
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
