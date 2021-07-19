import React from "react";
import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";

import Home from "../containers/mobile/Home";
import NotFound from "../containers/mobile/NotFound";

function MobileRoutes() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/notfound" component={NotFound} />
                <Route component={() => <Redirect to="/notfound"/>}/>
            </Switch>
        </Router>
    )
}

export default MobileRoutes;
