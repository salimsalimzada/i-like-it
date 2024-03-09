import { Button, Drawer, DrawerProps } from "antd";
import { Children, FC, PropsWithChildren, useState } from "react";

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
			<Drawer
				closable={true}
				maskClosable={true}
				open={true}
				placement={placement}
				styles={{ mask: { opacity: "0" } }}
				title={title}
				width={width}
			>
				{children}
			</Drawer>
		</>
	);
};
