import { Button } from "antd";
import { BaseButtonProps } from "antd/es/button/button";
import { FC, PropsWithChildren } from "react";

import styles from "./CustomButton.module.css";
type CustomButtonType = {
	icon?: BaseButtonProps["icon"];
	isLoading?: boolean;
	type?: BaseButtonProps["type"];
};
export const CustomButton: FC<PropsWithChildren<CustomButtonType>> = ({
	children,
	icon,
	isLoading,
	type,
}) => {
	return (
		<Button
			className={styles.customBtnStyle}
			icon={icon}
			loading={isLoading}
			type={type}
		>
			{children}
		</Button>
	);
};
