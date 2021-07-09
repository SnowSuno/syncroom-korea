import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import {createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import rootReducer from "./store";
import ReduxThunk from "redux-thunk";

import {BrowserView, MobileView} from "react-device-detect";
import BrowserRoutes from "./routes/browser/Routes";
import MobileRoutes from "./routes/mobile/Routes";

const store = createStore(
    rootReducer,
    applyMiddleware(ReduxThunk)
);

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserView>
                <BrowserRoutes />
            </BrowserView>
            <MobileView>
                <MobileRoutes />
            </MobileView>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

