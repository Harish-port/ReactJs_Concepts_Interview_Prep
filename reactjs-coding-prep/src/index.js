import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
// import store from "./Concepts/Redux/store";
// import { store } from "./Redux_Counter_App/redux/store";
import ThemeProvider from "./Hooks/ContextAPI/ThemeContext/ThemeProvider";
import CounterClass from './ClassComponents/Redux/createCounter';
import store from './ClassComponents/Redux/store';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Provider store={store}>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </Provider>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
