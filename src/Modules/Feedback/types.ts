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

export type StrokeColorType = {
	label: string;
	value: string;
};

export type RateOptionsKeys = "1" | "2" | "3" | "4";

export type RateOptionsType = Record<RateOptionsKeys, EmojiAndLabelType[]>;

export type SmileyRatingDefaultPropsType = {
	defaultColor: string;
	defaultRateValue: string;
	defaultSmileyPosition: string;
	defaultStrokePosition: string;
	rateOptions: RateOptionsType;
	smileyPosition: SmileyPositionType[];
	strokeColors: StrokeColorType[];
	strokePosition: StrokePositionType[];
	watchMode: boolean;
};

export type QuestionListStoreType = Record<string, QuestionListType>;

export type DrawerStatusObject = {
	leftDrawerOpen: boolean;
	rightDrawerOpen: boolean;
};
