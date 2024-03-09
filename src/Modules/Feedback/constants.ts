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

export const QUESTION_TYPE_LIST = [
	{
		iconComponent: SmileOutlined,
		id: 1,
		title: "Smiley Rating",
	},
	{
		iconComponent: AudioOutlined,
		id: 2,
		title: "Voice feedback",
	},
	{
		iconComponent: FileAddOutlined,
		id: 3,
		title: "Single choice",
	},
	{
		iconComponent: AppstoreAddOutlined,
		id: 4,
		title: "Multiple choice",
	},
	{
		iconComponent: FileImageOutlined,
		id: 5,
		title: "Media file",
	},
	{
		iconComponent: HistoryOutlined,
		id: 6,
		title: "Date option",
	},
	{
		iconComponent: FileTextOutlined,
		id: 7,
		title: "Text input",
	},
	{
		iconComponent: FileTextOutlined,
		id: 8,
		title: "Free text",
	},
	{
		iconComponent: InfoCircleOutlined,
		id: 9,
		title: "Information",
	},
];
