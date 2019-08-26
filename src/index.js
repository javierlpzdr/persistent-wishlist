import React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers";
import ReactDOM from "react-dom";
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";

import AddWishlist from "./components/AddWishlist";
import Wishlists from "./components/Wishlists";

import rootSaga from "./sagas";

import "./styles.css";

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware, logger))
);

sagaMiddleware.run(rootSaga);

function App() {
  return (
    <div>
      <AddWishlist />
      <Wishlists />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
