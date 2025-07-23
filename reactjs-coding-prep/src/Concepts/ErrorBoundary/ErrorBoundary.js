// What is an Error Boundary in React?

// An Error Boundary is a special React component that catches JavaScript errors anywhere in its child component tree, logs them, and displays a fallback UI instead of the component tree that crashed.

// What kind of errors does an Error Boundary catch?
// An Error Boundary in React catches runtime errors that happen during rendering, in lifecycle methods, and during the constructor of class components — but only in the components below it in the tree.


// Error boundaries do not catch:

// Errors in event handlers (you must use try/catch)

// Errors in async code (e.g., setTimeout, fetch)
// inside the error boundary component itself	>> 	The error boundary cannot catch its own errors
import React from 'react';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        // Update state so fallback UI is rendered
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        // You can log the error to a monitoring service
        console.error("Caught by Error Boundary:", error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return <h2>Something went wrong.</h2>;
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
