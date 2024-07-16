import { createStackNavigator } from '@react-navigation/stack';
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
				options={{
					headerShown: false,
				}}
			/>
			<Stack.Screen
				name={moimSpaceNavigations.MOIM_DETAIL}
				component={MoimDetailScreen}
				options={{
					headerShown: true,
				}}
			/>
		</Stack.Navigator>
	);
}

export default MoimSpaceStackNavigator;
