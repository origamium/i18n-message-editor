import React from "react";
import ReactDOM from "react-dom";
import { StylesProvider } from "@material-ui/styles";
import * as Sentry from "@sentry/browser";
import "ress";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { ErrorBoundary } from "./ErrorBoundary";
import { App } from "./App";

Sentry.init({
    dsn: "https://668f7f34c78f457e8cc398fa3b447794@sentry.io/1895757",
    environment: process.env.NODE_ENV
});

ReactDOM.render(
    <ErrorBoundary>
        <StylesProvider injectFirst>
            <App />
        </StylesProvider>
    </ErrorBoundary>,
    document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
