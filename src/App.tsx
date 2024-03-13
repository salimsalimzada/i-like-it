import { Layout } from "antd";
import { Fragment } from "react/jsx-runtime";

import { CustomHeader } from "./Components";
import ErrorBoundary from "./Components/ErrorBoundary";
import { Widget } from "./Modules/Feedback/Pages";

const { Content, Footer, Header, Sider } = Layout;
function App() {
	return (
		<Fragment>
			<ErrorBoundary>
				<Layout>
					<CustomHeader />
					<Widget />
				</Layout>
			</ErrorBoundary>
		</Fragment>
	);
}
export default App;
