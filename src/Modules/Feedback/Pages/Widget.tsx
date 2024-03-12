import { Col, Row } from "antd";
import { Fragment } from "react/jsx-runtime";
import { DragDropContext, DropResult } from "react-beautiful-dnd";

import { CustomDrawer } from "../../../Components/CustomDrawer";
import ErrorBoundary from "../../../Components/ErrorBoundary";
import { feedBackStore } from "../../../Stores/feedbackStore";
import { useStore } from "../../../Stores/store";
import { FeedbackTemplate } from "../Blocks/FeedbackTemplate";
import { SurveyBlock } from "../Blocks/SurveyBlock";
import { TemplateEditor } from "../Blocks/TemplateEditor";
import { QUESTION_TYPE_LIST } from "../constants";
import { copyItems, reorderItems } from "../helpers";
import { QuestionListType } from "../types";

const Widget = () => {
	const [feedBackState, setFeedBackState] = useStore(feedBackStore);
	const onDragEnd = (result: DropResult) => {
		const { destination, source } = result;
		if (!destination) return;
		switch (source.droppableId) {
			case destination.droppableId:
				setFeedBackState({
					...feedBackState,
					[destination.droppableId]: reorderItems(
						feedBackState[source.droppableId] as QuestionListType,
						source.index,
						destination.index,
					),
				});
				break;
			case "QUESTION_TYPE_LIST":
				setFeedBackState({
					...feedBackState,
					[destination.droppableId]: copyItems(
						QUESTION_TYPE_LIST,
						feedBackState[destination.droppableId] as QuestionListType,
						source,
						destination,
					),
				});

				break;
			default:
				feedBackState;
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
					<ErrorBoundary>
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
					</ErrorBoundary>
					<ErrorBoundary>
						<Col span={12}>
							<SurveyBlock />
						</Col>
					</ErrorBoundary>
				</DragDropContext>
				<ErrorBoundary>
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
				</ErrorBoundary>
			</Row>
		</Fragment>
	);
};

export default Widget;
