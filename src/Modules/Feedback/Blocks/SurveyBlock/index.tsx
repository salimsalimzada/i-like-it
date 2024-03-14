import { Fragment } from "react/jsx-runtime";
import { CiEdit } from "react-icons/ci";

import { CustomButton } from "../../../../Components";
import { FileUpload } from "../../Elements/FileUpload";
import { CardList } from "./CardList";
import styles from "./SurveyBlock.module.css";
export const SurveyBlock = () => {
	return (
		<Fragment>
			<div className={styles.surveyBlockContainer}>
				<div className={styles.surveyBlockWrapper}>
					<div className={styles.pageTitle}>
						Page 1
						<span className={styles.editIcon}>
							<CiEdit />{" "}
						</span>
					</div>
					<div className={styles.fileUploadContainer}>
						<FileUpload />
					</div>
					<div className={styles.dragAndDropContainer}>
						<CardList />
					</div>
					<div className={styles.submitBtn}>
						<CustomButton children="Submit" type="primary" />
					</div>
				</div>
				<div className={styles.footerBar}>
					<p>
						Powered by <span className={styles.companyTitle}>Qmeter</span>
					</p>
				</div>
			</div>
		</Fragment>
	);
};
