import { Suspense } from "react";
import ReactDOM from "react-dom/client";

import App from "./App.tsx";
import "./normalize.css";
// implement ErrorBoundary
// Use Routing with lazy loading
ReactDOM.createRoot(document.getElementById("root")!).render(
	// <React.StrictMode>
	<Suspense
		fallback={
			<>
				<h3>Loading...</h3>
			</>
		}
	>
		<App />
	</Suspense>,
	// </React.StrictMode>,
);
