import { Card } from "antd";
import { FC, PropsWithChildren } from "react";
import { Fragment } from "react/jsx-runtime";

import styles from "./CardItem.module.css";
export const CardItem: FC<PropsWithChildren<{ title: string }>> = ({
	title,
}) => {
	return (
		<Fragment>
			<Card size="small" style={{ border: "1px solid red" }} title="Card">
				<p>{title}</p>
			</Card>
		</Fragment>
	);
};
