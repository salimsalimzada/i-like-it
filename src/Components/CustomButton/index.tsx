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
	width?: string;
};
export const CustomButton: FC<PropsWithChildren<CustomButtonType>> = ({
	alignment,
	children,
	icon,
	isLoading,
	style = {},
	type,
	width = "",
}) => {
	return (
		<Button
			className={styles.customBtnStyle}
			icon={<span className={styles.icon}>{icon}</span>}
			loading={isLoading}
			style={{
				textAlign: alignment ?? "center",
				width: width,
				...style,
			}}
			type={type}
		>
			{children}
		</Button>
	);
};
