import { Pressable, Text, View } from 'react-native';

function FeedBanner() {
	return (
		<Pressable className="mt-5 flex flex-row-reverse justify-start w-[90%] bg-[#00F0A1] h-[170] rounded-r-3xl active:bg-[#00C880]">
			<View className="mt-3 p-3 text-right">
				<Text className="text-white text-2xl font-bold">
					내가 바라던 모임 만들기
				</Text>
				<View className="flex flex-col items-end mt-3">
					<Text className="text-gray-100 text-lg font-semibold">
						AI 자동 모임 생성 기능으로
					</Text>
					<Text className="text-gray-100 text-lg font-semibold">
						원하는 모임 3초만에 만들어 보세요.
					</Text>
				</View>
			</View>
		</Pressable>
	);
}

export default FeedBanner;
