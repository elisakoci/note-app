import { createContext, useContext, useState } from "react";

const NotesContext = createContext();

export const useNotes = () => useContext(NotesContext);

const NotesProvider = ({ children }) => {
  const [notes, setNotes] = useState([]);

  const addNote = (title, description) => {
    const newNote = {
      id: Date.now(),
      title,
      description,
      createdAt: new Date().toLocaleDateString(),
      favorite: false,
    };
    setNotes((prevNote) => [newNote, ...prevNote]);
  };

  const deleteNote = (id) => {
    setNotes((prevNote) => prevNote.filter((note) => note.id !== id));
  };

  const favoriteNote = (id) => {
    setNotes((prevNote) =>
      prevNote.map((note) =>
        note.id === id ? { ...note, favorite: !note.favorite } : note
      )
    );
  };

  const updateNote = (id, updatedNoteData) => {
    setNotes((prev) =>
      prev.map((note) =>
        note.id === id ? { ...note, ...updatedNoteData } : note
      )
    );
  };

  return (
    <NotesContext.Provider
      value={{ notes, addNote, deleteNote, favoriteNote, updateNote }}
    >
      {children}
    </NotesContext.Provider>
  );
};
export default NotesProvider;
