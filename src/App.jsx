// import './App.css'

import { useState } from "react";
import { Layout } from "antd";
import AppSidebar from "./layouts/AppSidebar";
import AppHeader from "./layouts/AppHeader";
import "./layouts/LayoutStyles.css";

const { Header, Content } = Layout;

const App = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout className="main-layout">
      <AppSidebar collapsed={collapsed} />
      <Layout>
        <Header style={{ padding: 0 }}>
          <AppHeader collapsed={collapsed} setCollapsed={setCollapsed} />
        </Header>
        <Content
          style={{
            margin: 10,
            padding: 24,
            borderRadius: "8px",
            backgroundColor: "white",
          }}
        >
          content
        </Content>
      </Layout>
    </Layout>
  );
};

export default App;
