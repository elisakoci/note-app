import { useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import { Button, message } from "antd";
import { useNotesData } from "../../context/useNotesData";
import NoteModalForm from "../NoteModal/NoteModalForm";

const AddNoteButton = () => {
  const [openModal, setOpenModal] = useState(false);
  const { addNote } = useNotesData();

  const handleSubmit = ({ title, description }) => {
    addNote(title, description);
    setOpenModal(false);
    message.success("Note added successfully!");
  };

  return (
    <>
      <Button
        type="primary"
        size="large"
        style={{ backgroundColor: "#FFD54F" }}
        onClick={() => setOpenModal(true)}
      >
        <PlusOutlined /> Add Note
      </Button>
      <NoteModalForm
        open={openModal}
        onCancel={() => setOpenModal(false)}
        onSubmit={handleSubmit}
        isEdit={false}
      />
    </>
  );
};

export default AddNoteButton;
