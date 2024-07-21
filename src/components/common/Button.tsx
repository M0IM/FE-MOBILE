import React from 'react';
import { Pressable, PressableProps, Text } from 'react-native';
import { cva } from 'class-variance-authority';
import { cn } from '@/utils/cn';

interface ButtonProps extends PressableProps {
	size?: 'sm' | 'md' | 'lg';
	type?: 'main' | 'outlined';
	children: React.ReactNode;
}

function Button({ className, size, type, children, ...props }: ButtonProps) {
	return (
		<Pressable
			{...props}
			className={cn(buttonVariants({ size, type }), className)}
		>
			{children}
		</Pressable>
	);
}

const buttonVariants = cva('rounded-2xl flex items-center justify-center', {
	variants: {
		size: {
			sm: 'w-20 h-10',
			md: 'w-[50%] h-10',
			lg: 'w-[80%] h-10',
		},
		type: {
			main: 'bg-main active:bg-light-green-400',
			outlined: 'bg-light-gray-400 dark:bg-dark-gray-400 active:bg-hover',
		},
	},
	defaultVariants: {
		size: 'sm',
		type: 'main',
	},
});

export default Button;
