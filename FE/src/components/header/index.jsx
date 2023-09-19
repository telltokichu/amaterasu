import _isEmpty from "lodash/isEmpty";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Layout, Typography, Avatar, Button } from "antd";
import { LogoutOutlined, UserOutlined } from "@ant-design/icons";

import { setUserInfo } from "../../services/userInfo";

import logo from "../../assets/svg/blueprint-store-vector-logo.svg";

import "./style.scss";

const { Header } = Layout;
const { Text } = Typography;

const AppHeader = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { userInfo } = useSelector(({ userInfo }) => ({
        userInfo,
    }));

    useEffect(() => {}, []);

    return (
        <Header>
            <img src={logo} className="logo" alt="logo" onClick={() => navigate("/")} />
        </Header>
    );
};

export default AppHeader;
