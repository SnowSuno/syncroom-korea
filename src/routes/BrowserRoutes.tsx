import React from "react";
import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";

import Home from "../containers/browser/Home";
import Join from "../containers/browser/Join";
import NotFound from "../containers/browser/NotFound";


function BrowserRoutes() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path='/join' component={Join}/>
                <Route exact path="/notfound" component={NotFound} />
                <Route component={() => <Redirect to="/notfound"/>}/>
            </Switch>
        </Router>
    );
}

export default BrowserRoutes;
