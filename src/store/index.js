import { createStore, applyMiddleware, compose } from "redux";
import { getWishlistsAsync } from "../actions";
import rootReducer from "../reducers";
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";
import rootSaga from "../sagas";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware, logger))
);

sagaMiddleware.run(rootSaga);

store.dispatch(getWishlistsAsync());

export default store;
