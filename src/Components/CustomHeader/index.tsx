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
					<Col className={styles.topLeftBarContent} xs={{ span: 4 }}>
						<p>
							Task Template
							<CiEdit className={styles.editIcon} />
						</p>
					</Col>
					<Col
						className={styles.topCenterBarContent}
						xs={{ offset: 1, span: 12 }}
					>
						<ul className={styles.navWrapper}>
							<li> Widget </li>
							<li> Flow </li>
							<li> Preview </li>
						</ul>
					</Col>
					<Col
						className={styles.topRightBarContent}
						xs={{ offset: 2, span: 5 }}
					>
						<CustomButton children="Duplicate" />
						<CustomButton children="Save Preview" type="default" />
						<CustomButton children="Save" type="primary" />
					</Col>
				</Row>
			</Header>
		</Fragment>
	);
};
