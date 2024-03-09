import { Tabs, TabsProps } from "antd";
import { FC } from "react";

type CustomTabsType = {
	defaultTab: string;
	items: TabsProps["items"];
	onChange?: () => void;
};
export const CustomTabs: FC<CustomTabsType> = ({
	defaultTab,
	items,
	onChange,
}) => {
	return (
		<>
			<Tabs defaultActiveKey={defaultTab} items={items} onChange={onChange} />
		</>
	);
};
