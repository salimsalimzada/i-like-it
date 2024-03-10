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
import { v4 as uuidv4 } from "uuid";
export const QUESTION_TYPE_LIST = [
	{
		iconComponent: SmileOutlined,
		id: uuidv4(),
		title: "Smiley Rating",
	},
	{
		iconComponent: AudioOutlined,
		id: uuidv4(),
		title: "Voice feedback",
	},
	{
		iconComponent: FileAddOutlined,
		id: uuidv4(),
		title: "Single choice",
	},
	{
		iconComponent: AppstoreAddOutlined,
		id: uuidv4(),
		title: "Multiple choice",
	},
	{
		iconComponent: FileImageOutlined,
		id: uuidv4(),
		title: "Media file",
	},
	{
		iconComponent: HistoryOutlined,
		id: uuidv4(),
		title: "Date option",
	},
	{
		iconComponent: FileTextOutlined,
		id: uuidv4(),
		title: "Text input",
	},
	{
		iconComponent: FileTextOutlined,
		id: uuidv4(),
		title: "Free text",
	},
	{
		iconComponent: InfoCircleOutlined,
		id: uuidv4(),
		title: "Information",
	},
];
