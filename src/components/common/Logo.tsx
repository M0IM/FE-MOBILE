import { Image, Pressable } from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import { FeedTabParamList } from '@/navigations/tab/FeedTabNavigator';

type LogoProps = NavigationProp<FeedTabParamList>;

function Logo(navigation: LogoProps) {
	return (
		<Pressable className="ml-2" onPress={() => navigation.navigate('MoimHome')}>
			<Image className="w-8 h-8 p-5" source={require('@/assets/Logo.png')} />
		</Pressable>
	);
}

export default Logo;
