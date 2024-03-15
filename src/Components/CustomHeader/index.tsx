import { Col, Layout, Row } from "antd";
import { Fragment } from "react/jsx-runtime";
import { CiEdit } from "react-icons/ci";

import { CustomButton } from "..";
import styles from "./CustomHeader.module.css";

const { Header } = Layout;

export const CustomHeader = () => {
	return (
		<Fragment>
			<Header className={styles.headerContainer}>
				<Row
					align="middle"
					className={styles.rowContaier}
					justify="space-between"
				>
					<Col md={6} sm={6} xl={5}>
						<div className={styles.topLeftBarContent}>
							<p>
								Task Template
								<CiEdit className={styles.editIcon} />
							</p>
						</div>
					</Col>

					<Col md={12} sm={11} xl={14}>
						<div className={styles.topCenterBarContent}>
							<ul className={styles.navWrapper}>
								<li>Widget</li>
								<li>Flow</li>
								<li>Preview</li>
							</ul>
						</div>
					</Col>

					<Col md={6} sm={7} xl={5}>
						<div className={styles.topRightBarContent}>
							<CustomButton children="Duplicate" />
							<CustomButton children="Save Preview" type="default" />
							<CustomButton children="Save" type="primary" />
						</div>
					</Col>
				</Row>
			</Header>
		</Fragment>
	);
};
