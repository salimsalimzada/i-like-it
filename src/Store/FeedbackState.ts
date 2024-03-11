import { v4 as uuidv4 } from "uuid";

import { QuestionListStoreType } from "../Modules/Feedback/types";
import { createAtom } from "./store";

const feedBackStore = createAtom<QuestionListStoreType>({
	[uuidv4()]: [],
});

export { feedBackStore };
