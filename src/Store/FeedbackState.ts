import { v4 as uuidv4 } from "uuid";

import { createAtom } from "./store";

const feedBackStore = createAtom<Record<string, any>>({
	[uuidv4()]: [],
});

export { feedBackStore };
