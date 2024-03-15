import { Col, Row } from "antd";
import { Fragment } from "react/jsx-runtime";
import { Draggable, Droppable } from "react-beautiful-dnd";

import { CustomDivider, CustomIconBox } from "~/Components";
import { QUESTION_TYPE_LIST } from "~/Modules/Feedback/constants";

export const QuestionType = () => {
	return (
		<Fragment>
			<CustomDivider children="Question Type" />
			<Droppable droppableId="QUESTION_TYPE_LIST" isDropDisabled={true}>
				{(provided) => (
					<Row gutter={[16, 12]} ref={provided.innerRef}>
						{QUESTION_TYPE_LIST.map((item, index) => (
							<Draggable draggableId={item.id} index={index} key={item.id}>
								{(provided) => (
									<Col
										ref={provided.innerRef}
										span={8}
										{...provided.draggableProps}
										{...provided.dragHandleProps}
										style={provided.draggableProps.style}
									>
										<CustomIconBox
											icon={<item.iconComponent />}
											title={item.title}
										/>
									</Col>
								)}
							</Draggable>
						))}
					</Row>
				)}
			</Droppable>
		</Fragment>
	);
};
