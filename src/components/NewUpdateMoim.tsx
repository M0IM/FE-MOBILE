import { FlatList, Image, Pressable, Text, View } from 'react-native';
import { DUMMY_MOIM } from '@/components/RecruitMemberSection';

function UpdateItem({ item }) {
	return (
		<Pressable className="flex-row justify-around w-full h-[100] items-center p-2 rounded-2xl bg-[#F8F9F9] active:bg-slate-100">
			<Image
				source={{ uri: item.imageUri }}
				className="w-[75] h-[75] rounded-xl"
			/>
			<View className="flex flex-1 ml-5 flex-col h-full py-2 justify-between">
				<View>
					<Text className="font-bold text-xm">{item.title}</Text>
					<Text className="font-semibold text-small text-[#72787F]">
						{item.description}
					</Text>
				</View>
				<View className="flex-row items-center justify-start gap-2">
					<Text
						numberOfLines={1}
						adjustsFontSizeToFit
						className="text-small text-[#72787F]"
					>
						외국 {item.language}
					</Text>
					<Text
						numberOfLines={1}
						adjustsFontSizeToFit
						className="text-small text-[#72787F]"
					>
						{item.region}
					</Text>
					<Text
						numberOfLines={1}
						adjustsFontSizeToFit
						className="text-small text-[#72787F]"
					>
						참여인원 {item.count}
					</Text>
				</View>
			</View>
		</Pressable>
	);
}

function NewUpdateMoim() {
	return (
		<View className="p-3">
			<Text className="text-lg text-color mb-5 font-semibold">
				새로 업데이트 된 신규 모임
			</Text>
			<FlatList
				data={DUMMY_MOIM}
				renderItem={UpdateItem}
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
