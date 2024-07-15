import {
	Dimensions,
	Pressable,
	SafeAreaView,
	StyleSheet,
	Text,
	View,
} from 'react-native';

interface FeedHomeScreenProps {}

const { width } = Dimensions.get('window');

function FeedHomeScreen({}: FeedHomeScreenProps) {
	return (
		<SafeAreaView className="flex-1 bg-white">
			<View className="bg-main">
				<Pressable>
					<Text>HI</Text>
				</Pressable>
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});

export default FeedHomeScreen;
