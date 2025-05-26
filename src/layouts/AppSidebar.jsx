import { HomeOutlined, HeartOutlined, UserOutlined } from "@ant-design/icons";
import { Layout, Menu, Input, Avatar } from "antd";
import { Link } from "react-router-dom";

const { Sider } = Layout;
const { Search } = Input;

const AppSidebar = ({ collapsed }) => {
  return (
    <Sider
      trigger={null}
      collapsible
      collapsed={collapsed}
      style={{
        backgroundColor: "#abcdde",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "16px 0",
      }}
    >
      {/* <Search placeholder="input search text" style={{ padding: "10px" }} /> */}
      <Menu
        style={{ backgroundColor: "#abcdde", marginTop: "100px" }}
        mode="inline"
        defaultSelectedKeys={["notes"]}
      >
        <Menu.Item key="notes" icon={<HomeOutlined />}>
          <Link to="/">Notes</Link>
        </Menu.Item>
        <Menu.Item key="favorites" icon={<HeartOutlined />}>
          <Link to="/favorites">Favorites</Link>
        </Menu.Item>
      </Menu>

      {/* <div>
        <Avatar icon={<UserOutlined />} />
      </div> */}
    </Sider>
  );
};

export default AppSidebar;
