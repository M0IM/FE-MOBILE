import { Pressable, Text, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { NavigationProp } from '@react-navigation/native';
import Avatar from '@/components/common/Avatar.tsx';
import { FeedTabParamList } from '@/navigations/tab/FeedTabNavigator';

type LogoProps = NavigationProp<FeedTabParamList>;

function FeedHomeHeaderRight(navigation: LogoProps) {
	return (
		<View className="flex flex-row items-center justify-center gap-4 mr-2">
			<Pressable className="border-[#00F0A1] border-2 px-2 py-1 rounded-xl active:bg-hover">
				<Text className="text-[#00F0A1]">AI 추천</Text>
			</Pressable>
			<Pressable className="active:bg-hover p-1 rounded-2xl">
				<Ionicons name="search" size={24} />
			</Pressable>
			<Pressable className="active:bg-hover p-1 rounded-2xl">
				<Ionicons name="notifications-outline" size={24} />
			</Pressable>
		</View>
	);
}

export default FeedHomeHeaderRight;
