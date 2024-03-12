import { v4 as uuidv4 } from "uuid";

import { QuestionListStoreType } from "../Modules/Feedback/types";
import { createStore } from "./store";

const feedBackStore = createStore<QuestionListStoreType>({
	[uuidv4()]: [],
});

export { feedBackStore };
