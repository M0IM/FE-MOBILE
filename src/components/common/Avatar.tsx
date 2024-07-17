import { Image, Pressable, PressableProps } from 'react-native';
import { cva } from 'class-variance-authority';
import { cn } from '@/utils/cn';

interface AvatarProps extends PressableProps {
	imgUrl?: string;
	size?: 'sm' | 'md' | 'lg';
}

function Avatar({ className, imgUrl, size, ...props }: AvatarProps) {
	return (
		<Pressable {...props} className={cn(avatarVariants({ size }), className)}>
			<Image
				source={{
					uri:
						imgUrl ||
						'https://img.sbs.co.kr/newimg/news/20231006/201841141.jpg',
				}}
				className="w-full h-full rounded-full"
			/>
		</Pressable>
	);
}

const avatarVariants = cva('h-28 w-28 rounded-full active:bg-hover', {
	variants: {
		size: {
			sm: 'w-5 h-5',
			md: 'w-10 h-10',
			lg: 'w-20 h-20',
		},
	},
	defaultVariants: {
		size: 'sm',
	},
});

export default Avatar;
