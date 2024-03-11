import { Radio, RadioChangeEvent, Space } from "antd";
import { cloneDeep, isArray, isEmpty } from "lodash";
import { Fragment } from "react/jsx-runtime";

import { CustomDivider } from "../../../../Components";
import { feedBackStore } from "../../../../Store/FeedbackState";
import { useCustomAtom } from "../../../../Store/store";

const getDefaultRateValue = (feedbackStateList: any) => {
	const watchedFeedbackStateObj = feedbackStateList.find(
		(item: any) => item.defaultProps.watchMode,
	);

	return Number(watchedFeedbackStateObj?.defaultProps?.defaultRateValue) ?? 1;
};

export const RateOptions = () => {
	const [feedbackState, setFeedbackState] = useCustomAtom(feedBackStore);
	const feedbackStateList = Object.values(feedbackState ?? {})?.[0];
	const questionTypeListObj = cloneDeep(
		(isArray(feedbackStateList) && feedbackStateList[0]) || {},
	);

	const onChange = (event: RadioChangeEvent) => {
		const [key] = Object.keys(feedbackState ?? {});

		const modifiedFeedbackState = cloneDeep(feedbackStateList).map(
			(item: any) => {
				if (item.defaultProps.watchMode) {
					return {
						...item,
						defaultProps: {
							...item.defaultProps,
							defaultRateValue: String(event.target.value),
						},
					};
				}
				return item;
			},
		);

		setFeedbackState({
			[key]: modifiedFeedbackState,
		});
	};
	return (
		<Fragment>
			<CustomDivider children={"Rate Options"} />
			<Radio.Group
				onChange={onChange}
				value={getDefaultRateValue(feedbackStateList)}
			>
				<Space direction="vertical">
					{!isEmpty(questionTypeListObj) &&
						Object.entries(
							questionTypeListObj?.defaultProps?.rateOptions ?? {},
						).map(([key, value], index) => {
							return (
								<Radio key={index} value={Number(key)}>
									{isArray(value)
										? value.map((item, index) => (
												<span
													key={index}
													style={{
														color: "gray",
														fontSize: "1.6rem",
														marginRight: ".6rem",
													}}
												>
													<item.icon />
												</span>
											))
										: ""}
								</Radio>
							);
						})}
				</Space>
			</Radio.Group>
		</Fragment>
	);
};
