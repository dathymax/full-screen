import React from "react";
import { Layout, Button } from "antd";
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
            <Button type="text" onClick={props.onClick}>
                <img src={props.src} alt="Full screen" className="fullscreen-img" />
            </Button>
        </Content>
    );
};

export default TravelContent;
