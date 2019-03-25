import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Menu from './menu/menu';
import Search from './menu/search';
import User from './menu/user';
 import Document from './CateDocument/CateDos';
 import TodoApp from './TodoApp';
import { BrowserRouter as Router, Route, Switch,Redirect} from "react-router-dom";
import myReducer from './../reducers/index';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {createStore,applyMiddleware} from 'redux';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    myReducer,
    composeEnhancers(
        applyMiddleware(thunk),
    )
);
export default class Master extends Component {
    render() {
        return (
            <div>
                <div id="sidebar-collapse" className="col-sm-3 col-lg-2 sidebar">
                    <User/>
                    <Search/>
                    <Menu/>
                </div>
                <Router>
                    <Switch>
                        {/*<Route path="/" component={Document}/>*/}
                        <Route exact path="/" component={Document}/>
                        <Route path="/test" component={TodoApp}/>
                    </Switch>
                </Router>
            </div>
        );
    }
}
if (document.getElementById('Rootapp')) {
    ReactDOM.render( <Provider store={store}>
        <Master />
    </Provider>, document.getElementById('Rootapp'));
}
