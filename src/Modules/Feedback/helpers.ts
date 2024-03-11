import { cloneDeep } from "lodash";
import { DraggableLocation } from "react-beautiful-dnd";
import { v4 as uuidv4 } from "uuid";

import { QuestionListStoreType, QuestionListType } from "./types";
export const reorderItems = (
	arr: QuestionListType,
	startIndex: number,
	endIndex: number,
) => {
	const copiedArr = cloneDeep(arr);
	const [removedObj] = copiedArr.splice(startIndex, 1);
	copiedArr.splice(endIndex, 0, removedObj);
	return copiedArr;
};

export const copyItems = (
	questionList: QuestionListType,
	destinationList: QuestionListType,
	source: DraggableLocation,
	destination: DraggableLocation,
) => {
	const questionListClone = cloneDeep(questionList);
	const destinationListClone = cloneDeep(destinationList);
	const questionListItem = questionListClone[source.index];
	destinationListClone.splice(destination.index, 0, {
		...questionListItem,
		id: uuidv4(),
	});
	return destinationListClone;
};

export const getFirstArrayElementFromStore = (store: QuestionListStoreType) => {
	return Object.values(store ?? {})?.[0] ?? [];
};

export const getKeyFromStore = (store: QuestionListStoreType) => {
	return Object.keys(store ?? {});
};

export const getDefaultRateValue = (feedBackList: QuestionListType) => {
	const watchedFeedbackStateObj = feedBackList.find(
		(item) => item.defaultProps.watchMode,
	);

	return Number(watchedFeedbackStateObj?.defaultProps?.defaultRateValue) ?? 1;
};

export const getObjectWithWatchModeTrueProperty = (
	feedBackList: QuestionListType,
) => {
	return feedBackList.find((item) => item.defaultProps.watchMode);
};
