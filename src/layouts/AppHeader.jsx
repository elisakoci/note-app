import { Button, Row, Col } from "antd";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import AddNoteButton from "../components/AddNoteButton/AddNoteButton";

const AppHeader = ({ collapsed, setCollapsed }) => {
  return (
    <Row style={{ padding: 0, backgroundColor: "white"}}>
      <Col>
        <Button
          type="text"
          icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          onClick={() => setCollapsed(!collapsed)}
          style={{ fontSize: "16px", width: 64, height: 64 }}
        />
      </Col>
      <Col>
        <AddNoteButton />
      </Col>
    </Row>
  );
};

export default AppHeader;
