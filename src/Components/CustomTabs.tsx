import { Tabs } from "antd";
import { FC, ReactNode } from "react";

type CustomTabsType = {
	defaultTab: string;
	items: {
		content: React.ReactNode;
		icon?: ReactNode;
		key: string;
		label?: string;
	}[];
	onChange?: (key: string) => void;
};

export const CustomTabs: FC<CustomTabsType> = ({ defaultTab, items }) => {
	return (
		<Tabs
			defaultActiveKey={defaultTab}
			items={items.map(({ content, icon, key, label }) => {
				return {
					children: content,
					icon: icon && <span style={{ fontSize: "1.8rem" }}>{icon}</span>,
					key,
					label,
				};
			})}
		/>
	);
};
