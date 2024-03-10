import { EditOutlined } from "@ant-design/icons";
import { FC, PropsWithChildren } from "react";
import { Fragment } from "react/jsx-runtime";

import { CustomButton } from "../../../../Components";
import { FileUpload } from "../../Elements/FileUpload";
import { CardList } from "./CardList";
import styles from "./SurveyBlock.module.css";
export const SurveyBlock: FC<PropsWithChildren<{ state: any }>> = ({
	state,
}) => {
	return (
		<Fragment>
			<div className={styles.surveyBlockContainer}>
				<div className={styles.pageTitle}>
					Page 1
					<span className={styles.editIcon}>
						<EditOutlined />{" "}
					</span>
				</div>
				<div className={styles.fileUploadContainer}>
					<FileUpload />
				</div>
				<div className={styles.dragAndDropContainer}>
					<CardList state={state} />
				</div>
				<div className={styles.submitBtn}>
					<CustomButton children="Submit" />
				</div>
			</div>
		</Fragment>
	);
};
