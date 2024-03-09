import { Fragment } from "react/jsx-runtime";

import { QuestionType } from ".";
import { CustomDivider } from "../../../../Components";

export const FeedbackTemplate = () => {
	return (
		<Fragment>
			<CustomDivider children="Question Type" />
			<QuestionType />
			<CustomDivider />
			<CustomDivider children="Customer Information" />
		</Fragment>
	);
};
export { QuestionType } from "./QuestionType";
