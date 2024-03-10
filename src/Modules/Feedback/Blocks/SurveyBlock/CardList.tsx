import { Space } from "antd";
import { FC } from "react";
import { Fragment } from "react/jsx-runtime";
import { Draggable, Droppable } from "react-beautiful-dnd";

import { CardItem } from "../../Elements/CardItem";
import { QuestionListType } from "../../types";
import styles from "./SurveyBlock.module.css";
export const CardList: FC<{ store: any }> = ({ store }) => {
	console.log(store, "in cardlist");
	return (
		<Fragment>
			<Space className={styles.cardListContainer} direction="vertical">
				{Object.keys(store).map((list) => (
					<Droppable droppableId={list} key={list}>
						{(provided) => (
							<div ref={provided.innerRef}>
								{store[list].length ? (
									store[list].map(
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
