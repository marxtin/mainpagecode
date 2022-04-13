import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Provider from "./context/Provider";
import { BrowserRouter } from "react-router-dom";
import GlobalFonts from "./fonts/fonts.js";

/* ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalFonts />
      <Provider>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.querySelector("#root")
);
 */
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalFonts />
      <Provider>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
 
);