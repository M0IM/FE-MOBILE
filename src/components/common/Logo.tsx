import { Image, Pressable } from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import { FeedTabParamList } from '@/navigations/tab/FeedTabNavigator';

type LogoProps = NavigationProp<FeedTabParamList>;

function Logo(navigation: LogoProps) {
	return (
		<Pressable
			className="p-2 rounded-2xl active:bg-slate-100"
			onPress={() => navigation.navigate('FeedHome')}
		>
			<Image className="w-8 h-8 p-5" source={require('@/assets/Logo.png')} />
		</Pressable>
	);
}

export default Logo;
