import { Fragment } from "react/jsx-runtime";

import { QuestionType } from ".";
import { CustomDivider } from "../../../../Components";

export const FeedbackTemplate = () => {
	return (
		<Fragment>
			<QuestionType />
			<CustomDivider />
			<CustomDivider children="Customer Information" />
		</Fragment>
	);
};
export { QuestionType } from "./QuestionType";
