import { Button } from "antd";
import { BaseButtonProps } from "antd/es/button/button";
import { CSSProperties, FC, PropsWithChildren } from "react";

import styles from "./CustomButton.module.css";
type CustomButtonType = {
	alignment?: "center" | "left" | "right";
	icon?: BaseButtonProps["icon"];
	isLoading?: boolean;
	style?: CSSProperties;
	type?: BaseButtonProps["type"];
};
export const CustomButton: FC<PropsWithChildren<CustomButtonType>> = ({
	alignment,
	children,
	icon,
	isLoading,
	style = {},
	type,
}) => {
	return (
		<Button
			className={styles.customBtnStyle}
			icon={<span className={styles.icon}>{icon}</span>}
			loading={isLoading}
			style={{ textAlign: alignment ?? "center", ...style }}
			type={type}
		>
			{children}
		</Button>
	);
};
