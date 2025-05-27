import { Button, Row, Col } from "antd";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import AddNoteButton from "../components/AddNoteButton/AddNoteButton";

const AppHeader = ({ collapsed, setCollapsed }) => {
  return (
    <Row
      justify="space-between"
      align="middle"
      style={{ padding: "0px", backgroundColor: "white" }}
    >
      <Col>
        <Button
          type="text"
          icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          onClick={() => setCollapsed(!collapsed)}
          style={{ fontSize: "16px" }}
        />
      </Col>
      <Col style={{ padding: "0 30px" }}>
        <AddNoteButton />
      </Col>
    </Row>
  );
};

export default AppHeader;
