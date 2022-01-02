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
import { BarLoader } from "react-spinners";
import { MainColor } from "./utils/color/color";
import "react-toastify/dist/ReactToastify.css";

const store = createStore(rootReducer, composeWithDevTools());

const Flex = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
`;

ReactDOM.render(
  <RecoilRoot>
    <Suspense
      fallback={
        <Flex>
          <BarLoader
            color={MainColor}
            height="4px"
            width="100%"
            speedMultiplier={0.5}
          />
        </Flex>
      }
    >
      <React.StrictMode>
        <Provider store={store}>
          <App />
        </Provider>
      </React.StrictMode>
    </Suspense>
  </RecoilRoot>,
  document.getElementById("root")
);
