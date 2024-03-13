import {
	FaRegFaceFrown,
	FaRegFaceGrinStars,
	FaRegFaceMeh,
	FaRegFaceMehBlank,
	FaRegFaceSmile,
} from "react-icons/fa6";
import { GoPerson, GoSmiley } from "react-icons/go";
import { GrMultiple, GrPhone } from "react-icons/gr";
import { IoInformationOutline } from "react-icons/io5";
import {
	MdBorderAll,
	MdBorderBottom,
	MdBorderLeft,
	MdBorderRight,
	MdBorderTop,
	MdKeyboardVoice,
	MdOutlineDateRange,
	MdOutlineMail,
} from "react-icons/md";
import { PiChatText } from "react-icons/pi";
import { RxSlider, RxText } from "react-icons/rx";
import { SiSinglestore } from "react-icons/si";
import { TbGenderBigender } from "react-icons/tb";
import { VscFileMedia } from "react-icons/vsc";
import { v4 as uuidv4 } from "uuid";
export const QUESTION_TYPE_LIST = [
	{
		defaultProps: {
			color: "rgb(23, 53, 162)",
			defaultRateValue: "1",
			defaultStrokePosition: "borderLeft",
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
			strokePosition: [
				{ icon: MdBorderAll, label: "border" },
				{ icon: MdBorderRight, label: "borderRight" },
				{ icon: MdBorderLeft, label: "borderLeft" },
				{ icon: MdBorderBottom, label: "borderBottom" },
				{ icon: MdBorderTop, label: "borderTop" },
			],
			watchMode: false,
		},
		iconComponent: GoSmiley,
		id: uuidv4(),
		title: "Smiley Rating",
	},
	{
		defaultProps: {},
		iconComponent: MdKeyboardVoice,
		id: uuidv4(),
		title: "Voice feedback",
	},
	{
		defaultProps: {},
		iconComponent: SiSinglestore,
		id: uuidv4(),
		title: "Single choice",
	},
	{
		defaultProps: {},
		iconComponent: GrMultiple,
		id: uuidv4(),
		title: "Multiple choice",
	},
	{
		defaultProps: {},
		iconComponent: VscFileMedia,
		id: uuidv4(),
		title: "Media file",
	},
	{
		defaultProps: {},
		iconComponent: MdOutlineDateRange,
		id: uuidv4(),
		title: "Date option",
	},
	{
		defaultProps: {},
		iconComponent: RxText,
		id: uuidv4(),
		title: "Text input",
	},
	{
		defaultProps: {},
		iconComponent: PiChatText,
		id: uuidv4(),
		title: "Free text",
	},
	{
		defaultProps: {},
		iconComponent: IoInformationOutline,
		id: uuidv4(),
		title: "Information",
	},
];

export const CUSTOMER_INFROMATION_LIST = [
	{
		defaultProps: {},
		iconComponent: MdOutlineMail,
		id: uuidv4(),
		title: "Email",
	},
	{
		defaultProps: {},
		iconComponent: GoPerson,
		id: uuidv4(),
		title: "Full name",
	},
	{
		defaultProps: {},
		iconComponent: TbGenderBigender,
		id: uuidv4(),
		title: "Gender",
	},
	{
		defaultProps: {},
		iconComponent: RxSlider,
		id: uuidv4(),
		title: "Age range",
	},
	{
		defaultProps: {},
		iconComponent: GrPhone,
		id: uuidv4(),
		title: "Phone number",
	},
	{
		defaultProps: {},
		iconComponent: "",
		id: uuidv4(),
		title: "",
	},
];
