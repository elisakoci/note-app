import { HeartOutlined, DeleteOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { useNotesData } from "../../context/useNotesData";
import { Button, List } from "antd";

const NoteItem = ({ note }) => {
  console.log(111, note);
  const { deleteNote, favoriteNote } = useNotesData();
  const navigate = useNavigate();

  const handleFavoriteClick = (e) => {
    e.stopPropagation();
    favoriteNote(note.id);
  };

  const handleDeleteClick = (e) => {
    e.stopPropagation();
    deleteNote(note.id);
  };

  return (
    <List.Item
      actions={[
        <Button
          icon={<HeartOutlined />}
          type={note?.favorite ? "primary" : "default"}
          onClick={handleFavoriteClick}
        />,
        <Button icon={<DeleteOutlined />} danger onClick={handleDeleteClick} />,
      ]}
      onClick={() => navigate(`/note/${note.id}`)}
      style={{
        cursor: "pointer",
      }}
    >
      <List.Item.Meta
        title={note?.title}
        description={`Created: ${note?.createdAt}`}
      />
    </List.Item>
  );
};

export default NoteItem;
