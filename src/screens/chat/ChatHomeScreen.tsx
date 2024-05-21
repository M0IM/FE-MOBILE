import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import Config from 'react-native-config';

interface ChatHomeScreenProps {}

const ChatHomeScreen = ({}: ChatHomeScreenProps) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>채팅 {Config.TEST}</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default ChatHomeScreen;
