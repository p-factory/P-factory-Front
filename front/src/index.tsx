import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(
  // eslint-disable-next-line prettier/prettier
  document.getElementById("root") as HTMLElement
);
root.render(
  // <React.StrictMode>
  // eslint-disable-next-line prettier/prettier
  <App />
  // </React.StrictMode>,
);

reportWebVitals();
