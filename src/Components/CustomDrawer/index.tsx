import { Drawer, DrawerProps } from "antd";
import { FC, PropsWithChildren } from "react";

import styles from "./CustomDrawer.module.css";
type DrawerType = {
	iconPosition: string;
	placement: DrawerProps["placement"];
	title: string;
	width: DrawerProps["width"];
};

export const CustomDrawer: FC<PropsWithChildren<DrawerType>> = ({
	children,
	iconPosition,
	placement,
	title,
	width,
}) => {
	return (
		<>
			<div style={{ height: "100%" }}>
				<Drawer
					className={
						iconPosition === "right"
							? `${styles.drawerModifiedCloseBtn} ${styles.drawerWrapper}`
							: `${styles.drawerDefaultCloseBtn} ${styles.drawerWrapper}`
					}
					getContainer={false}
					open={true}
					placement={placement}
					title={<span className={styles.drawerTitle}>{title}</span>}
					width={width}
				>
					{children}
				</Drawer>
			</div>
		</>
	);
};
