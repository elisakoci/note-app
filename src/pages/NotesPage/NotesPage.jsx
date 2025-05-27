import { useState } from "react";
import NoteList from "../../components/NoteList/NoteList";
import { Input, Row, Col, Pagination } from "antd";
import { useNotesData } from "../../context/useNotesData";

const { Search } = Input;
const PAGE_SIZE = 6;

const NotesPage = () => {
  const { notes } = useNotesData();
  const [searchNote, setSearchNote] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredNotes = notes.filter(
    (note) =>
      note.title.toLowerCase().includes(searchNote.toLowerCase()) ||
      note.description.toLowerCase().includes(searchNote.toLowerCase())
  );

  const startIndex = (currentPage - 1) * PAGE_SIZE;
  const paginatedNotes = filteredNotes.slice(
    startIndex,
    startIndex + PAGE_SIZE
  );

  const handleSearch = (value) => {
    setSearchNote(value);
    setCurrentPage(1);
  };

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
            size="large"
            onSearch={handleSearch}
            onChange={(e) => handleSearch(e.target.value)}
          />
        </Col>
      </Row>

      <NoteList notes={paginatedNotes} />

      {filteredNotes.length > PAGE_SIZE && (
        <Pagination
          current={currentPage}
          pageSize={PAGE_SIZE}
          total={filteredNotes.length}
          onChange={(page) => setCurrentPage(page)}
          align="end"
          style={{ marginTop: 16, textAlign: "right" }}
        />
      )}
    </>
  );
};

export default NotesPage;
