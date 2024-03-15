import { Input, Space, Switch } from "antd";
import { cloneDeep, isEmpty } from "lodash";
import { ChangeEventHandler, useEffect, useState } from "react";

import {
	getFirstArrayElementFromStore,
	getKeyFromStore,
	getObjectWithWatchModeTrueProperty,
} from "~/Modules/Feedback/helpers";
import { EmojiAndLabelType, RateOptionsType } from "~/Modules/Feedback/types";
import { feedBackStore } from "~/Stores/feedbackStore";
import { useStore } from "~/Stores/store";

import styles from "./RateLabelsStyle.module.css";
export const RateLabels = () => {
	const [labels, setLabels] = useState<EmojiAndLabelType[]>([]);
	const [feedbackState, setFeedbackState] = useStore(feedBackStore);
	const feedbackStateList = getFirstArrayElementFromStore(feedbackState);
	const feedbackStateObj =
		getObjectWithWatchModeTrueProperty(feedbackStateList);
	const rateValue = feedbackStateObj?.defaultProps?.defaultRateValue ?? "1";
	const [key] = getKeyFromStore(feedbackState);

	useEffect(() => {
		if (
			feedbackStateObj &&
			feedbackStateList.length &&
			!isEmpty(feedbackStateList["0"])
		) {
			const defaultRateOptions =
				feedbackStateList["0"].defaultProps.rateOptions;
			if (defaultRateOptions && rateValue) {
				setLabels(defaultRateOptions[rateValue as keyof RateOptionsType]);
			}
		}
	}, [rateValue, feedbackStateObj, feedbackStateList]);

	const handleChange: ChangeEventHandler<HTMLInputElement> = (
		event: React.ChangeEvent<HTMLInputElement>,
	) => {
		const modifiedLabels = labels.map((item) =>
			item.key === event.target.dataset.key
				? { ...item, label: event.target.value }
				: item,
		);
		setLabels(modifiedLabels);
		const modifiedLabelList = cloneDeep(feedbackStateList)?.map((item) => {
			if (item.defaultProps.watchMode) {
				return {
					...item,
					defaultProps: {
						...item.defaultProps,
						rateOptions: {
							...item.defaultProps.rateOptions,
							[rateValue]: modifiedLabels,
						},
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
			<Space className={styles.rateLabelContainer}>
				<div className={styles.rateLabelHeader}>
					<h5 className={styles.labelTitle}>Rate Labels</h5>
					<Switch defaultChecked />
				</div>
				<div className={styles.inputWrapper}>
					{labels?.map((item, index) => (
						<Space.Compact key={index} size="large">
							<Input
								addonBefore={<item.icon color="#878484" size={23} />}
								className={styles.inputField}
								data-key={item.key}
								key={item.key}
								onChange={handleChange}
								placeholder="Write whatever you want"
								value={item.label}
							/>
						</Space.Compact>
					))}
				</div>
			</Space>
		</>
	);
};
