import React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';

interface MoimHomeScreenProps {}

function MoimHomeScreen({}: MoimHomeScreenProps) {
	return (
		<SafeAreaView style={styles.container}>
			<Text className="text-[10]">내 모임</Text>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});

export default MoimHomeScreen;
