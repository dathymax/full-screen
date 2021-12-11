import React from "react";
import { Layout } from "antd";

const { Header } = Layout;

const TravelHeader = (props) => {
  return (
    <Header id={props.id}>
      <div className="header__logo">
        <span style={{ color: "#fff", fontSize: "30px" }}>This is Header</span>
      </div>
    </Header>
  );
};

export default TravelHeader;
