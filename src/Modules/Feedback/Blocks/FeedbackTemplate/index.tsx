import { Fragment } from "react/jsx-runtime";

import { CustomDivider } from "../../../../Components";
import { CustomerInformation } from "./CustomerInformation";
import { MultiLanguages } from "./MultiLanguages";
import { QuestionType } from "./QuestionType";

export const FeedbackTemplate = () => {
	return (
		<Fragment>
			<QuestionType />
			<CustomDivider />
			<CustomerInformation />
			<MultiLanguages />
		</Fragment>
	);
};
