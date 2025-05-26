import { HomeOutlined, HeartOutlined, UserOutlined } from "@ant-design/icons";
import { Layout, Menu, Input, Avatar } from "antd";

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
        style={{ backgroundColor: "#abcdde" , marginTop: "100px"}}
        mode="inline"
        defaultSelectedKeys={["1"]}
        items={[
          {
            key: "1",
            icon: <HomeOutlined />,
            label: "Notes",
          },
          {
            key: "2",
            icon: <HeartOutlined />,
            label: "Favorites",
          },
        ]}
      />
      {/* <div>
        <Avatar icon={<UserOutlined />} />
      </div> */}
    </Sider>
  );
};

export default AppSidebar;
