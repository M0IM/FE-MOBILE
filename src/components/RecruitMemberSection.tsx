import { FlatList, Image, Pressable, Text, View } from 'react-native';
import styles from 'react-native-webview/lib/WebView.styles';

export const DUMMY_MOIM = [
	{
		id: 1,
		title: '우리 동네 배드민턴',
		description: '배드민턴 열심히해서, 대회도 나가고!',
		imageUri:
			'https://plus.unsplash.com/premium_photo-1677543938005-6e0eb736dc19?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		language: '한국어',
		region: '서울',
		count: 6,
	},
	{
		id: 2,
		title: '우리 동네 배드민턴',
		description: '배드민턴 열심히해서, 대회도 나가고!',
		imageUri:
			'https://plus.unsplash.com/premium_photo-1677543938005-6e0eb736dc19?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		language: '한국어',
		region: '서울',
		count: 6,
	},
	{
		id: 3,
		title: '우리 동네 배드민턴',
		description: '배드민턴 열심히해서, 대회도 나가고!',
		imageUri:
			'https://plus.unsplash.com/premium_photo-1677543938005-6e0eb736dc19?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		language: '한국어',
		region: '서울',
		count: 6,
	},
	// {
	// 	id: 4,
	// 	title: '우리 동네 배드민턴',
	// 	description: '배드민턴 열심히해서, 대회도 나가고!',
	// 	imageUri:
	// 		'https://plus.unsplash.com/premium_photo-1677543938005-6e0eb736dc19?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
	// 	language: '한국어',
	// 	region: '서울',
	// 	count: 6,
	// },
	// {
	// 	id: 5,
	// 	title: '우리 동네 배드민턴',
	// 	description: '배드민턴 열심히해서, 대회도 나가고!',
	// 	imageUri:
	// 		'https://plus.unsplash.com/premium_photo-1677543938005-6e0eb736dc19?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
	// 	language: '한국어',
	// 	region: '서울',
	// 	count: 6,
	// },
];

function Item({ item }) {
	return (
		<Pressable className="flex-col justify-around w-[155] h-[194] items-center p-2 rounded-2xl bg-[#F8F9F9] active:bg-slate-100">
			<Image
				source={{ uri: item.imageUri }}
				className="w-[121] h-[56] rounded-xl"
			/>
			<View className="flex flex-col gap-1 mt-2">
				<Text className="font-bold text-xm">{item.title}</Text>
				<Text className="font-semibold text-small text-[#72787F]">
					{item.description}
				</Text>
			</View>
			<View className="flex flex-row items-center justify-center gap-2">
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
		</Pressable>
	);
}

function RecruitMemberSection() {
	return (
		<View className="p-3">
			<Text className="text-lg text-color font-semibold">
				지금 이 모임 멤버 모집 중!
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

export default RecruitMemberSection;
