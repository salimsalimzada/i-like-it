import { FC } from "react";
import { Fragment } from "react/jsx-runtime";
import { Draggable, Droppable } from "react-beautiful-dnd";

import { CardItem } from "../../Elements/CardItem";
import styles from "./SurveyBlock.module.css";
export const CardList: FC<{ state: any }> = ({ state }) => {
	console.log(state, "in cardlist");
	return (
		<Fragment>
			<div className={styles.cardListContainer}>
				{Object.keys(state).map((list) => (
					<Droppable droppableId={list} key={list}>
						{(provided) => (
							<div ref={provided.innerRef}>
								{state[list].length ? (
									state[list].map((item: any, index: number) => (
										<Draggable
											draggableId={item.id}
											index={index}
											key={item.id}
										>
											{(provided) => (
												<div
													ref={provided.innerRef}
													{...provided.draggableProps}
													style={provided.draggableProps.style}
													{...provided.dragHandleProps}
												>
													<CardItem title={item.title} />
												</div>
											)}
										</Draggable>
									))
								) : (
									<>
										<p className={styles.emptyCardListMsg}>
											Drag and drop a question here
										</p>
									</>
								)}
								{provided.placeholder}
							</div>
						)}
					</Droppable>
				))}
			</div>
		</Fragment>
	);
};
