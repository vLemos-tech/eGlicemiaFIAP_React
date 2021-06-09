import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import HomeController from "./Pages/Home/HomeController.js";
//Importa o Css do Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

//Importa o store
import store from "./Store/store";
//Importa o Provider do React Redux
import { Provider } from "react-redux";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <HomeController />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
