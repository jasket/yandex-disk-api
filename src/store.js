import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas";
import reducersApp from "./reducers";
import { oauthActions } from "./actions";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducersApp, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

store.dispatch(oauthActions.initAccessToken());

export default store;
