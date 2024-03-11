import { IconType } from "react-icons";

import { QUESTION_TYPE_LIST } from "./constants";

export type QuestionListType = typeof QUESTION_TYPE_LIST;

export type EmojiAndLabelType = {
	icon: IconType;
	key: string;
	label: string;
};

export type SmileyRatingDefaultPropsType = {
	color: string;
	defaultRateValue: string;
	rateOptions: { [k: string]: EmojiAndLabelType[] };
	strokePosition: string;
	watchMode: boolean;
};
