import App from "./App";
import "./index.css";
import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { RecoilRoot } from "recoil";
import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { Provider } from "react-redux";
import rootReducer from "./modules/_reducers";
import styled from "@emotion/styled";

const store = createStore(rootReducer, composeWithDevTools());

const Flex = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

ReactDOM.render(
  <RecoilRoot>
    <Suspense fallback={<Flex></Flex>}>
      <React.StrictMode>
        <Provider store={store}>
          <App />
        </Provider>
      </React.StrictMode>
    </Suspense>
  </RecoilRoot>,
  document.getElementById("root")
);
