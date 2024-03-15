import { Divider, DividerProps } from "antd";
import { CSSProperties, FC, Fragment, PropsWithChildren } from "react";

import styles from "./CustomDivider.module.css";

type CustomDividerType = {
	orientation?: DividerProps["orientation"];
	style?: CSSProperties;
};
export const CustomDivider: FC<PropsWithChildren<CustomDividerType>> = ({
	children,
	orientation,
}) => {
	return (
		<Fragment>
			<Divider className={styles.customDividerStyle} orientation={orientation}>
				{children}
			</Divider>
		</Fragment>
	);
};
