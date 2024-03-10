import { DeleteOutlined, SwapOutlined } from "@ant-design/icons";
import { Card } from "antd";
import { FC, PropsWithChildren, useState } from "react";
import { DraggableProvided } from "react-beautiful-dnd";

import { SmileyRatingDefaultPropsType } from "../../types";
import styles from "./CardItem.module.css";
export const CardItem: FC<
	PropsWithChildren<{
		cardTitle?: string;
		defaultProps?: Partial<SmileyRatingDefaultPropsType>;
		emptyLabel?: string;
		provided?: DraggableProvided;
	}>
> = ({ cardTitle, defaultProps, emptyLabel, provided }) => {
	const [selectedIconKey, setSelectedIconKey] = useState<null | string>(null);
	console.log(defaultProps, "defaultProps");
	const { color, rateOptions, strokePosition } = defaultProps ?? {};
	console.log(strokePosition, "strokePosition");
	const [_, rateOptionList] =
		Object.entries(rateOptions ?? {}).find(([key]) => key === "1") ?? [];
	console.log(rateOptionList, "rateOptionList");

	const handleClick = (key: string) => {
		setSelectedIconKey((prevKey) => (prevKey !== key ? key : null));
	};

	return (
		<>
			{emptyLabel ? (
				<Card className={styles.emptyLabelMsg}>{emptyLabel}</Card>
			) : (
				<Card
					className={styles.cardContainer}
					extra={
						<div className={styles.iconWrapper}>
							<span className={styles.removeIcon}>
								<DeleteOutlined />
							</span>
							<span className={styles.moveIcon}>
								<SwapOutlined {...provided?.dragHandleProps} />
							</span>
						</div>
					}
					title={<span className={styles.cardHeaderTitle}>{cardTitle}</span>}
				>
					<Card
						className={styles.cardItem}
						style={{ [`border${strokePosition}`]: `5px solid ${color}` }}
						type="inner"
					>
						{rateOptionList?.map((item) => (
							<div className={styles.rateOptionListWrapper} key={item.key}>
								<i
									className={styles.iconItem}
									onClick={() => handleClick(item.key)}
									style={{
										color:
											selectedIconKey === item.key
												? color
												: "rgb(129, 127, 127)",
									}}
								>
									{<item.icon />}
								</i>
								<span className={styles.iconLabel}>{item.label}</span>
							</div>
						))}
					</Card>
				</Card>
			)}
		</>
	);
};
