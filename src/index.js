import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import ReduxThunk from 'redux-thunk'
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App";
import rootReducer from './redux/reducers'


ReactDOM.render(
  <React.StrictMode>
    <Provider store={createStore(rootReducer, {}, applyMiddleware(ReduxThunk))}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
