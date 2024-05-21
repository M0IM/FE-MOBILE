import { SafeAreaView, StyleSheet, Text } from 'react-native';

interface MyHomeScreenProps {}

function MyHomeScreen({}: MyHomeScreenProps) {
	return (
		<SafeAreaView style={styles.container}>
			<Text>마이페이지</Text>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});

export default MyHomeScreen;
