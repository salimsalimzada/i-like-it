import { DrawerStatusObject } from "../Modules/Feedback/types";
import { createStore } from "./store";

const drawerStatus = createStore<DrawerStatusObject>({
	leftDrawerOpen: true,
	rightDrawerOpen: true,
});

export { drawerStatus };
