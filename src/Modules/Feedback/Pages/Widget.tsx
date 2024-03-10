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
	const [state, setState] = useState<Record<string, unknown>>({
		[uuidv4()]: [],
	});
	const onDragEnd = (result: DropResult) => {
		const { destination, source } = result;
		console.log(source, "source");
		console.log(destination, "destination");
		console.log(state, "state");
		if (!destination) return;

		switch (source.droppableId) {
			case destination.droppableId:
				setState({
					...state,
					[destination.droppableId]: reorderItems(
						state[source.droppableId] as QuestionListType,
						source.index,
						destination.index,
					),
				});
				break;
			case "QUESTION_TYPE_LIST":
				setState({
					...state,
					[destination.droppableId]: copyItems(
						QUESTION_TYPE_LIST,
						state[destination.droppableId] as QuestionListType,
						source,
						destination,
					),
				});

				break;
			default:
				state;
				break;
		}
	};

	console.log(state, "state");
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
						<SurveyBlock state={state} />
					</Col>
				</DragDropContext>
				<Col span={6}>
					<CustomDrawer
						iconPosition="right"
						placement="right"
						title="Template Editor"
						width={"400px"}
					>
						<TemplateEditor />
					</CustomDrawer>
				</Col>
			</Row>
		</Fragment>
	);
};

export default Widget;
