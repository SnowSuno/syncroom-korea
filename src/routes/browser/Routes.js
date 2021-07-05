import React from "react";
import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";

import Home from "./Home";
import Join from "./Join";
import NotFound from "./NotFound";

function Routes() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path='/join' component={Join}/>
                <Route exact path="/notfound" component={NotFound} />
                <Route component={() => <Redirect to="/notfound"/>}/>
            </Switch>
        </Router>
    )
}

export default Routes;
