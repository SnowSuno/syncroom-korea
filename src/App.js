import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import Home from "./routes/Home";
import Test from "./routes/Test";

function App() {
    return (
        <Router basename={process.env.PUBLIC_URL}>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/test" component={Test}/>
            </Switch>
        </Router>

    )
}

export default App;
