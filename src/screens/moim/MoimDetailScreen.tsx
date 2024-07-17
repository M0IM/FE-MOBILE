import { SafeAreaView } from 'react-native';
import Avatar from '@/components/common/Avatar';
import CircleIconButton from '@/components/common/CircleIconButton';

function MoimDetailScreen() {
	return (
		<SafeAreaView className="flex-1 bg-light-common-white dark:bg-light-common-black">
			<CircleIconButton family={'MaterialIcons'} name={'drafts'} />
			<Avatar size="lg" />
		</SafeAreaView>
	);
}

export default MoimDetailScreen;
