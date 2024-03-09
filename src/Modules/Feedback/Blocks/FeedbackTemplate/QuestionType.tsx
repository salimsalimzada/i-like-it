import { SmileOutlined } from "@ant-design/icons";
import { Row } from "antd";
import { Fragment } from "react/jsx-runtime";

import { CustomIconBox } from "../../../../Components";
import { QUESTION_TYPE_LIST } from "../../constants";

export const QuestionType = () => {
	return (
		<Fragment>
			<Row gutter={[24, 16]}>
				{QUESTION_TYPE_LIST.map((questionTypeObj) => {
					return (
						<CustomIconBox
							icon={<questionTypeObj.iconComponent />}
							key={questionTypeObj.id}
							title={questionTypeObj.title}
						/>
					);
				})}
			</Row>
		</Fragment>
	);
};
