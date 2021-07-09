import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


import {BrowserView, MobileView} from "react-device-detect";
import BrowserRoutes from "./routes/browser/Routes";
import MobileRoutes from "./routes/mobile/Routes";

ReactDOM.render(
    <React.StrictMode>
        <BrowserView>
            <BrowserRoutes />
        </BrowserView>
        <MobileView>
            <MobileRoutes />
        </MobileView>
    </React.StrictMode>,
    document.getElementById('root')
);

