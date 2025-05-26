import { useContext } from "react";
import NotesContext from "./NotesProvider";

const useNotesData = () => {
  const context = useContext(NotesContext);

  if (!context) {
    throw new Error("Error");
  }

  return context;
};

export default useNotesData;
