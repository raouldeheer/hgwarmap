import React from "react";
import ReactDOM from "react-dom/client";

const App = React.lazy(() => import('./App'));

const rootElement = document.getElementById("root");
if (rootElement) {
    const root = ReactDOM.createRoot(rootElement);
    root.render(
        <React.Suspense>
            <App />
        </React.Suspense>
    );
} else console.error("root element not found!");
