import { useState } from 'react';
import { SafeAreaView, Text } from 'react-native';
import Avatar from '@/components/common/Avatar';
import Button from '@/components/common/Button';
import CircleIconButton from '@/components/common/CircleIconButton';

function MoimDetailScreen() {
	return (
		<SafeAreaView className="flex-1 bg-light-common-white dark:bg-light-common-black">
			<CircleIconButton family={'MaterialIcons'} name={'drafts'} />
			<Avatar size="md" />
			<Button type="main" size="lg">
				<Text>HI</Text>
			</Button>
		</SafeAreaView>
	);
}

export default MoimDetailScreen;
