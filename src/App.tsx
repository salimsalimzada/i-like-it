import { Col, Layout, Row } from "antd";
import { Fragment } from "react/jsx-runtime";
import { DragDropContext, DropResult } from "react-beautiful-dnd";

import { CustomDrawer, CustomHeader } from "./Components";
import ErrorBoundary from "./Components/ErrorBoundary";
import { FeedbackTemplate } from "./Modules/Feedback/Blocks/FeedbackTemplate";
import { TemplateEditor } from "./Modules/Feedback/Blocks/TemplateEditor";
import { Widget } from "./Modules/Feedback/Pages";
import { QUESTION_TYPE_LIST } from "./Modules/Feedback/constants";
import { copyItems, reorderItems } from "./Modules/Feedback/helpers";
import { DrawerStatusObject, QuestionListType } from "./Modules/Feedback/types";
import { feedBackStore } from "./Stores/feedbackStore";
import { drawerStatus } from "./Stores/generalStore";
import { useStore } from "./Stores/store";

function App() {
	const [feedBackState, setFeedBackState] = useStore(feedBackStore);
	const [drawerState, setDrawerState] = useStore(drawerStatus);

	const toggleDrawer = (drawerVal: string) => {
		setDrawerState({
			...drawerState,
			[drawerVal]: !drawerState[drawerVal as keyof DrawerStatusObject],
		});
	};
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
			<ErrorBoundary>
				<Layout>
					<CustomHeader />
					<Row gutter={[16, 24]} justify="center" style={{ height: "100vh" }}>
						<DragDropContext onDragEnd={onDragEnd}>
							<ErrorBoundary>
								<Col lg={7} md={5} sm={4}>
									<CustomDrawer
										iconPosition="right"
										onClose={() => toggleDrawer("leftDrawerOpen")}
										open={drawerState.leftDrawerOpen}
										placement="left"
										title="Feedback template"
										width={"378"}
									>
										<FeedbackTemplate />
									</CustomDrawer>
								</Col>
							</ErrorBoundary>
							<ErrorBoundary>
								<Col lg={10} md={14} sm={16}>
									{/* implementing routing to different pages */}
									<Widget />
								</Col>
							</ErrorBoundary>
						</DragDropContext>
						<ErrorBoundary>
							<Col lg={7} md={5} sm={4}>
								<CustomDrawer
									iconPosition="right"
									onClose={() => toggleDrawer("rightDrawerOpen")}
									open={drawerState.rightDrawerOpen}
									placement="right"
									title="Template Editor"
									width={"378"}
								>
									<TemplateEditor />
								</CustomDrawer>
							</Col>
						</ErrorBoundary>
					</Row>
				</Layout>
			</ErrorBoundary>
		</Fragment>
	);
}
export default App;
