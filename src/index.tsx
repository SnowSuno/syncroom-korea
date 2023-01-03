import React from 'react';
import ReactDOM from 'react-dom';
import './style.scss';

import {createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import rootReducer from "./modules";
import ReduxThunk from "redux-thunk";
import {persistStore} from "redux-persist";
import {PersistGate} from "redux-persist/integration/react";

import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom";
import Home from "./routes/Home";
import Join from "./routes/Join";
import Notice from "./routes/Notice";
import Donate from "./routes/Donate";
import NotFound from "./routes/NotFound";
import Modal from "./components.old/Modal";
import Sidebar from "./components.old/Sidebar";

const store = createStore(
    rootReducer,
    applyMiddleware(ReduxThunk)
);
const persistor = persistStore(store);

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <Router>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route path="/join" component={Join}/>
                        <Route path="/notice" component={Notice}/>
                        <Route path="/buymeacoffee" component={Donate}/>
                        <Route exact path="/notfound" component={NotFound} />
                        <Route component={() => <Redirect to="/notfound"/>}/>
                    </Switch>
                    <Modal />
                    <Sidebar />
                </Router>

            </PersistGate>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
