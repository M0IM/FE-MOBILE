import { Text, View, ViewProps } from 'react-native';
import { cva } from 'class-variance-authority';
import { cn } from '@/utils/cn';

interface IDescriptionDetailBoxProps extends ViewProps {
	title: string;
	subTitle: string;
	isHighlight?: boolean;
}

function DescriptionDetailBox({
	title,
	className,
	subTitle,
	isHighlight = false,
}: IDescriptionDetailBoxProps) {
	return (
		<View
			className={cn(descriptionDetailBoxVariants({ isHighlight }), className)}
		>
			<Text className="mt-2 ml-2 text-light-gray-400 text-base">{title}</Text>
			<Text
				className={`absolute bottom-2 right-2 ${isHighlight ? 'text-main' : 'text-light-gray-600'} text-2xl font-semibold`}
			>
				{subTitle}
			</Text>
		</View>
	);
}

export default DescriptionDetailBox;

const descriptionDetailBoxVariants = cva(
	'relative mx-1 flex-1 h-[100px] border-0.5 shadow-2xl rounded-2xl',
	{
		variants: {
			isHighlight: {
				true: '',
				false: '',
			},
		},
		defaultVariants: {
			isHighlight: false,
		},
	},
);
