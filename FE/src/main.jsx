import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ConfigProvider } from "antd";
import { Provider } from "react-redux";

import App from "./App.jsx";
import store from "./store";
import "./utils/fontawesome";

const container = document.getElementById("root");
const Root = createRoot(container);

Root.render(
    <Provider store={store}>
        <BrowserRouter>
            <ConfigProvider
                theme={{
                    token: {
                        colorPrimary: "#005CBC",
                        colorError: "#D40020",
                        colorSuccess: "#008553",
                        colorWarning: "#FFBF1C",
                        fontFamily: "Nunito Sans",
                        borderRadius: 20,
                    },
                    components: {
                        Button: {
                            borderRadius: 20,
                            controlHeight: 50,
                        },
                    },
                }}
            >
                <App />
            </ConfigProvider>
        </BrowserRouter>
    </Provider>
);
