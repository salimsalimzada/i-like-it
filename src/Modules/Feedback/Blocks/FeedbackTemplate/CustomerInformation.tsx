import { Col, Row } from "antd";
import { Fragment } from "react/jsx-runtime";
import { Draggable, Droppable } from "react-beautiful-dnd";

import { CustomButton, CustomDivider, CustomIconBox } from "~/Components";
import { CUSTOMER_INFROMATION_LIST } from "~/Modules/Feedback/constants";

export const CustomerInformation = () => {
	return (
		<Fragment>
			<CustomDivider children="Customer Information" />
			<Droppable droppableId="CUSTOMER_INFROMATION_LIST" isDropDisabled={true}>
				{(provided) => (
					<Row gutter={[16, 12]} ref={provided.innerRef}>
						{CUSTOMER_INFROMATION_LIST.map((item, index) => (
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
			<div style={{ margin: "1.5rem 0" }}>
				<CustomButton children="See More" type="default" width="100%" />
			</div>
		</Fragment>
	);
};
