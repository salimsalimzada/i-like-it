import { Empty } from "antd";
import { Fragment } from "react/jsx-runtime";

import { feedBackStore } from "../../../../Store/FeedbackState";
import { useCustomAtomValue } from "../../../../Store/store";
import { RateLabel } from "../../Elements/RateLabels";
import { RateOptions } from "../../Elements/RateOptions";
import { StrokePosition } from "../../Elements/StrokePosition";

export const CustomFunctionality = () => {
	const store = useCustomAtomValue(feedBackStore);
	const feedbackStateList = Object.values(store ?? {})?.[0];
	console.log(feedbackStateList, "feedbackStateList in CustomFunctioality");
	return (
		<Fragment>
			{feedbackStateList.length === 0 ? (
				<Empty />
			) : (
				<>
					<RateOptions />
					<RateLabel />
					<StrokePosition />
				</>
			)}
		</Fragment>
	);
};
