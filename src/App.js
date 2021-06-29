import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import Home from "./routes/Home";
import Join from "./routes/Join";
import Test from "./routes/Test";
import NotFound from "./routes/NotFound";

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path='/join' component={Join}/>
                <Route path="/test" component={Test}/>
                <Route component={NotFound} />
            </Switch>
        </Router>

    )
}

export default App;
