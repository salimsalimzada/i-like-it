import { Collapse, CollapseProps } from "antd";
import { useState } from "react";
import { TiArrowDown, TiArrowRight } from "react-icons/ti";

import { SmileyPosition } from ".././SmileyPosition";
import { StrokeColor } from ".././StrokeColor";
import { StrokePosition } from ".././StrokePosition";
import styles from "./AdvancedSettings.module.css";

export const AdvancedSettings = () => {
	const [isClicked, setIsClicked] = useState(false);

	const items: CollapseProps["items"] = [
		{
			children: (
				<>
					<SmileyPosition />
					<StrokeColor />
					<StrokePosition />
				</>
			),
			key: "1",
			label: (
				<div className={styles.labelWrapper}>
					<span className={styles.label}>Advanced Settings</span>
					<span className={styles.icon}>
						{isClicked ? <TiArrowDown /> : <TiArrowRight />}
					</span>
				</div>
			),
		},
	];

	return (
		<>
			<Collapse
				className={styles.collapseWrapper}
				expandIcon={({ isActive }) => {
					setIsClicked(Boolean(isActive));
					return null;
				}}
				ghost
				items={items}
			/>
		</>
	);
};
