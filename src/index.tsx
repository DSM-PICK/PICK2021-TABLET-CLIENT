import App from "./App";
import "./index.css";
import React from "react";
import ReactDOM from "react-dom";
import { RecoilRoot } from "recoil";
import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { Provider } from "react-redux";
import rootReducer from "./modules/_reducers";

const store = createStore(rootReducer, composeWithDevTools());

ReactDOM.render(
  <RecoilRoot>
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  </RecoilRoot>,
  document.getElementById("root")
);
