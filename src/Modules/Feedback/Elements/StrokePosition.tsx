import { cloneDeep } from "lodash";
import { useState } from "react";

import { CustomDivider } from "../../../Components";
import { feedBackStore } from "../../../Store/FeedbackState";
import { useCustomAtom } from "../../../Store/store";
import { getFirstArrayElementFromStore, getKeyFromStore } from "../helpers";

export const StrokePosition = () => {
	const [feedbackState, setFeedbackState] = useCustomAtom(feedBackStore);

	const feedbackStateList = getFirstArrayElementFromStore(feedbackState);
	const data = feedbackStateList?.[0];

	const [defaultStrokePosition, setDefaultStrokePositoin] = useState(
		data.defaultProps.defaultStrokePosition,
	);
	const handleStrokePositionChange = (position: string) => {
		setDefaultStrokePositoin(position);
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
