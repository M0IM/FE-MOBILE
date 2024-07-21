import { FlatList, Image, ScrollView, Text, View } from 'react-native';
import { PieChart } from 'react-native-gifted-charts';
import Avatar from '@/components/common/Avatar';
import DescriptionDetailBox from '@/components/common/DescriptionDetailBox';
import Tag from '@/components/common/Tag';
import { IntroItem } from '@/components/feedHome/IntroMoim';
import { DUMMY_MOIM } from '@/components/feedHome/RecruitMemberSection';
import ColumnTextBox from '@/components/moimDetail/ColumnTextBox';
import DetailNoticeBox from '@/components/moimDetail/DetailNoticeBox';
import MainScheduleBox from '@/components/moimDetail/MainScheduleBox';

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
							<MainScheduleBox
								title="매주 월요일 정기 스터디"
								date="2024년 05월 20일"
								daysLeft="D - 2"
								location="상명대학교 G-208"
								cost={0}
								participants={30}
							/>
							<MainScheduleBox
								title="매주 월요일 정기 스터디"
								date="2024년 05월 20일"
								daysLeft="D - 2"
								location="상명대학교 G-208"
								cost={0}
								participants={30}
							/>
						</View>
					</View>
					{/*	eighth box */}
					<View className="w-full px-2">
						<View className="flex-col justify-start items-start gap-y-4">
							<Text className="m-2 text-xl font-bold text-light-gray-500">
								공지사항
							</Text>

							{[1, 2].map((item, index) => (
								<View>
									<DetailNoticeBox
										title="매주 월요일 정기 스터디"
										description="여러분 무조건 참여해야 하는 활동 중 하나 입니다. 따라서 워크북을 꾸준히 하시길 바랍니다."
										dateTime="2024년 5월 17일 오후 2:00"
										authorName="다라/차다인"
									/>
								</View>
							))}
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
