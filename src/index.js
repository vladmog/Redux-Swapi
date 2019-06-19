import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
// applyMiddleware from redux
import { applyMiddleware, createStore, compose } from "redux";
import rootReducer from "./reducers";
// thunk from redux-thunk
import thunk from "redux-thunk";
// logger from redux-logger
import logger from "redux-logger";
// rootReducer from ./reducers


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const store = createStore(
  rootReducer, 
  composeEnhancers(applyMiddleware(thunk, logger))
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
