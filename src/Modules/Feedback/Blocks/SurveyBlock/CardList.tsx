import { Card, Space } from "antd";
import { Fragment } from "react/jsx-runtime";

import { CardItem } from "../../Elements/CardItem";
import styles from "./SurveyBlock.module.css";
export const CardList = () => {
	return (
		<Fragment>
			<div className={styles.cardListContainer}>
				<p className={styles.emptyCardListMsg}>Drag and drop a question here</p>
			</div>
		</Fragment>
	);
};
