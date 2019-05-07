import React, { Component } from "react";
import AdminPage from "./AdminPage";
import LoginPage from "./LoginPage";
import NotFound from "./NotFound.js";
import { createBrowserHistory } from "history";
import {
    BrowserRouter as Router,
    Route,
    Switch,
    HashRouter
} from "react-router-dom";
export default class RootPages extends Component {
    render() {
        return (
                <HashRouter>
                    <React.Fragment>
                        <Switch>
                            <Route path="/panel" component={AdminPage} />
                            <Route path="/" component={LoginPage} />
                            <Route component={NotFound}/>
                        </Switch>
                    </React.Fragment>
                </HashRouter>
        );
    }
}
