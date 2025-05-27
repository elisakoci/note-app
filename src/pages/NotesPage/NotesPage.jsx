import NoteList from "../../components/NoteList/NoteList";
import { Input, Row, Col } from "antd";
import { useNotesData } from "../../context/useNotesData";

const { Search } = Input;

const NotesPage = () => {
  const { notes } = useNotesData();
  return (
    <>
    <Row justify="space-between" align="middle" style={{ marginBottom: 16 }}>
      <Col>
        <h2>📝 My Notes</h2>
      </Col>
      <Col>
        <Search
          placeholder="Search notes"
          allowClear
          enterButton="Search"
          size="large"
        />
      </Col>
    </Row>

    <NoteList notes={notes} />
  </>
  );
};

export default NotesPage;
