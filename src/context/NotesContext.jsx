import { createContext, useEffect, useState } from "react";

export const NotesContext = createContext();

const NotesProvider = ({ children }) => {
  const [notes, setNotes] = useState(() => {
    const storedNotes = localStorage.getItem("notes");
    return storedNotes ? JSON.parse(storedNotes) : [];
  });

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

  const updateNote = (id, updatedTitle, updatedDescription) => {
    setNotes((prevNotes) =>
      prevNotes.map((note) =>
        note.id === id
          ? { ...note, title: updatedTitle, description: updatedDescription }
          : note
      )
    );
  };

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  return (
    <NotesContext.Provider
      value={{ notes, addNote, deleteNote, favoriteNote, updateNote }}
    >
      {children}
    </NotesContext.Provider>
  );
};
export default NotesProvider;
