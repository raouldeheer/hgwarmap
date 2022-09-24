import React from "react";
import { warState, warStateContext } from "./warStateContext";

const Warmap = React.lazy(() => import('./map/warmap'));
const Settings = React.lazy(() => import('./settings'));

const App = () => {
    return (
        <warStateContext.Provider value={warState}>
            <div style={{
                position: "absolute",
                top: "0",
                left: "0",
                width: "100%",
                height: "100%",
            }}>
                <Warmap />
                <Settings />
            </div>
        </warStateContext.Provider>
    );
};

export default App;
