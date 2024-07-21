import { Text, View, ViewStyle } from 'react-native';

interface ColumnTextBoxProps extends ViewStyle {
	title: string;
	description: string;
}

function ColumnTextBox({ title, description, ...props }: ColumnTextBoxProps) {
	return (
		<View
			{...props}
			className="flex flex-col items-center justify-center gap-2"
		>
			<Text className="font-bold text-md text-light-gray-600 dark:text-dark-gray-600">
				{title}
			</Text>
			<Text className="font-semibold text-lg text-light-gray-700 dark:text-dark-gray-700">
				{description}
			</Text>
		</View>
	);
}

export default ColumnTextBox;
