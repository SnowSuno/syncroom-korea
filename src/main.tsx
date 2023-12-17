import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./modules";
import ReduxThunk from "redux-thunk";

import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import Home from "@/routes/Home";
import Join from "./routes/Join";
import Notice from "./routes/Notice";
import Donate from "./routes/Donate";
import NotFound from "./routes/NotFound";
import Modal from "./components/Modal";
import Sidebar from "./components/Sidebar";
import { QueryClient, QueryClientProvider } from "react-query";

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/join" component={Join} />
            <Route path="/notice" component={Notice} />
            <Route path="/buymeacoffee" component={Donate} />
            <Route exact path="/notfound" component={NotFound} />
            <Route component={() => <Redirect to="/notfound" />} />
          </Switch>
          <Modal />
          <Sidebar />
        </Router>
      </Provider>
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById("root"),
);
