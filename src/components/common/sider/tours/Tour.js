import React from 'react'
import { Menu } from "antd";
import { Link } from "react-router-dom";

const { SubMenu } = Menu;

const Tour = () => {
    return (
        <div className="menu__container">
            <Menu
                mode="inline"
            >
                <SubMenu key="tour" title="Sub Menu">
                    <Menu.Item key="list-tour">
                        <Link to="/list-tour">List Tour</Link>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <Link to="/add-tour">Add Tour</Link>
                    </Menu.Item>
                    <Menu.Item key="3">
                        <Link to="/create-tour">Create Tour</Link>
                    </Menu.Item>
                </SubMenu>
            </Menu>
        </div>
    )
}

export default Tour
