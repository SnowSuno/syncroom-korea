import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import {createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import rootReducer from "./modules";
import ReduxThunk from "redux-thunk";
import {persistStore} from "redux-persist";
import {PersistGate} from "redux-persist/integration/react";

import {BrowserView, MobileView} from "react-device-detect";
import BrowserRoutes from "./routes/BrowserRoutes";
import MobileRoutes from "./routes/MobileRoutes";

const store = createStore(
    rootReducer,
    applyMiddleware(ReduxThunk)
);
const persistor = persistStore(store);

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <BrowserView>
                    <div id="browser">
                        <BrowserRoutes />
                    </div>
                </BrowserView>
                <MobileView>
                    <div id="mobile">
                        <MobileRoutes />
                    </div>
                </MobileView>
            </PersistGate>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
