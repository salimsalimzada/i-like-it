import { FC, PropsWithChildren, ReactElement } from "react";
import { MdOutlineAddCircleOutline } from "react-icons/md";
import { RiDraggable } from "react-icons/ri";

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
		<div className={styles.iconContainer}>
			{title ? (
				<>
					<span className={styles.iconComponent}>{icon}</span>
					<p className={styles.iconTitle}>{title}</p>
					<span className={styles.draggableIcon}>{<RiDraggable />}</span>
				</>
			) : (
				<span className={styles.iconComponent}>
					<MdOutlineAddCircleOutline />
				</span>
			)}
		</div>
	);
};
