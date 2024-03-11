import { cloneDeep } from "lodash";
import { DraggableLocation } from "react-beautiful-dnd";
import { v4 as uuidv4 } from "uuid";

import { QuestionListType } from "./types";
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
