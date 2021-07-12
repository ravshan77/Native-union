import React,{ Suspense } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import "./i18next";
import Loader from "./components/Loader/Loader"
import { PersistGate } from "redux-persist/integration/react";
import {store, persistor} from "./store/store"

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor} >
          <Suspense fallback = {<Loader/>}>
            <App />
          </Suspense>
        </PersistGate>
      </Provider>
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById("root")
);

reportWebVitals();
