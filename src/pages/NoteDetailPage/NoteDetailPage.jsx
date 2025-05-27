import { Breadcrumb, Card, Typography, Space, Button, message } from "antd";
import { HeartOutlined, HeartFilled } from "@ant-design/icons";
import { Link, useParams } from "react-router-dom";
import { useNotesData } from "../../context/useNotesData";
import EditNoteButton from "../../components/EditNoteButton/EditNoteButton";

const { Title, Paragraph, Text } = Typography;

const NoteDetailPage = () => {
  const { id } = useParams();
  const { notes, favoriteNote } = useNotesData();
  const note = notes.find((n) => n.id === Number(id));
  console.log(8373, note);

  const handleFavorite = () => {
    favoriteNote(note.id);
    message.success(
      note.favorite ? "Removed from favorites" : "Marked as favorite"
    );
  };

  return (
    <>
      <Breadcrumb
        style={{ marginBottom: 16 }}
        items={[{ title: <Link to="/">Notes</Link> }, { title: note?.title }]}
      />
      <Card
        title={
          <Title level={4} style={{ margin: 0 }}>
            {note?.title}
          </Title>
        }
        extra={
          <Space>
            <EditNoteButton note={note} />
            <Button
              icon={
                note?.favorite ? (
                  <HeartFilled style={{ color: "#FFD54F" }} />
                ) : (
                  <HeartOutlined />
                )
              }
              onClick={handleFavorite}
            >
              {note?.favorite ? "Unfavorite" : "Favorite"}
            </Button>
          </Space>
        }
        style={{
          borderRadius: "12px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
          backgroundColor: "#fafafa",
        }}
      >
        <Paragraph style={{ fontSize: "16px", marginBottom: 16 }}>
          {note?.description}
        </Paragraph>
        <Text type="secondary">Created: {note?.createdAt}</Text>
      </Card>
    </>
  );
};

export default NoteDetailPage;
