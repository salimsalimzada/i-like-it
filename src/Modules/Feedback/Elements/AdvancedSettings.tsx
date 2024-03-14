import { Collapse, CollapseProps } from "antd";

import { CustomDivider } from "../../../Components";
import { SmileyPosition } from "./SmileyPosition";
import { StrokePosition } from "./StrokePosition";

const items: CollapseProps["items"] = [
	{
		children: (
			<>
				<SmileyPosition />
				<StrokePosition />
			</>
		),
		key: "1",
		label: "Advanced Settings",
	},
];

export const AdvancedSettings = () => {
	return (
		<>
			<CustomDivider>
				<Collapse expandIconPosition="right" ghost items={items} />
			</CustomDivider>
		</>
	);
};
