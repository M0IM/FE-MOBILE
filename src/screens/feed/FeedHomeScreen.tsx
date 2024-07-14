import { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';

interface FeedHomeScreenProps {}

function FeedHomeScreen({}: FeedHomeScreenProps) {
	const [userData, setUserData] = useState<{
		id: string;
		firstName: string;
		lastName: string;
	} | null>(null);

	useEffect(() => {
		const fetchUserData = async () => {
			try {
				const response = await fetch('https://localhost:8081/user');
				const data = await response.json();
				console.log('반환값: ', data);
				setUserData(data);
			} catch (error) {
				console.error('Error fetching user data:', error);
			}
		};
		fetchUserData();
	}, []);

	return (
		<SafeAreaView style={styles.container}>
			<Text>피드 스크린</Text>
			<Text className="text-blue-600">native wind 테스트입니다.</Text>
			<Text>{userData?.firstName}</Text>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});

export default FeedHomeScreen;
