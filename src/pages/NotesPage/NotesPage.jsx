import NoteList from "../../components/NoteList/NoteList";
import { Input, Row, Col } from "antd";
import { useNotesData } from "../../context/useNotesData";

const { Search } = Input;

const NotesPage = () => {
  const { notes } = useNotesData();
  return (
    <>
      <Row justify="end">
        <Col>
          <Search
            placeholder="input search text"
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
