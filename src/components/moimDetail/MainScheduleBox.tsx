import React from 'react';
import { Pressable, Text, View } from 'react-native';

interface IMainScheduleProps {
	title: string;
	date: string;
	daysLeft: string;
	location: string;
	cost: number;
	participants: number;
}

function MainScheduleBox({
	title,
	date,
	daysLeft,
	location,
	cost,
	participants,
}: IMainScheduleProps) {
	return (
		<Pressable className="active:bg-hover active:rounded-2xl w-full">
			<View className="flex-col gap-2 justify-center items-start">
				<View className="flex-row gap-2 justify-start items-center">
					<View className="h-6 border-main border-2" />
					<Text className="font-bold text-xl">{title}</Text>
				</View>
				<View className="flex-row items-center justify-center">
					<Text className="font-semibold mx-5">{date}</Text>
					<Text className="text-main font-bold">{daysLeft}</Text>
				</View>
			</View>
			<View className="flex-col justify-center items-start gap-y-1 my-2">
				<View className="flex-row ml-5 items-center justify-center">
					<Text className="mr-2">위치</Text>
					<Text>{location}</Text>
				</View>
				<View className="flex-row ml-5 items-center justify-center">
					<Text className="mr-2">비용</Text>
					<Text>{cost}</Text>
				</View>
				<View className="flex-row ml-5 items-center justify-center">
					<Text className="mr-2">참여 인원</Text>
					<Text>{participants}</Text>
				</View>
			</View>
		</Pressable>
	);
}

export default MainScheduleBox;
