import { Col } from "antd";
import { useNotesData } from "../../context/useNotesData";
import NoteList from "../../components/NoteList/NoteList";

const FavoritesPage = () => {
  const { notes } = useNotesData();
  const favoriteNotes = notes.filter((note) => note.favorite);
  return (
    <>
      <Col>
        <h2>💛 Favorites</h2>
      </Col>

      <NoteList notes={favoriteNotes} />
    </>
  );
};

export default FavoritesPage;
