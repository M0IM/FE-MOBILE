import React from 'react';

import {StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {RouteProp} from '@react-navigation/native';

import FeedHomeScreen from '@/screens/feed/FeedHomeScreen';
import MyHomeScreen from '@/screens/my/MyHomeScreen';

import useThemeStore from '@/store/useThemeStore';
import {colors, feedTabNavigations} from '../../constants';
import MoimHomeScreen from '@/screens/moim/MoimHomeScreen';
import ChatHomeScreen from '@/screens/chat/ChatHomeScreen';

export type FeedTabParamList = {
  [feedTabNavigations.FEED_HOME]: undefined;
  [feedTabNavigations.MOIM_HOME]: undefined;
  [feedTabNavigations.CHAT_HOME]: undefined;
  [feedTabNavigations.MY_HOME]: undefined;
};

const Tab = createBottomTabNavigator<FeedTabParamList>();

function TabBarIcons(route: RouteProp<FeedTabParamList>, focused: boolean) {
  let iconName = '';
  const {theme} = useThemeStore();
  switch (route.name) {
    case feedTabNavigations.FEED_HOME: {
      iconName = focused ? 'home' : 'home-outline';
      break;
    }
    case feedTabNavigations.MOIM_HOME: {
      iconName = focused ? 'reader' : 'reader-outline';
      break;
    }
    case feedTabNavigations.CHAT_HOME: {
      iconName = focused
        ? 'chatbubble-ellipses'
        : 'chatbubble-ellipses-outline';
      break;
    }
    case feedTabNavigations.MY_HOME: {
      iconName = focused ? 'person' : 'person-outline';
      break;
    }
  }

  return (
    <Ionicons
      name={iconName}
      color={focused ? colors[theme].BLACK : colors[theme].GRAY_500}
      size={25}
    />
  );
}

function FeedTabNavigator() {
  const {theme} = useThemeStore();

  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerStyle: {
          backgroundColor: colors[theme].WHITE,
          shadowColor: colors[theme].GRAY_200,
        },
        headerTitleStyle: {
          fontSize: 15,
        },
        headerTintColor: colors[theme].BLACK,
        tabBarActiveTintColor: colors[theme].BLACK,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: colors[theme].WHITE,
          borderTopColor: colors[theme].GRAY_200,
          borderTopWIdth: StyleSheet.hairlineWidth,
        },
        headerShown: false,
        tabBarIcon: ({focused}) => TabBarIcons(route, focused),
      })}>
      <Tab.Screen
        name={feedTabNavigations.FEED_HOME}
        component={FeedHomeScreen}
      />
      <Tab.Screen
        name={feedTabNavigations.MOIM_HOME}
        component={MoimHomeScreen}
      />
      <Tab.Screen
        name={feedTabNavigations.CHAT_HOME}
        component={ChatHomeScreen}
      />
      <Tab.Screen name={feedTabNavigations.MY_HOME} component={MyHomeScreen} />
    </Tab.Navigator>
  );
}

export default FeedTabNavigator;
