import { Col, Layout, Row, Tooltip } from "antd";
import { Fragment } from "react/jsx-runtime";
import { CiEdit } from "react-icons/ci";
import { MdOutlineMenuOpen } from "react-icons/md";

import { CustomButton } from "..";
import { drawerStatus } from "../../Stores/generalStore";
import { useStore } from "../../Stores/store";
import styles from "./CustomHeader.module.css";

const { Header } = Layout;

export const CustomHeader = () => {
	const [_, setGeneralState] = useStore(drawerStatus);
	const closeBothDrawers = () => {
		setGeneralState({
			leftDrawerOpen: true,
			rightDrawerOpen: true,
		});
	};
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
								<Tooltip placement="bottom" title={"Open Drawers"}>
									<i className={styles.menuOpenIcon} onClick={closeBothDrawers}>
										<MdOutlineMenuOpen />
									</i>
								</Tooltip>
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
