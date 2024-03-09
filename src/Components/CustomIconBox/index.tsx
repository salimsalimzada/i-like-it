import { PlusCircleOutlined } from "@ant-design/icons";
import { Col } from "antd";
import { FC, PropsWithChildren, ReactElement } from "react";

import styles from "./CustomIconBoxStyle.module.css";
type CustomIconBoxType = {
	icon?: ReactElement;
	title?: string;
};
export const CustomIconBox: FC<PropsWithChildren<CustomIconBoxType>> = ({
	icon,
	title,
}) => {
	return (
		<Col span={8}>
			<div className={styles.iconContainer}>
				{title ? (
					<>
						<span className={styles.iconComponent}>{icon}</span>
						<p className={styles.iconTitle}>{title}</p>
						<span className={styles.draggableIcon}>...</span>
					</>
				) : (
					<span className={styles.iconComponent}>
						<PlusCircleOutlined />
					</span>
				)}
			</div>
		</Col>
	);
};
