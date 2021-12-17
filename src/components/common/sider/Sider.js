import React from "react";
import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";

const { Sider } = Layout;
const { SubMenu } = Menu;

const TravelSider = (props) => {
    return (
        <Sider style={{ height: "100vh" }} id={props.id}>
            <Menu
                mode="inline"
                defaultSelectedKeys={["1"]}
                defaultOpenKeys={["sub1"]}
                theme="dark"
                theme={props.theme}
                onClick={props.handleClick}
                selectedKeys={[props.current]}
            >
                <SubMenu key="sub1" title="Sub Menu">
                    <Menu.Item key="1">
                        <Link to="/item1">Item 1</Link>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <Link to="/item2">Item 2</Link>
                    </Menu.Item>
                    <Menu.Item key="3">
                        <Link to="/item3">Item 3</Link>
                    </Menu.Item>
                </SubMenu>
            </Menu>
        </Sider>
    );
};

export default TravelSider;
