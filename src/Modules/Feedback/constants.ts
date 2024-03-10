import {
	AppstoreAddOutlined,
	AudioOutlined,
	FileAddOutlined,
	FileImageOutlined,
	FileTextOutlined,
	HistoryOutlined,
	InfoCircleOutlined,
	SmileOutlined,
} from "@ant-design/icons";
import {
	FaRegFaceFrown,
	FaRegFaceGrinStars,
	FaRegFaceMeh,
	FaRegFaceMehBlank,
	FaRegFaceSmile,
} from "react-icons/fa6";
import { v4 as uuidv4 } from "uuid";
export const QUESTION_TYPE_LIST = [
	{
		defaultProps: {
			color: "rgb(23, 53, 162)",
			rateOptions: {
				"1": [
					{ icon: FaRegFaceGrinStars, key: uuidv4(), label: "Excellent" },
					{ icon: FaRegFaceSmile, key: uuidv4(), label: "Good" },
					{ icon: FaRegFaceMeh, key: uuidv4(), label: "Neutral" },
					{ icon: FaRegFaceFrown, key: uuidv4(), label: "Bad" },
					{ icon: FaRegFaceMehBlank, key: uuidv4(), label: "Unacceptable" },
				],
				"2": [
					{ icon: FaRegFaceGrinStars, key: uuidv4(), label: "Excellent" },
					{ icon: FaRegFaceSmile, key: uuidv4(), label: "Good" },
					{ icon: FaRegFaceFrown, key: uuidv4(), label: "Bad" },
					{ icon: FaRegFaceMehBlank, key: uuidv4(), label: "Unacceptable" },
				],
				"3": [
					{ icon: FaRegFaceGrinStars, key: uuidv4(), label: "Excellent" },
					{ icon: FaRegFaceMeh, key: uuidv4(), label: "Neutral" },
					{ icon: FaRegFaceMehBlank, key: uuidv4(), label: "Unacceptable" },
				],
				"4": [
					{ icon: FaRegFaceGrinStars, key: uuidv4(), label: "Excellent" },

					{ icon: FaRegFaceMehBlank, key: uuidv4(), label: "Unacceptable" },
				],
			},
			strokePosition: "Right",
		},
		iconComponent: SmileOutlined,
		id: uuidv4(),
		title: "Smiley Rating",
	},
	{
		defaultProps: {},
		iconComponent: AudioOutlined,
		id: uuidv4(),
		title: "Voice feedback",
	},
	{
		defaultProps: {},
		iconComponent: FileAddOutlined,
		id: uuidv4(),
		title: "Single choice",
	},
	{
		defaultProps: {},
		iconComponent: AppstoreAddOutlined,
		id: uuidv4(),
		title: "Multiple choice",
	},
	{
		defaultProps: {},
		iconComponent: FileImageOutlined,
		id: uuidv4(),
		title: "Media file",
	},
	{
		defaultProps: {},
		iconComponent: HistoryOutlined,
		id: uuidv4(),
		title: "Date option",
	},
	{
		defaultProps: {},
		iconComponent: FileTextOutlined,
		id: uuidv4(),
		title: "Text input",
	},
	{
		defaultProps: {},
		iconComponent: FileTextOutlined,
		id: uuidv4(),
		title: "Free text",
	},
	{
		defaultProps: {},
		iconComponent: InfoCircleOutlined,
		id: uuidv4(),
		title: "Information",
	},
];
