import { Col, Row } from "antd";
import { Fragment } from "react/jsx-runtime";

const Widget = () => {
	return (
		<Fragment>
			<Row>
				<Col
					span={6}
					style={{ backgroundColor: "rebeccapurple", height: "100vh" }}
				></Col>
				<Col
					span={12}
					style={{ backgroundColor: "green", height: "100vh" }}
				></Col>
				<Col
					span={6}
					style={{ backgroundColor: "orange", height: "100vh" }}
				></Col>
			</Row>
		</Fragment>
	);
};

export default Widget;
