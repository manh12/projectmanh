import React from "react";
import { render } from "react-dom";
import RootPages from "./components/pages/RootPages";
import { Provider } from "react-redux";
import { createStore, applyMiddleware,compose } from "redux";
import reducers from "./reducers";
import thunk from "redux-thunk";
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    reducers,
    composeEnhancer(applyMiddleware(thunk)),
);
render(
    <Provider store={store}>
        <RootPages />
    </Provider>,
    document.getElementById("root")
);
