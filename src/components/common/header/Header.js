import React from "react";
import { Layout } from "antd";
import HeaderBreadCrumb from "./BreadCrumb";

const { Header } = Layout;

const TravelHeader = (props) => {
    return (
        <div className="header border__bottom">
            <Header id={props.id} style={{ backgroundColor: "var(--primary-color)" }}>
                <div className="header__logo">
                    <a href="/">
                        <img src="/logo/logo-travel.png" alt="Logo" className="header__logo--img" />
                    </a>
                </div>
                <div className="breadcrumbs">
                    <HeaderBreadCrumb />
                </div>
            </Header>
        </div>
    );
};

export default TravelHeader;
