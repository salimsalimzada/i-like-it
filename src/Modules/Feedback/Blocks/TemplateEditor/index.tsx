import { Space } from "antd";
import { CiEdit, CiSettings } from "react-icons/ci";
import { TbCloudDataConnection } from "react-icons/tb";

import { CustomTabs } from "~/Components/CustomTabs";
import ErrorBoundary from "~/Components/ErrorBoundary";

import { Connection } from "./Connection";
import { CustomFunctionality } from "./CustomFunctionality";
import { Settings } from "./Settings";
import styles from "./TemplateEditorStyle.module.css";

export const TemplateEditor = () => {
	const items = [
		{
			content: (
				<ErrorBoundary>
					<CustomFunctionality />
				</ErrorBoundary>
			),
			icon: <CiEdit />,
			key: "1",
		},
		{
			content: <Settings />,
			icon: <CiSettings />,
			key: "2",
		},
		{
			content: <Connection />,
			icon: <TbCloudDataConnection />,
			key: "3",
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
