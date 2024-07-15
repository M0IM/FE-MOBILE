import {
	Dimensions,
	Pressable,
	SafeAreaView,
	ScrollView,
	Text,
	View,
} from 'react-native';
import FamousMoim from '@/components/feedHome/FamousMoim';
import FeedBanner from '@/components/feedHome/FeedBanner';
import IntroMoim from '@/components/feedHome/IntroMoim';
import NewUpdateMoim from '@/components/feedHome/NewUpdateMoim';
import RecruitMemberSection from '@/components/feedHome/RecruitMemberSection';

function FeedHomeScreen() {
	return (
		<SafeAreaView className="flex-1 bg-light-bg-white dark:bg-light-bg-white">
			<ScrollView>
				<FeedBanner />
				{/* Second Section */}
				<RecruitMemberSection />
				{/*	Third Section */}
				<FamousMoim />
				{/*	Fourth Section */}
				<NewUpdateMoim />
				{/*	Fifth Section */}
				<IntroMoim />
			</ScrollView>
		</SafeAreaView>
	);
}

export default FeedHomeScreen;
