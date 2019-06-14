import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import "./scss/library.scss";
import "./scss/index.scss";
import App from "./App";
import { loadToDoList } from "./actions";
import rootSaga from "./sagas";
import reducersApp from "./reducers";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducersApp, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

store.dispatch(loadToDoList());

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
