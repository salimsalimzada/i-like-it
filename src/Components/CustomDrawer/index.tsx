import { Drawer, DrawerProps } from "antd";
import { FC, PropsWithChildren } from "react";

import styles from "./CustomDrawer.module.css";
type DrawerType = {
	iconPosition: string;
	onClose: () => void;
	open: DrawerProps["open"];
	placement: DrawerProps["placement"];
	title: string;
	width: DrawerProps["width"];
};

export const CustomDrawer: FC<PropsWithChildren<DrawerType>> = ({
	children,
	iconPosition,
	onClose,
	open,
	placement,
	title,
	width,
}) => {
	return (
		<>
			<Drawer
				className={
					iconPosition === "right"
						? `${styles.drawerModifiedCloseBtn} ${styles.drawerWrapper}`
						: `${styles.drawerDefaultCloseBtn} ${styles.drawerWrapper}`
				}
				getContainer={false}
				maskClosable={false}
				onClose={onClose}
				open={open}
				placement={placement}
				title={<span className={styles.drawerTitle}>{title}</span>}
				width={width}
			>
				{children}
			</Drawer>
		</>
	);
};
