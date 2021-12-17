import React from "react";
import { Layout, Button } from "antd";
import { Route, Routes } from "react-router-dom";
import ListTour from "../../tour/ListTour";
import AddTour from "../../tour/AddTour";
import CreateTour from "../../tour/CreateTour";

const { Content } = Layout;

const TravelContent = (props) => {
    return (
        <Content id={props.id}>
            <Routes>
                <Route path="/list-tour" element={<ListTour />} />
                <Route path="/add-tour" element={<AddTour />} />
                <Route path="/create-tour" element={<CreateTour />} />
            </Routes>
            <Button type="text" onClick={props.onClick}>
                <img src={props.src} alt="Full screen" className="fullscreen-img" />
            </Button>
        </Content>
    );
};

export default TravelContent;
