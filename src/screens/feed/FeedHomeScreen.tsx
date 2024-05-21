import { SafeAreaView, StyleSheet, Text } from 'react-native';

interface FeedHomeScreenProps {}

function FeedHomeScreen({}: FeedHomeScreenProps) {
	return (
		<SafeAreaView style={styles.container}>
			<Text>피드 스크린</Text>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});

export default FeedHomeScreen;
