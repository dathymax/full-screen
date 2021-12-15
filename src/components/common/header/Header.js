import React from "react";
import { Breadcrumb, Layout } from "antd";
import HeaderBreadCrumb from "./BreadCrumb";
import ChangeTheme from "./ChangeTheme";

const { Header } = Layout;

const TravelHeader = (props) => {
  return (
    <div className="header">
      <Header id={props.id}>
        <div className="header__logo">
          <span style={{ color: "#fff", fontSize: "20px" }}>This is Header</span>
        </div>
        <div className="breadcrumbs">
          <HeaderBreadCrumb />
        </div>
        {/* <div className="change-theme">
          <ChangeTheme theme={props.theme}
                changeTheme={props.changeTheme}/>
        </div> */}
      </Header>
    </div>
  );
};

export default TravelHeader;
