import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas";
import reducersApp from "./reducers";
import { initAccessToken } from "./actions";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducersApp, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

store.dispatch(initAccessToken());

export default store;
