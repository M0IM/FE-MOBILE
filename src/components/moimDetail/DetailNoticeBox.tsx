import { Pressable, Text, View } from 'react-native';
import Avatar from '@/components/common/Avatar.tsx';

interface IDetailNoticeBoxProps {
	title: string;
	description: string;
	dateTime: string;
	authorName: string;
}

function DetailNoticeBox({
	title,
	description,
	dateTime,
	authorName,
}: IDetailNoticeBoxProps) {
	return (
		<Pressable className="w-full flex-col justify-between h-[103] rounded-2xl py-3 px-4 border-0.5 active:bg-hover">
			<View className="mb-2">
				<Text className="font-bold text-lg">{title}</Text>
				<Text className="font-semibold text-light-gray-700 mt-1 text-base">
					{description}
				</Text>
			</View>
			<View className="flex-row justify-between">
				<Text className="text-light-gray-700">{dateTime}</Text>
				<View className="flex flex-row gap-2 items-center justify-center">
					<Avatar />
					<Text>{authorName}</Text>
				</View>
			</View>
		</Pressable>
	);
}

export default DetailNoticeBox;
