import React from "react";
import {BrowserView, MobileView} from "react-device-detect";
import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";

import BrowserRoutes from "./routes/browser/Routes";
import MobileRoutes from "./routes/mobile/Routes";


function App() {
    return (
        <>
            <BrowserView>
                <BrowserRoutes />
            </BrowserView>
            <MobileView>
                <MobileRoutes />
            </MobileView>
        </>
    )
}

export default App;
