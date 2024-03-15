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

export const StrokeColor = () => {
	const [feedbackState, setFeedbackState] = useStore(feedBackStore);

	const feedbackStateList = getFirstArrayElementFromStore(feedbackState);
	const data = getObjectWithWatchModeTrueProperty(feedbackStateList);

	const [defaultColor, setDefaultColor] = useState("");
	const handleStrokecolorChange = (color: string) => {
		setDefaultColor(color);
		const [key] = getKeyFromStore(feedbackState);
		const modifiedLabelList = cloneDeep(feedbackStateList)?.map((item) => {
			if (item.defaultProps.watchMode) {
				return {
					...item,
					defaultProps: {
						...item.defaultProps,
						defaultColor: color,
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
			defaultColor !== data.defaultProps.defaultColor
		) {
			setDefaultColor(data.defaultProps.defaultColor);
		}
	}, [data, defaultColor]);

	return (
		<>
			<CustomDivider children="Stroke color" />
			<div
				style={{
					display: "flex",
					justifyContent: "space-evenly",
					width: "100%",
				}}
			>
				{data?.defaultProps?.strokeColors?.map((item, index: number) => (
					<span
						key={index}
						onClick={() => handleStrokecolorChange(item.value)}
						style={{
							color: defaultColor === item.label ? "blue" : "gray",
							cursor: "pointer",
							fontSize: ".5rem",
						}}
					>
						{item.label}
					</span>
				))}
			</div>
		</>
	);
};
