import { DeleteOutlined, SwapOutlined } from "@ant-design/icons";
import { Card } from "antd";
import { cloneDeep } from "lodash";
import { FC, PropsWithChildren, useEffect, useState } from "react";
import { DraggableProvided } from "react-beautiful-dnd";

import {
	getFirstArrayElementFromStore,
	getKeyFromStore,
} from "~/Modules/Feedback/helpers";
import {
	QuestionListType,
	SmileyRatingDefaultPropsType,
} from "~/Modules/Feedback/types";
import { feedBackStore } from "~/Stores/feedbackStore";
import { useStore } from "~/Stores/store";

import styles from "./CardItem.module.css";
export const CardItem: FC<
	PropsWithChildren<{
		cardTitle?: string;
		defaultProps?: Partial<SmileyRatingDefaultPropsType>;
		emptyLabel?: string;
		handleDelete?: (id?: string) => void;
		id?: string;
		provided?: DraggableProvided;
	}>
> = ({ cardTitle, defaultProps, emptyLabel, handleDelete, id, provided }) => {
	const [feedbackState, setFeedbackState] = useStore(feedBackStore);
	const [selectedIconKey, setSelectedIconKey] = useState<null | string>(null);
	const {
		defaultRateValue,
		defaultSmileyPosition,
		defaultStrokePosition,
		rateOptions,
		watchMode,
	} = defaultProps ?? {};
	const [_, rateOptionList] =
		Object.entries(rateOptions ?? {}).find(
			([key]) => key === defaultRateValue,
		) ?? [];

	const feedbackStateList = getFirstArrayElementFromStore(feedbackState);
	const operations = {
		handleClick: (key: string) => {
			setSelectedIconKey((prevKey) => (prevKey !== key ? key : null));
		},
		watchCard: (id?: string) => {
			const [key] = getKeyFromStore(feedbackState);

			const modifiedFeedbackList = cloneDeep(feedbackStateList).map(
				(item: QuestionListType[number]) => ({
					...item,
					defaultProps: {
						...cloneDeep(item.defaultProps),
						watchMode: item.id === id,
					},
				}),
			);

			setFeedbackState({
				[key]: modifiedFeedbackList as QuestionListType,
			});
		},
	};
	useEffect(() => {
		if (
			feedbackStateList.length === 1 &&
			!feedbackStateList[0].defaultProps.watchMode
		) {
			const singleCardId = feedbackStateList[0].id;
			operations.watchCard(singleCardId);
		}
	}, [feedbackStateList]);

	return (
		<>
			{emptyLabel ? (
				<Card className={styles.emptyLabelMsg}>{emptyLabel}</Card>
			) : (
				<Card
					className={styles.cardContainer}
					extra={
						<div className={styles.iconWrapper}>
							<span
								className={styles.removeIcon}
								onClick={(e) => {
									e.stopPropagation();
									handleDelete?.(id);
								}}
							>
								<DeleteOutlined />
							</span>
							<span className={styles.moveIcon}>
								<SwapOutlined {...provided?.dragHandleProps} />
							</span>
						</div>
					}
					onClick={() => operations.watchCard?.(id)}
					style={watchMode ? { border: "4px solid #B0C5A4" } : {}}
					title={<span className={styles.cardHeaderTitle}>{cardTitle}</span>}
				>
					<Card
						className={`${styles.cardItem}  ${!(defaultSmileyPosition === "space-between") && styles[defaultSmileyPosition ?? ""]}  `}
						style={{
							[`${defaultStrokePosition}`]: `5px solid ${defaultProps?.defaultColor}`,
						}}
						type="inner"
					>
						{rateOptionList?.map((item) => (
							<div className={styles.rateOptionListWrapper} key={item.key}>
								<i
									className={styles.iconItem}
									onClick={() => operations.handleClick(item.key)}
									style={{
										color:
											selectedIconKey === item.key
												? defaultProps?.defaultColor
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
