import { Image, View } from 'react-native';

enum SIZE {
	SMALL = 'sm',
	MEDIUM = 'md',
	LARGE = 'lg',
	X_LARGE = 'xl',
}

type Props = {
	image?: string | null;
	size?: SIZE;
	highlight?: boolean;
};

function Avatar() {
	return (
		<View className={getContainerStyle(size, highlight)}>
			<Image source={{ uri: `${process.env.NEXT_PUBLIC_URL}/avatar.png` }} />
		</View>
	);
}

function getContainerStyle(size: SIZE, highlight: boolean) {
	const baseStyle = 'rounded-full flex justify-center items-center';
	const highlightStyle = highlight
		? 'bg-gradient-to-bl from-fuchsia-600 via-rose-500 to-amber-300'
		: '';
}

export default Avatar;
