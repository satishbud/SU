import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { default as App } from "./App";
import { BrowserRouter } from "react-router-dom";
import { ShoppingCartProvider } from "./context/ShoppingCart";
import { LocalizationProvider } from "./context/LocalizationContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <LocalizationProvider>
        <ShoppingCartProvider>
          <App />
        </ShoppingCartProvider>
      </LocalizationProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
