import { Col, Row } from "antd";
import { useState } from "react";
import { Fragment } from "react/jsx-runtime";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { v4 as uuidv4 } from "uuid";

import { CustomDrawer } from "../../../Components/CustomDrawer";
import { FeedbackTemplate } from "../Blocks/FeedbackTemplate";
import { SurveyBlock } from "../Blocks/SurveyBlock";
import { TemplateEditor } from "../Blocks/TemplateEditor";
import { QUESTION_TYPE_LIST } from "../constants";
import { copyItems, reorderItems } from "../helpers";
import { QuestionListType } from "../types";

const Widget = () => {
	const [store, setStore] = useState<Record<string, unknown>>({
		[uuidv4()]: [],
	});
	const onDragEnd = (result: DropResult) => {
		const { destination, source } = result;
		console.log(source, "source");
		console.log(destination, "destination");
		console.log(store, "store");
		if (!destination) return;

		switch (source.droppableId) {
			case destination.droppableId:
				setStore({
					...store,
					[destination.droppableId]: reorderItems(
						store[source.droppableId] as QuestionListType,
						source.index,
						destination.index,
					),
				});
				break;
			case "QUESTION_TYPE_LIST":
				setStore({
					...store,
					[destination.droppableId]: copyItems(
						QUESTION_TYPE_LIST,
						store[destination.droppableId] as QuestionListType,
						source,
						destination,
					),
				});

				break;
			default:
				store;
				break;
		}
	};

	return (
		<Fragment>
			<Row
				gutter={[16, 24]}
				style={{
					minHeight: "100vh",
				}}
			>
				<DragDropContext onDragEnd={onDragEnd}>
					<Col span={6}>
						<CustomDrawer
							iconPosition="right"
							placement="left"
							title="Feedback template"
							width={"400px"}
						>
							<FeedbackTemplate />
						</CustomDrawer>
					</Col>
					<Col span={12}>
						<SurveyBlock store={store} />
					</Col>
				</DragDropContext>
				<Col span={6}>
					{/* <CustomDrawer
						iconPosition="right"
						placement="right"
						title="Template Editor"
						width={"400px"}
					>
						<TemplateEditor />
					</CustomDrawer> */}
				</Col>
			</Row>
		</Fragment>
	);
};

export default Widget;
