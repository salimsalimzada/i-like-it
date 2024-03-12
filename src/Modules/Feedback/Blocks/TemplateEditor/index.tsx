import { Space } from "antd";

import { CustomTabs } from "../../../../Components/CustomTabs";
import ErrorBoundary from "../../../../Components/ErrorBoundary";
import { Connection } from "./Connection";
import { CustomFunctionality } from "./CustomFunctionality";
import { Settings } from "./Settings";
import styles from "./TemplateEditorStyle.module.css";

export const TemplateEditor = () => {
	const items = [
		{
			children: (
				<ErrorBoundary>
					<CustomFunctionality />
				</ErrorBoundary>
			),
			key: "1",
			label: "Tab 1",
		},
		{
			children: <Settings />,
			key: "2",
			label: "Tab 2",
		},
		{
			children: <Connection />,
			key: "3",
			label: "Tab 3",
		},
	];
	return (
		<>
			<Space direction="vertical" size={"middle"}>
				<p className={styles.editorTextContent}>
					By customizing this template you will gather more precise information
					for your business field
				</p>
				<CustomTabs defaultTab="1" items={items} />
			</Space>
		</>
	);
};
