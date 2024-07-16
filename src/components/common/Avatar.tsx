import React from 'react';
import { Image, View } from 'react-native';

// Enum for size
enum SIZE {
	SMALL = 'sm',
	MEDIUM = 'md',
	LARGE = 'lg',
	X_LARGE = 'xl',
}

// Type for props
type Props = {
	image?: string | null;
	size?: SIZE;
	highlight?: boolean;
};

// Function to get the image size style
function getImageSizeStyle(size: SIZE) {
	switch (size) {
		case SIZE.SMALL:
			return { container: 'w-9 h-9', image: 'w-8.5 h-8.5 p-0.4' };
		case SIZE.MEDIUM:
			return { container: 'w-11 h-11', image: 'w-10.5 h-10.5 p-0.4' };
		case SIZE.LARGE:
			return { container: 'w-17 h-17', image: 'w-16 h-16 p-0.8' };
		case SIZE.X_LARGE:
			return { container: 'w-36 h-36', image: 'w-34.5 h-34.5 p-1.2' };
		default:
			throw new Error(`Unsupported type size: ${size}`);
	}
}

// Function to get the container style
function getContainerStyle(size: SIZE, highlight: boolean) {
	const baseStyle = 'rounded-full flex justify-center items-center';
	const highlightStyle = highlight
		? 'bg-gradient-to-bl from-fuchsia-600 via-rose-500 to-amber-300'
		: '';

	const { container } = getImageSizeStyle(size);

	return `${baseStyle} ${highlightStyle} ${container}`;
}

// Avatar component
function Avatar({ image, size = SIZE.LARGE, highlight = false }: Props) {
	const containerStyle = getContainerStyle(size, highlight);
	const { image: imageStyle } = getImageSizeStyle(size);

	return (
		<View className={containerStyle}>
			<Image source={{ uri: `${image}` }} className={imageStyle} />
		</View>
	);
}

export default Avatar;
