import { Empty } from "antd";
import { Fragment } from "react/jsx-runtime";

import { feedBackStore } from "../../../../Stores/feedbackStore";
import { useStoreValue } from "../../../../Stores/store";
import { AdvancedSettings } from "../../Elements/AdvancedSettings";
import { MarkPages } from "../../Elements/MarkPages";
import { RateLabels } from "../../Elements/RateLabels";
import { RateOptions } from "../../Elements/RateOptions";
import {
	getFirstArrayElementFromStore,
	getObjectWithWatchModeTrueProperty,
} from "../../helpers";

export const CustomFunctionality = () => {
	const store = useStoreValue(feedBackStore);
	const feedbackStateList = getFirstArrayElementFromStore(store);
	const { title } = getObjectWithWatchModeTrueProperty(feedbackStateList) ?? {};
	return (
		<Fragment>
			{feedbackStateList.length === 0 || !title?.includes("Smiley Rating") ? (
				<Empty />
			) : (
				<>
					<RateOptions />
					<RateLabels />
					<MarkPages />
					<AdvancedSettings />
				</>
			)}
		</Fragment>
	);
};
