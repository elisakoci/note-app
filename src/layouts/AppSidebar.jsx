import {
  HomeOutlined,
  HeartOutlined,
  FolderOpenOutlined,
  ProductOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Avatar } from "antd";
import { Link } from "react-router-dom";

const { Sider } = Layout;

const AppSidebar = ({ collapsed }) => {
  return (
    <Sider
      trigger={null}
      collapsible
      collapsed={collapsed}
      style={{
        backgroundColor: "#FFD54F",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "16px 0",
      }}
    >
      <Menu
        style={{ backgroundColor: "#FFD54F", marginTop: "100px" }}
        mode="inline"
        defaultSelectedKeys={["notes"]}
      >
        <Menu.Item key="notes" icon={<HomeOutlined />}>
          <Link to="/">Notes</Link>
        </Menu.Item>
        <Menu.Item key="favorites" icon={<HeartOutlined />}>
          <Link to="/favorites">Favorites</Link>
        </Menu.Item>
        <Menu.Item key="archieve" icon={<FolderOpenOutlined />}>
          <Link to="/archieve">Archieve</Link>
        </Menu.Item>
        <Menu.Item key="category" icon={<ProductOutlined />}>
          <Link to="/category">Category</Link>
        </Menu.Item>
      </Menu>

      {/* <div>
        <Avatar icon={<UserOutlined />} />
      </div> */}
    </Sider>
  );
};

export default AppSidebar;
