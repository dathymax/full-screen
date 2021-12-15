import React from "react";
import { Layout } from "antd";
import { Route, Routes } from "react-router-dom";
import Item1 from "../../Item1";
import Item2 from "../../Item2";
import Item3 from "../../Item3";

const { Content } = Layout;

const TravelContent = (props) => {
  return (
    <Content id={props.id}>
      <Routes>
        <Route path="/item1" element={<Item1 />} />
        <Route path="/item2" element={<Item2 />} />
        <Route path="/item3" element={<Item3 />} />
      </Routes>
      <button onClick={props.onClick}>Zoom</button>
    </Content>
  );
};

export default TravelContent;
