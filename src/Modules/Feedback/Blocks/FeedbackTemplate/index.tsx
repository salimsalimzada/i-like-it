import { Fragment } from "react/jsx-runtime";

import { CustomDivider } from "~/Components";
import ErrorBoundary from "~/Components/ErrorBoundary";

import { CustomerInformation } from "./CustomerInformation";
import { MultiLanguages } from "./MultiLanguages";
import { QuestionType } from "./QuestionType";

export const FeedbackTemplate = () => {
	return (
		<Fragment>
			<ErrorBoundary>
				<QuestionType />
				<CustomDivider />
				<CustomerInformation />
				<MultiLanguages />
			</ErrorBoundary>
		</Fragment>
	);
};
