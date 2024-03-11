import { Input, Space } from "antd";
import { cloneDeep } from "lodash";
import { ChangeEventHandler, useEffect, useState } from "react";

import { feedBackStore } from "../../../../Store/FeedbackState";
import { useCustomAtom } from "../../../../Store/store";
import styles from "./RateLabelsStyle.module.css";
// TODO: Refactor here
export const RateLabel = () => {
	const [feedbackState, setFeedbackState] = useCustomAtom(feedBackStore);
	const feedbackStateList = Object.values(feedbackState ?? {})?.[0];
	const activeWatchModeObj = feedbackStateList.find(
		(item: any) => item.defaultProps.watchMode,
	);
	const rateValue = activeWatchModeObj?.defaultProps?.defaultRateValue;
	const defaultRateLabels = feedbackStateList?.["0"];
	const [labels, setLabels] = useState([]);
	const [key] = Object.keys(feedbackState ?? {});

	useEffect(() => {
		if (activeWatchModeObj) {
			setLabels(defaultRateLabels?.defaultProps.rateOptions[rateValue]);
		}
	}, [rateValue, defaultRateLabels, activeWatchModeObj]);

	const handleChange: ChangeEventHandler<HTMLInputElement> = (
		event: React.ChangeEvent<HTMLInputElement>,
	) => {
		const modifiedLabels = labels.map((item: any) =>
			item.key === event.target.dataset.key
				? { ...item, label: event.target.value }
				: item,
		);
		setLabels(modifiedLabels as any);
		const modifiedLabelList = cloneDeep(feedbackStateList)?.map((item: any) => {
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
					{labels?.map((item: any) => (
						<Input
							className={styles.inputField}
							data-key={item.key} // Add data-key attribute to identify the label
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
