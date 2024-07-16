import { SafeAreaView, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { fontFamily } from 'nativewind/dist/postcss/to-react-native/properties/font-family';
import CircleIconButton from '@/components/common/CircleIconButton.tsx';
import Logo from '@/components/common/Logo.tsx';
import FeedHomeHeaderRight from '@/components/feedHome/FeedHomeHeaderRight.tsx';
import { moimSpaceNavigations } from '@/constants';
import MoimDetailScreen from '@/screens/moim/MoimDetailScreen';
import MoimHomeScreen from '@/screens/moim/MoimHomeScreen';

export type MoimSpaceStackParamList = {
	[moimSpaceNavigations.MOIM_HOME]: undefined;
	[moimSpaceNavigations.MOIM_DETAIL]: { id: number };
};

const Stack = createStackNavigator<MoimSpaceStackParamList>();

function MoimSpaceStackNavigator() {
	return (
		<Stack.Navigator
			screenOptions={{
				cardStyle: {
					backgroundColor: '#ffffff',
				},
				headerTitleStyle: {
					fontSize: 15,
				},
				headerTintColor: 'black',
			}}
		>
			<Stack.Screen
				name={moimSpaceNavigations.MOIM_HOME}
				component={MoimHomeScreen}
				options={({ navigation }) => ({
					headerShown: true,
					headerTitle: '',
					headerLeft: () => Logo(navigation),
					headerRight: () => FeedHomeHeaderRight(navigation),
				})}
			/>
			<Stack.Screen
				name={moimSpaceNavigations.MOIM_DETAIL}
				component={MoimDetailScreen}
				options={{
					headerShown: false,
				}}
			/>
		</Stack.Navigator>
	);
}

export default MoimSpaceStackNavigator;
