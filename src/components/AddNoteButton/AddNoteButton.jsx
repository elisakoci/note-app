import { PlusOutlined } from "@ant-design/icons";
import { Button } from "antd";

const AddNoteButton = () => {
  return (
    <Button type="primary" size="large" style={{ backgroundColor: "#abcdde" }}>
      <PlusOutlined /> Add Note
    </Button>
  );
};

export default AddNoteButton;
