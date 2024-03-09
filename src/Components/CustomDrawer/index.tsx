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
	placement,
	title,
	width,
}) => {
	return (
		<>
			<Drawer
				getContainer={false}
				open={true}
				placement={placement}
				title={title}
				width={width}
			>
				{children}
			</Drawer>
		</>
	);
};
