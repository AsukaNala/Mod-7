import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* All other routing components need this to work */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
{
  /*<BrowserRouter>  has to be in the very top level component */
}
