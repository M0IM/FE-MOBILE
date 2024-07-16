import { FlatList, Pressable, Text, View } from 'react-native';

const DUMMY_FAMOUS = [
	{
		id: 1,
		rank: 1,
		title: '세계 최고 개발 동아리 UMC',
		region: '외국 / 언어',
		count: 6,
	},
	{
		id: 2,
		rank: 2,
		title: '세계 최고 개발 동아리 UMC',
		region: '외국 / 언어',
		count: 6,
	},
	{
		id: 3,
		rank: 3,
		title: '세계 최고 개발 동아리 UMC',
		region: '외국 / 언어',
		count: 6,
	},
	{
		id: 4,
		rank: 4,
		title: '세계 최고 개발 동아리 UMC',
		region: '외국 / 언어',
		count: 6,
	},
	{
		id: 5,
		rank: 5,
		title: '세계 최고 개발 동아리 UMC',
		region: '외국 / 언어',
		count: 6,
	},
	{
		id: 6,
		rank: 6,
		title: '세계 최고 개발 동아리 UMC',
		region: '외국 / 언어',
		count: 6,
	},
];

function RankItem({ item }) {
	const handleMoveDetailPage = () => {
		console.log('click');
	};
	return (
		<Pressable
			onPress={handleMoveDetailPage}
			className="flex flex-row items-center justify-center p-1 active:bg-hover active:rounded-2xl"
		>
			<Text className="mr-4 text-light-gray-400 dark:text-dark-gray-400 font-bold">
				{item.rank}
			</Text>
			<Text className="flex-1 text-light-common-black dark:text-light-common-white">
				{item.title}
			</Text>
			<View className="flex flex-row items-center justify-center gap-3">
				<Text className="text-light-gray-400 dark:text-dark-gray-400 text-small">
					{item.region}
				</Text>
				<Text className="text-smal text-light-common-black dark:text-light-common-white">
					{item.count}명
				</Text>
			</View>
		</Pressable>
	);
}

function FamousMoim() {
	return (
		<View className="p-3">
			<Text className="text-base text-color mb-5 font-semibold text-light-common-black dark:text-light-common-white">
				인기 모임
			</Text>
			<FlatList
				data={DUMMY_FAMOUS}
				renderItem={RankItem}
				keyExtractor={DUMMY_FAMOUS.id}
				contentContainerStyle={{
					display: 'flex',
					flexDirection: 'column',
					gap: 20,
				}}
			/>
		</View>
	);
}

export default FamousMoim;
