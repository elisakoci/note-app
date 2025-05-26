import { useContext } from "react";
import { NotesContext } from "./NotesContext";

export const useNotesData = () => {
  const context = useContext(NotesContext);

  if (!context) {
    throw new Error("Error");
  }

  return context;
};
