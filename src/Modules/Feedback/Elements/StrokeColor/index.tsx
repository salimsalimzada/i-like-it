import { ColorPicker } from "antd";
import { ColorValueType } from "antd/es/color-picker/interface";
import { cloneDeep } from "lodash";
import { useEffect, useState } from "react";
import { IoAddCircleOutline } from "react-icons/io5";

import { CustomDivider } from "../../../../Components";
import { feedBackStore } from "../../../../Stores/feedbackStore";
import { useStore } from "../../../../Stores/store";
import {
	getFirstArrayElementFromStore,
	getKeyFromStore,
	getObjectWithWatchModeTrueProperty,
} from "../../helpers";
import styles from "./StrokeColor.module.css";

export const StrokeColor = () => {
	const [feedbackState, setFeedbackState] = useStore(feedBackStore);

	const feedbackStateList = getFirstArrayElementFromStore(feedbackState);
	const data = getObjectWithWatchModeTrueProperty(feedbackStateList);
	console.log(data, "data hola");
	const [defaultColor, setDefaultColor] = useState("#007bff");
	const handleStrokecolorChange = (color: ColorValueType) => {
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
								<ColorPicker
									key={index}
									onChange={handleStrokecolorChange}
									placement="topLeft"
									value={defaultColor}
								>
									<IoAddCircleOutline
										className={`${styles.colorItem}  ${item.value === defaultColor ? styles.watchMode : ""}`}
									/>
								</ColorPicker>
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
