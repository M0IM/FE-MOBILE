import { FlatList, Image, Pressable, Text, View } from 'react-native';
import Avatar from '@/components/common/Avatar.tsx';
import { DUMMY_MOIM } from '@/components/feedHome/RecruitMemberSection';

function Item({ item }) {
	return (
		<Pressable className="flex-col shadow-amber-50 justify-around w-[133] h-[206] items-center p-2 rounded-2xl bg-light-gray-200 dark:bg-dark-gray-200 active:bg-hover">
			<Image
				source={{ uri: item.imageUri }}
				className="w-full h-full rounded-xl relative"
			/>
			<Pressable className="absolute bottom-3 flex flex-row justify-between items-center shadow-sm w-full active:bg-hover">
				<Avatar imgUrl={item.imageUri} />
				<View className="flex flex-1 ml-2 flex-col">
					<Text
						numberOfLines={1}
						adjustsFontSizeToFit
						className="text-sm text-light-common-black dark:text-light-common-white"
					>
						{item.title}
					</Text>
					<Text
						numberOfLines={1}
						adjustsFontSizeToFit
						className="text-sm text-light-common-black dark:text-light-common-white"
					>
						벤사모 - 밴드를 사랑하는 모임
					</Text>
				</View>
			</Pressable>
		</Pressable>
	);
}

function IntroMoim() {
	return (
		<View className="px-3 py-6">
			<Text className="text-base text-light-common-black dark:text-light-common-white mb-5 font-semibold">
				우리 모임을 소개합니다🔥
			</Text>
			<FlatList
				data={DUMMY_MOIM}
				renderItem={Item}
				keyExtractor={DUMMY_MOIM.id}
				horizontal
				contentContainerStyle={{
					display: 'flex',
					flexDirection: 'row',
					gap: 5,
				}}
				showsHorizontalScrollIndicator={false}
			/>
		</View>
	);
}

export default IntroMoim;
