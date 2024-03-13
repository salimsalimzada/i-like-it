import { Col, Layout, Row } from "antd";
import { Fragment } from "react/jsx-runtime";
import { CiEdit } from "react-icons/ci";
const { Header } = Layout;
import { CustomButton } from "..";
import styles from "./CustomHeader.module.css";
export const CustomHeader = () => {
	return (
		<Fragment>
			<Header className={styles.headerContainer}>
				<Row>
					<Col className={styles.topLeftBarContent} xs={{ span: 6 }}>
						<p>
							Task Template
							<span className={styles.editIcon}>
								<CiEdit />
							</span>
						</p>
					</Col>
					<Col className={styles.topCenterBarContent} xs={{ span: 12 }}>
						<ul className={styles.navWrapper}>
							<li> Widget </li>
							<li> Flow </li>
							<li> Preview </li>
						</ul>
					</Col>
					<Col className={styles.topRightBarContent} xs={{ span: 6 }}>
						<CustomButton children="Duplicate" />
						<CustomButton children="Save Preview" />
						<CustomButton children="Save" />
					</Col>
				</Row>
			</Header>
		</Fragment>
	);
};
