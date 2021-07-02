import React from "react";
import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";

import Home from "./routes/Home";
import Join from "./routes/Join";
import Test from "./routes/Test";
import NotFound from "./routes/NotFound";

import AnimationTest from "./test/AnimationTest";

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path='/join' component={Join}/>
                <Route path="/test" component={Test}/>
                <Route exact path="/notfound" component={NotFound} />
                <Route exact path="/animation" component={AnimationTest}/>
                <Route component={() => <Redirect to="/notfound"/>}/>
            </Switch>
        </Router>

    )
}

export default App;
