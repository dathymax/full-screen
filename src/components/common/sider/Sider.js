import React from "react";
import { Layout } from "antd";
import Tour from "./tours/Tour";

const { Sider } = Layout;

const TravelSider = (props) => {
    return (
        <div className="sider">
            <Sider id={props.id}>
                <Tour />
            </Sider>
        </div>
    );
};

export default TravelSider;
