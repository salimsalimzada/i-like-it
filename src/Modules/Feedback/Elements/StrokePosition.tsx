import { cloneDeep } from "lodash";
import { useEffect, useState } from "react";

import { CustomDivider } from "../../../Components";
import { feedBackStore } from "../../../Stores/feedbackStore";
import { useStore } from "../../../Stores/store";
import {
	getFirstArrayElementFromStore,
	getKeyFromStore,
	getObjectWithWatchModeTrueProperty,
} from "../helpers";

export const StrokePosition = () => {
	const [feedbackState, setFeedbackState] = useStore(feedBackStore);

	const feedbackStateList = getFirstArrayElementFromStore(feedbackState);
	const data = getObjectWithWatchModeTrueProperty(feedbackStateList);

	const [defaultStrokePosition, setDefaultStrokePosition] =
		useState("borderLeft");
	const handleStrokePositionChange = (position: string) => {
		setDefaultStrokePosition(position);
		const [key] = getKeyFromStore(feedbackState);
		const modifiedLabelList = cloneDeep(feedbackStateList)?.map((item) => {
			if (item.defaultProps.watchMode) {
				return {
					...item,
					defaultProps: {
						...item.defaultProps,
						defaultStrokePosition: position,
					},
				};
			}
			return item;
		});
		setFeedbackState({
			[key]: modifiedLabelList,
		});
	};
	useEffect(() => {
		if (
			data?.defaultProps.watchMode &&
			defaultStrokePosition !== data.defaultProps.defaultStrokePosition
		) {
			setDefaultStrokePosition(data.defaultProps.defaultStrokePosition);
		}
	}, [data, defaultStrokePosition]);

	return (
		<>
			<CustomDivider children="Stroke Position" />
			<div
				style={{
					display: "flex",
					justifyContent: "space-evenly",
					width: "100%",
				}}
			>
				{data?.defaultProps?.strokePosition?.map((item, index: number) => (
					<span
						key={index}
						onClick={() => handleStrokePositionChange(item.label)}
						style={{
							color: defaultStrokePosition === item.label ? "blue" : "gray",
							cursor: "pointer",
							fontSize: "2.5rem",
						}}
					>
						{<item.icon />}
					</span>
				))}
			</div>
		</>
	);
};
