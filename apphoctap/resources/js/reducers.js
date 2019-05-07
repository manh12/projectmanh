import {
    combineReducers
} from "redux";

import users from "./components/modules/user/execut/reducer";
import sliders from "./components/modules/slide/execut/reducer";
import pages from "./components/modules/page/execut/reducer";

const reducers = combineReducers({
    users,
    sliders,
    pages
});
export default reducers;
