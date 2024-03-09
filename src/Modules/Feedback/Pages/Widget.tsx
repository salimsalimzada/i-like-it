import { Col, Row } from "antd";
import { Fragment } from "react/jsx-runtime";

import { CustomDrawer } from "../../../Components/CustomDrawer";
import { FeedbackTemplate } from "../Blocks/FeedbackTemplate";
import { SurveyBlock } from "../Blocks/SurveyBlock";
import { TemplateEditor } from "../Blocks/TemplateEditor";

const Widget = () => {
	return (
		<Fragment>
			<Row
				gutter={[16, 24]}
				style={{
					minHeight: "100vh",
				}}
			>
				<Col span={6}>
					<CustomDrawer
						iconPosition="right"
						placement="left"
						title="Feedback template"
						width={"400px"}
					>
						<FeedbackTemplate />
					</CustomDrawer>
				</Col>
				<Col span={12}>
					<SurveyBlock />
				</Col>
				<Col span={6}>
					<CustomDrawer
						iconPosition="right"
						placement="right"
						title="Template Editor"
						width={"400px"}
					>
						<TemplateEditor />
					</CustomDrawer>
				</Col>
			</Row>
		</Fragment>
	);
};

export default Widget;
