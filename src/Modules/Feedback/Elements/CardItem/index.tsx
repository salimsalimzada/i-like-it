import { Card } from "antd";
import { Fragment } from "react/jsx-runtime";

import styles from "./CardItem.module.css";
export const CardItem = () => {
	return (
		<Fragment>
			<Card size="small" style={{ border: "1px solid red" }} title="Card">
				<p>Card content</p>
				<p>Card content</p>
			</Card>
		</Fragment>
	);
};
