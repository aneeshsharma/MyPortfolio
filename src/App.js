import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Landing from "./components/Landing";

class App extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path='/'>
                        <Landing />
                    </Route>
                </Switch>
            </Router>
        );
    }
}

export default App;
