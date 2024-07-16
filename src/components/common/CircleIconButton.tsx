import { Pressable, PressableProps, ViewStyle } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Octicons from 'react-native-vector-icons/Octicons';

type IconFamilies = {
	Ionicons: 'Ionicons';
	MaterialIcons: 'MaterialIcons';
	Octicons: 'Octicons';
};

interface IconCircleButtonProps extends PressableProps {
	family: keyof IconFamilies;
	name: string;
	size?: number;
	color?: string;
	style?: ViewStyle;
}

function CircleIconButton({
	family,
	name,
	size = 30,
	color = '#000',
	style,
	...props
}: IconCircleButtonProps) {
	return (
		<Pressable
			className="w-10 h-10 bg-light-common-white flex flex-col items-center justify-center rounded-full active:bg-hover"
			{...props}
		>
			{family === 'Ionicons' && (
				<Ionicons name={name} color={color} size={size} />
			)}
			{family === 'MaterialIcons' && (
				<MaterialIcons name={name} color={color} size={size} />
			)}
			{family === 'Octicons' && (
				<Octicons name={name} color={color} size={size} />
			)}
		</Pressable>
	);
}

export default CircleIconButton;
