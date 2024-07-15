import {
	Dimensions,
	Pressable,
	SafeAreaView,
	ScrollView,
	StyleSheet,
	Text,
	View,
} from 'react-native';
import FamousMoim from '@/components/FamousMoim';
import NewUpdateMoim from '@/components/NewUpdateMoim';
import RecruitMemberSection from '@/components/RecruitMemberSection';

interface FeedHomeScreenProps {}

const { width } = Dimensions.get('window');

function FeedHomeScreen({}: FeedHomeScreenProps) {
	return (
		<SafeAreaView className="flex-1 bg-white">
			<ScrollView>
				<Pressable className="mt-5 flex flex-row-reverse justify-start w-[90%] bg-[#00F0A1] h-[170] rounded-r-3xl">
					<View className="mt-3 p-3 text-right">
						<Text className="text-white font-bold text-2xl">
							내가 바라던 모임 만들기
						</Text>
						<View className="flex flex-col items-end mt-3">
							<Text className="text-gray-100 test-sm font-semibold">
								AI 자동 모임 생성 기능으로
							</Text>
							<Text className="text-gray-100 text-sm font-semibold">
								원하는 모임 3초만에 만들어 보세요.
							</Text>
						</View>
					</View>
				</Pressable>
				{/* Second Section */}
				<RecruitMemberSection />
				{/*	Third Section */}
				<FamousMoim />
				{/*	Fourth Section */}
				<NewUpdateMoim />
			</ScrollView>
		</SafeAreaView>
	);
}

export default FeedHomeScreen;
