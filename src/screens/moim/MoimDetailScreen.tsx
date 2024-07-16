import { Pressable, SafeAreaView, Text } from 'react-native';
import CircleIconButton from '@/components/common/CircleIconButton.tsx';

function MoimDetailScreen() {
	return (
		<SafeAreaView className="flex-1 bg-light-common-white dark:bg-light-common-black">
			<CircleIconButton family={'MaterialIcons'} name={'drafts'} />
		</SafeAreaView>
	);
}

export default MoimDetailScreen;
