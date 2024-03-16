import { cloneDeep } from "lodash";
import { useEffect, useState } from "react";
import { IoAddCircleOutline } from "react-icons/io5";

import { CustomDivider } from "~/Components";
import {
	getFirstArrayElementFromStore,
	getKeyFromStore,
	getObjectWithWatchModeTrueProperty,
} from "~/Modules/Feedback/helpers";
import { feedBackStore } from "~/Stores/feedbackStore";
import { useStore } from "~/Stores/store";

import styles from "./StrokeColor.module.css";

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
			<div className={styles.strokeColorContainer}>
				{data?.defaultProps?.strokeColors?.map((item, index: number) => {
					const isCustomColor = item.label === "custom";
					return (
						<>
							{isCustomColor ? (
								<IoAddCircleOutline
									className={`${styles.colorItem}  ${item.value === defaultColor ? styles.watchMode : ""}`}
								/>
							) : (
								<span
									className={`${styles.colorItem}  ${item.value === defaultColor ? styles.watchMode : ""}`}
									key={index}
									onClick={() => handleStrokecolorChange(item.value)}
									style={{ backgroundColor: item.value }}
								/>
							)}
						</>
					);
				})}
			</div>
		</>
	);
};
