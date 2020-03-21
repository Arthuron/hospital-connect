import ReduxThunk from "redux-thunk";

import { compose, createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers";

const reduxDevToolsEnabled =
    process.env.NODE_ENV !== "production" &&
    typeof window !== "undefined" &&
    typeof window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ !== "undefined";

const composeEnhancer = reduxDevToolsEnabled ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose;
const enhancer = composeEnhancer(applyMiddleware(ReduxThunk));

export default createStore(rootReducer, {}, enhancer);
