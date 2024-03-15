import { Collapse, CollapseProps } from "antd";

import { CustomDivider } from "../../../Components";
import { SmileyPosition } from "./SmileyPosition";
import { StrokeColor } from "./StrokeColor";
import { StrokePosition } from "./StrokePosition";

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
		label: "Advanced Settings",
	},
];

export const AdvancedSettings = () => {
	return (
		<>
			<CustomDivider>
				<Collapse expandIconPosition="end" ghost items={items} />
			</CustomDivider>
		</>
	);
};
