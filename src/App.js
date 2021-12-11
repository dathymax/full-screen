import React, { useState } from "react";
import { Layout } from "antd";
import TravelHeader from "./components/Header";
import TravelContent from "./components/Content";
import TravelSider from "./components/Sider";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  const [fullScreen, setFullScreen] = useState(true);

  const handleFullScreen = (e) => {
    const header = document.getElementById("header");
    const sider = document.getElementById("sider");
    header.style.display = fullScreen === true ? "none" : "block";
    sider.style.display = fullScreen === true ? "none" : "block";
    const content = document.getElementById("content");
    content.style.width = fullScreen === true ? "100vw" : "unset";
    content.style.height = fullScreen === true ? "100vh" : "unset";
    setFullScreen(!fullScreen);
  };

  return (
    <div>
      <Router>
        <Layout>
          <TravelHeader id="header" />
          <Layout>
            <TravelSider id="sider" />
            <TravelContent id="content" onClick={handleFullScreen} />
          </Layout>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
