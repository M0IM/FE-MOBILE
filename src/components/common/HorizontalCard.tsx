import { Image, Pressable, Text, View } from 'react-native';

interface IHorizontalCardProps {
	onPress: (id: number) => void;
}

function HorizontalCard({ item, onPress }: IHorizontalCardProps) {
	return (
		<Pressable
			onPress={onPress}
			className="flex-row justify-around w-full h-[100] items-center p-2 rounded-2xl bg-light-gray-200 dark:bg-dark-gray-200 active:bg-hover"
		>
			<Image
				source={{ uri: item.imageUri }}
				className="w-[75] h-[75] rounded-xl"
			/>
			<View className="flex flex-1 ml-5 flex-col h-full py-2 justify-between">
				<View>
					<Text className="font-bold text-lg text-light-common-black dark:text-light-common-white">
						{item.title}
					</Text>
					<Text className="font-semibold text-md text-light-gray-600 dark:text-dark-gray-600">
						{item.description}
					</Text>
				</View>
				<View className="flex-row items-center justify-start gap-2">
					<Text
						numberOfLines={1}
						adjustsFontSizeToFit
						className="text-md text-light-gray-600 dark:text-dark-gray-600"
					>
						외국 {item.language}
					</Text>
					<Text
						numberOfLines={1}
						adjustsFontSizeToFit
						className="text-md text-light-gray-600 dark:text-dark-gray-600"
					>
						{item.region}
					</Text>
					<Text
						numberOfLines={1}
						adjustsFontSizeToFit
						className="text-md text-light-gray-600 dark:text-dark-gray-600"
					>
						참여인원 {item.count}
					</Text>
				</View>
			</View>
		</Pressable>
	);
}

export default HorizontalCard;
