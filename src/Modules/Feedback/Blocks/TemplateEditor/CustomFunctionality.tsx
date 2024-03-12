import { Empty } from "antd";
import { Fragment } from "react/jsx-runtime";

import { feedBackStore } from "../../../../Stores/feedbackStore";
import { useStoreValue } from "../../../../Stores/store";
import { RateLabel } from "../../Elements/RateLabels";
import { RateOptions } from "../../Elements/RateOptions";
import { StrokePosition } from "../../Elements/StrokePosition";
import { getFirstArrayElementFromStore } from "../../helpers";

export const CustomFunctionality = () => {
	const store = useStoreValue(feedBackStore);
	const feedbackStateList = getFirstArrayElementFromStore(store);
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
