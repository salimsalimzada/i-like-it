import { Input, Space } from "antd";
import { cloneDeep, isEmpty } from "lodash";
import { ChangeEventHandler, useEffect, useState } from "react";

import { feedBackStore } from "../../../../Store/FeedbackState";
import { useCustomAtom } from "../../../../Store/store";
import {
	getFirstArrayElementFromStore,
	getKeyFromStore,
	getObjectWithWatchModeTrueProperty,
} from "../../helpers";
import {
	EmojiAndLabelType,
	QuestionListType,
	RateOptionsType,
} from "../../types";
import styles from "./RateLabelsStyle.module.css";
// TODO: Refactor here
export const RateLabel = () => {
	const [labels, setLabels] = useState<EmojiAndLabelType[]>([]);
	const [feedbackState, setFeedbackState] = useCustomAtom(feedBackStore);
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
				<h5 className={styles.labelTitle}>Rate Labels</h5>
				<div className={styles.inputWrapper}>
					{labels?.map((item) => (
						<Input
							className={styles.inputField}
							data-key={item.key}
							key={item.key}
							onChange={handleChange}
							placeholder="Write whatever you want"
							prefix={<item.icon className={styles.icon} />}
							value={item.label}
						/>
					))}
				</div>
			</Space>
		</>
	);
};
