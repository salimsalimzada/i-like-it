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

export const SmileyPosition = () => {
	const [feedbackState, setFeedbackState] = useStore(feedBackStore);

	const feedbackStateList = getFirstArrayElementFromStore(feedbackState);
	const data = getObjectWithWatchModeTrueProperty(feedbackStateList);

	const [defaultSmileyPosition, setDefaultSmileyPosition] = useState("center");
	const handleSmileyPositionChange = (position: string) => {
		console.log(position, "position");
		setDefaultSmileyPosition(position);
		const [key] = getKeyFromStore(feedbackState);
		const modifiedLabelList = cloneDeep(feedbackStateList)?.map((item) => {
			if (item.defaultProps.watchMode) {
				return {
					...item,
					defaultProps: {
						...item.defaultProps,
						defaultSmileyPosition: position,
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
			defaultSmileyPosition !== data.defaultProps.defaultSmileyPosition
		) {
			setDefaultSmileyPosition(data.defaultProps.defaultSmileyPosition);
		}
	}, [data, defaultSmileyPosition]);

	return (
		<>
			<CustomDivider children="Smiley Position" />
			<div
				style={{
					display: "flex",
					justifyContent: "space-evenly",
					width: "100%",
				}}
			>
				{data?.defaultProps?.smileyPosition?.map((item, index: number) => (
					<span
						key={index}
						onClick={() => handleSmileyPositionChange(item.label)}
						style={{
							color:
								defaultSmileyPosition === item.label
									? data.defaultProps.defaultColor
									: "gray",
							cursor: "pointer",
							fontSize: "1.375rem",
						}}
					>
						{<item.icon />}
					</span>
				))}
			</div>
		</>
	);
};
