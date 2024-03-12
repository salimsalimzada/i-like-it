import { Radio, RadioChangeEvent, Space } from "antd";
import { cloneDeep, isArray, isEmpty } from "lodash";
import { Fragment } from "react/jsx-runtime";

import { CustomDivider } from "../../../../Components";
import { feedBackStore } from "../../../../Stores/feedbackStore";
import { useStore } from "../../../../Stores/store";
import {
	getDefaultRateValue,
	getFirstArrayElementFromStore,
	getKeyFromStore,
} from "../../helpers";

export const RateOptions = () => {
	const [feedbackState, setFeedbackState] = useStore(feedBackStore);
	const feedbackStateList = getFirstArrayElementFromStore(feedbackState);
	const questionTypeListObj = cloneDeep(feedbackStateList[0] || {});
	const rateOptionList = Object.entries(
		questionTypeListObj?.defaultProps?.rateOptions ?? {},
	);
	const onChange = (event: RadioChangeEvent) => {
		const [key] = getKeyFromStore(feedbackState);

		const modifiedFeedbackState = cloneDeep(feedbackStateList).map((item) => {
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
		});

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
						rateOptionList?.map(([key, value], index) => {
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
										: null}
								</Radio>
							);
						})}
				</Space>
			</Radio.Group>
		</Fragment>
	);
};
