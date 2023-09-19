import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { Layout, Spin, Typography } from "antd";

import { routes } from "./routes";
import AppHeader from "./components/header";

import "antd/dist/reset.css";
import "./assets/common_styles/antdOverrideStyles.scss";
import "./assets/common_styles/appStyle.scss";
import "./assets/common_styles/utility.scss";

const { Content } = Layout;
const { Text } = Typography;

const App = () => {
    const renderContent = () => {
        return (
            <Layout>
                <AppHeader />
                <Content className="protected">
                    <Routes>
                        {routes.map((route, index) => (
                            <Route key={index} path={route.path} element={<route.element />} />
                        ))}
                    </Routes>
                </Content>
            </Layout>
        );
    };

    return (
        <Suspense
            fallback={
                <Layout>
                    <Content className="p-0">
                        <div className="app-spin flex-col">
                            <Spin size="large" spinning={true} />
                            <Text className="mt-1">Loading content...</Text>
                        </div>
                    </Content>
                </Layout>
            }
        >
            {renderContent()}
        </Suspense>
    );
};

export default App;
