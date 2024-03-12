import { Fragment } from "react/jsx-runtime";

import ErrorBoundary from "./Components/ErrorBoundary";
import { Widget } from "./Modules/Feedback/Pages";

function App() {
	return (
		<Fragment>
			<ErrorBoundary>
				<Widget />
			</ErrorBoundary>
		</Fragment>
	);
}
export default App;
