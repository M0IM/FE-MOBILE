import {
	FlatList,
	Image,
	Pressable,
	ScrollView,
	Text,
	View,
} from 'react-native';
import { PieChart } from 'react-native-gifted-charts';
import Avatar from '@/components/common/Avatar';
import DescriptionDetailBox from '@/components/common/DescriptionDetailBox.tsx';
import Tag from '@/components/common/Tag.tsx';
import { IntroItem } from '@/components/feedHome/IntroMoim.tsx';
import { DUMMY_MOIM } from '@/components/feedHome/RecruitMemberSection.tsx';
import ColumnTextBox from '@/components/moimDetail/ColumnTextBox';

interface MoimDetailScreenProps {
	route: {
		params: {
			id: number;
		};
	};
}

const data = [
	{
		value: 3,
		color: '#ADD8E6',
		text: '남',
	},
	{
		value: 2,
		color: '#FFB6C1',
		text: '여',
	},
];

function MoimDetailScreen({ route }: MoimDetailScreenProps) {
	const { id } = route.params;

	return (
		<ScrollView
			contentContainerStyle={{
				display: 'flex',
				alignItems: 'center',
			}}
			className="flex-1 bg-light-common-white dark:bg-light-common-black"
		>
			<Image
				className="w-full h-[300] relative"
				source={{
					uri: 'https://img.sbs.co.kr/newimg/news/20231006/201841141.jpg',
				}}
			/>
			<View className="w-full items-center bottom-10">
				{/* second box */}
				<View className="w-[90%] flex flex-row justify-around h-20 bg-light-common-white rounded-full shadow shadow-light-gray-500">
					<ColumnTextBox title="인원수" description="120" />
					<ColumnTextBox title="분야" description="IT / 개발" />
					<ColumnTextBox title="활동 지역" description="서울" />
				</View>
				{/* third box */}
				<View className="flex-row mt-3 px-4 items-center justify-between w-full">
					<View className="flex-row items-center justify-center gap-x-4 ">
						{[1, 2, 3].map((item, idx) => (
							<View key={idx}>
								<Tag># 개발</Tag>
							</View>
						))}
					</View>
					<View className="flex-row gap-0.5">
						<Avatar />
						<Avatar />
						<Avatar />
					</View>
				</View>
				{/* fourth box */}
				<View className="flex-col items-center justify-start gap-4 p-3 w-full">
					<Text className="font-bold text-2xl">
						세계 최고 고구마 농장 용세권!
					</Text>
					<Text>
						안녕하세요! 고구마 맛있었고요... 코난도 최고고요.. 텍스트 뭐적지
						안녕하세요! 고구마 맛있었고요... 코난도 최고고요.. 텍스트 뭐적지
						안녕하세요! 고구마 맛있었고요... 코난도 최고고요.. 텍스트 뭐적지
						안녕하세요! 고구마 맛있었고요... 코난도 최고고요.. 텍스트 뭐적지
					</Text>
					{/* Fifth Box */}
					<View className="w-full flex-row justify-around gap-2">
						<DescriptionDetailBox title="평균 연령" subTitle="24세" />
						<DescriptionDetailBox title="이번달 일정" subTitle="6개" />
						<DescriptionDetailBox
							title="모임 후기"
							subTitle="70개"
							isHighlight
						/>
					</View>
					{/* Sixth Box */}
					<View className="flex-row justify-center items-center w-full gap-x-2 border-0.5 h-[115px] rounded-2xl">
						<Text className="mb-20 text-lg text-dark-gray-700 mr-5">성비</Text>
						<PieChart
							data={data}
							donut
							innerRadius={30}
							radius={50}
							textColor="black"
							showValuesAsLabels
							labelsPosition="outward"
						/>

						<View className="h-full flex-1 justify-center gap-2 w-full">
							<View className="flex-row justify-around">
								<Text className="text-light-gray-500">여</Text>
								<Text className="text-light-gray-500">2 (24명)</Text>
							</View>
							<View className="flex-row justify-around">
								<Text className="text-light-gray-500">남</Text>
								<Text className="text-light-gray-500">8 (96명)</Text>
							</View>
							<View className="flex-row justify-around">
								<Text className="text-light-gray-500">전체</Text>
								<Text className="text-light-gray-500">120명</Text>
							</View>
						</View>
					</View>
					{/*	Seventh box */}
					<View className="w-full">
						<View className="flex-col justify-start items-start gap-y-2">
							<Text className="m-2 text-xl font-bold text-light-gray-500">
								모임 주요 일정
							</Text>
							<Pressable className="active:bg-hover active:rounded-2xl w-full">
								<View className="flex-col gap-2 justify-center items-start">
									<View className="flex-row gap-2 justify-start items-center">
										<View className="h-6 border-main border-2" />
										<Text className="font-bold text-xl">
											매주 월요일 정기 스터디
										</Text>
									</View>
									<View className="flex-row items-center justify-center">
										<Text className="font-semibold mx-5">2024년 05월 20일</Text>
										<Text className="text-main font-bold">D-2</Text>
									</View>
								</View>
								<View className="flex-col justify-center items-start gap-y-1 my-2">
									<View className="flex-row ml-5 items-center justify-center">
										<Text className="mr-2">위치</Text>
										<Text>상명대학교 G208</Text>
									</View>
									<View className="flex-row ml-5 items-center justify-center">
										<Text className="mr-2">비용</Text>
										<Text>0 원</Text>
									</View>
									<View className="flex-row ml-5 items-center justify-center">
										<Text className="mr-2">참여 인원</Text>
										<Text>30 명</Text>
									</View>
								</View>
							</Pressable>
							{/* DIVIDER */}
							<Pressable className="active:bg-hover active:rounded-2xl w-full">
								<View className="flex-col gap-2 justify-center items-start">
									<View className="flex-row gap-2 justify-start items-center">
										<View className="h-6 border-main border-2" />
										<Text className="font-bold text-xl">
											매주 월요일 정기 스터디
										</Text>
									</View>
									<View className="flex-row items-center justify-center">
										<Text className="font-semibold mx-5">2024년 05월 20일</Text>
										<Text className="text-main font-bold">D-2</Text>
									</View>
								</View>
								<View className="flex-col justify-center items-start gap-y-1 my-2">
									<View className="flex-row ml-5 items-center justify-center">
										<Text className="mr-2">위치</Text>
										<Text>상명대학교 G208</Text>
									</View>
									<View className="flex-row ml-5 items-center justify-center">
										<Text className="mr-2">비용</Text>
										<Text>0 원</Text>
									</View>
									<View className="flex-row ml-5 items-center justify-center">
										<Text className="mr-2">참여 인원</Text>
										<Text>30 명</Text>
									</View>
								</View>
							</Pressable>
						</View>
					</View>
					{/*	eighth box */}
					<View className="w-full px-2">
						<View className="flex-col justify-start items-start gap-y-4">
							<Text className="m-2 text-xl font-bold text-light-gray-500">
								공지사항
							</Text>
							<Pressable className="w-full flex-col justify-between h-[103] rounded-2xl py-3 px-4 border-0.5 active:bg-hover">
								<View className="mb-2">
									<Text className="font-bold text-lg">
										매주 월요일 정기 스터디
									</Text>
									<Text className="font-semibold text-light-gray-700 mt-1 text-base">
										여러분 무조건 참여해야 하는 활동 중 하나 입니다. 따라서
										워크북을 꾸준히 하시길 바랍니다.
									</Text>
								</View>
								<View className="flex-row justify-between">
									<Text className="text-light-gray-700">
										2024년 5월 17일 오후 2:00
									</Text>
									<View className="flex flex-row gap-2 items-center justify-center">
										<Avatar />
										<Text>다라/차다인</Text>
									</View>
								</View>
							</Pressable>
							<Pressable className="w-full flex-col justify-between h-[103] rounded-2xl py-3 px-4 border-0.5 active:bg-hover">
								<View className="mb-2">
									<Text className="font-bold text-lg">
										매주 월요일 정기 스터디
									</Text>
									<Text className="font-semibold text-light-gray-700 mt-1 text-base">
										여러분 무조건 참여해야 하는 활동 중 하나 입니다. 따라서
										워크북을 꾸준히 하시길 바랍니다.
									</Text>
								</View>
								<View className="flex-row justify-between">
									<Text className="text-light-gray-700">
										2024년 5월 17일 오후 2:00
									</Text>
									<View className="flex flex-row gap-2 items-center justify-center">
										<Avatar />
										<Text>다라/차다인</Text>
									</View>
								</View>
							</Pressable>
						</View>
					</View>
					{/*	ninth box */}
					<View className="w-full px-2">
						<Text className="m-2 text-xl font-bold text-light-gray-500">
							우리 모임 소개 영상
						</Text>
						<FlatList
							data={DUMMY_MOIM}
							renderItem={IntroItem}
							keyExtractor={DUMMY_MOIM.id}
							horizontal
							contentContainerStyle={{
								display: 'flex',
								flexDirection: 'row',
								gap: 5,
							}}
							showsHorizontalScrollIndicator={false}
						/>
					</View>
				</View>
			</View>
		</ScrollView>
	);
}

export default MoimDetailScreen;
