import { Result } from "antd";
import React, { Component, ReactNode } from "react";

type ErrorBoundaryProps = {
	children: ReactNode;
};

type ErrorBoundaryState = {
	error: Error | null;
	hasError: boolean;
};

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
	constructor(props: ErrorBoundaryProps) {
		super(props);
		this.state = { error: null, hasError: false };
	}

	static getDerivedStateFromError(error: Error): ErrorBoundaryState {
		return { error, hasError: true };
	}

	componentDidCatch(error: Error, info: React.ErrorInfo): void {
		console.log(error, info);
	}

	render(): ReactNode {
		if (this.state.hasError) {
			return (
				<Result
					status="error"
					subTitle={`${this.state.error?.message}`}
					title="Something went wrong"
				/>
			);
		}
		return this.props.children;
	}
}

export default ErrorBoundary;
