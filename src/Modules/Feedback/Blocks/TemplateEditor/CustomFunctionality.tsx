import { Empty } from "antd";
import { Fragment } from "react/jsx-runtime";

import { AdvancedSettings } from "~/Modules/Feedback/Elements/AdvancedSettings";
import { MarkPages } from "~/Modules/Feedback/Elements/MarkPages";
import { RateLabels } from "~/Modules/Feedback/Elements/RateLabels";
import { RateOptions } from "~/Modules/Feedback/Elements/RateOptions";
import {
	getFirstArrayElementFromStore,
	getObjectWithWatchModeTrueProperty,
} from "~/Modules/Feedback/helpers";
import { feedBackStore } from "~/Stores/feedbackStore";
import { useStoreValue } from "~/Stores/store";

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
