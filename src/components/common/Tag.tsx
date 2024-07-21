import React from 'react';
import { Text, PressableProps, Pressable } from 'react-native';
import { cva } from 'class-variance-authority';
import { cn } from '@/utils/cn';

interface ITag extends PressableProps {
	children: React.ReactNode;
	size?: 'sm' | 'md' | 'lg';
}

function Tag({ className, children, size, ...props }: ITag) {
	return (
		<Pressable {...props} className={cn(tagVariants({ size }), className)}>
			<Text className="text-main">{children}</Text>
		</Pressable>
	);
}

export default Tag;

const tagVariants = cva(
	'border-main border-2 items-center justify-center rounded-full',
	{
		variants: {
			size: {
				sm: 'w-10 h-5',
				md: 'w-15 h-10',
				lg: 'w-20 h-10',
			},
		},
		defaultVariants: {
			size: 'lg',
		},
	},
);
