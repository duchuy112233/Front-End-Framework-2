import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { configAxios } from "./config/axios.ts";
import { LoadingProvider } from "./context/loading.tsx";
import { UserProvider } from "src/context/user.tsx";
import { Provider } from "react-redux";
import { store } from "./redux/store.ts";

configAxios();
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <LoadingProvider>
          <Provider store={store}>
            <App />
          </Provider>
        </LoadingProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);
