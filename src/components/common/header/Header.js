import React from "react";
import { Breadcrumb, Layout } from "antd";
import HeaderBreadCrumb from "./BreadCrumb";

const { Header } = Layout;

const TravelHeader = (props) => {
  return (
    <div className="header">
      <Header id={props.id}>
        <div className="header__logo">
          <span style={{ color: "#fff", fontSize: "20px" }}>This is Header</span>
        </div>
        <div className="breadcrumbs">
          <HeaderBreadCrumb/>
        </div>
      </Header>
    </div>
  );
};

export default TravelHeader;
