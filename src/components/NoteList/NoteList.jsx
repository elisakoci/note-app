import { List, Empty } from "antd";
import { SmileOutlined } from "@ant-design/icons";
import NoteItem from "../NoteItem/NoteItem";

const NoteList = ({ notes }) => {
  console.log(11, notes);
  if (!notes.length) {
    return (
      <Empty
        image={<SmileOutlined style={{ fontSize: 48, color: "#52c41a" }} />}
        description="You don't have any notes yet. Go ahead and create one!"
      />
    );
  }
  return (
    <List
      dataSource={notes}
      renderItem={(note) => <NoteItem note={note} />}
      style={{ marginBottom: "10px" }}
    />
  );
};

export default NoteList;
