import { Col, Layout, Row } from "antd";
import { Fragment } from "react/jsx-runtime";

import { CustomDrawer } from "../../../Components/CustomDrawer";
import { FeedbackTemplate } from "../Blocks/FeedbackTemplate";
import { SurveyBlock } from "../Blocks/SurveyBlock";

const Widget = () => {
	return (
		<Fragment>
			<Layout>
				<Row gutter={[16, 24]}>
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
					<Col
						span={6}
						style={{ backgroundColor: "orange", height: "100vh" }}
					></Col>
				</Row>
			</Layout>
		</Fragment>
	);
};

export default Widget;
