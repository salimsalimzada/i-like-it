import { IconType } from "react-icons";

import { QUESTION_TYPE_LIST } from "./constants";

export type QuestionListType = typeof QUESTION_TYPE_LIST;

export type EmojiAndLabelType = {
	icon: IconType;
	key: string;
	label: string;
};

export type StrokePositionType = {
	icon: IconType;
	label: string;
};

export type SmileyPositionType = {
	icon: IconType;
	label: string;
};

export type RateOptionsKeys = "1" | "2" | "3" | "4";

export type RateOptionsType = Record<RateOptionsKeys, EmojiAndLabelType[]>;

export type SmileyRatingDefaultPropsType = {
	color: string;
	defaultRateValue: string;
	defaultSmileyPosition: string;
	defaultStrokePosition: string;
	rateOptions: RateOptionsType;
	smileyPosition: SmileyPositionType[];
	strokePosition: StrokePositionType[];
	watchMode: boolean;
};

export type QuestionListStoreType = Record<string, QuestionListType>;
