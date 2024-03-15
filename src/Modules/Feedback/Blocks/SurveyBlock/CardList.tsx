import { Space } from "antd";
import { Fragment } from "react/jsx-runtime";
import { Draggable, Droppable } from "react-beautiful-dnd";

import { CardItem } from "~/Modules/Feedback/Elements/CardItem";
import { QuestionListType } from "~/Modules/Feedback/types";
import { feedBackStore } from "~/Stores/feedbackStore";
import { useStore } from "~/Stores/store";

import styles from "./SurveyBlock.module.css";
export const CardList = () => {
	const [feedBackState, setFeedBackState] = useStore(feedBackStore);
	const handleDelete = (id?: string) => {
		if (id) {
			const key = Object.keys(feedBackState)?.[0];
			const filteredData = Object.values(feedBackState)?.[0]?.filter(
				(item: QuestionListType[number]) => item.id !== id,
			);
			setFeedBackState({
				...feedBackState,
				[key]: filteredData,
			});
		}
	};
	return (
		<Fragment>
			<Space className={styles.cardListContainer} direction="vertical">
				{Object.keys(feedBackState).map((list) => (
					<Droppable droppableId={list} key={list}>
						{(provided) => (
							<div ref={provided.innerRef}>
								{feedBackState[list].length ? (
									feedBackState[list].map(
										(item: QuestionListType[number], index: number) => (
											<Draggable
												draggableId={item.id}
												index={index}
												key={item.id}
											>
												{(provided) => (
													<div
														ref={provided.innerRef}
														{...provided.draggableProps}
													>
														<CardItem
															cardTitle={item.title}
															defaultProps={item.defaultProps}
															handleDelete={handleDelete}
															id={item.id}
															provided={provided}
														/>
													</div>
												)}
											</Draggable>
										),
									)
								) : (
									<>
										<CardItem emptyLabel="Drag and drop a question here" />
									</>
								)}
								{provided.placeholder}
							</div>
						)}
					</Droppable>
				))}
			</Space>
		</Fragment>
	);
};
