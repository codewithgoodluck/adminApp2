import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./app/store";
import { AuthProvider } from "./context/AuthProvider";
import { RecoilRoot } from "recoil";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
   <RecoilRoot>
    <App/>
    </RecoilRoot>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
