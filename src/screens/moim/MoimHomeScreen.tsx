import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';

interface MoimHomeScreenProps {}

const MoimHomeScreen = ({}: MoimHomeScreenProps) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>내 모임</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default MoimHomeScreen;
