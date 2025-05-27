import { useState } from "react";
import { EditOutlined } from "@ant-design/icons";
import { Button, message } from "antd";
import { useNotesData } from "../../context/useNotesData";
import NoteModalForm from "../NoteModal/NoteModalForm";

const EditNoteButton = ({ note }) => {
  const [openModal, setOpenModal] = useState(false);
  const { updateNote } = useNotesData();

  const handleSubmit = ({ title, description }) => {
    updateNote(note.id, title, description);
    setOpenModal(false);
    message.success("Note is updated successfully!");
  };

  return (
    <>
      <Button
        icon={<EditOutlined />}
        onClick={() => setOpenModal(true)}
        type="default"
      >
        Edit
      </Button>
      <NoteModalForm
        open={openModal}
        onCancel={() => setOpenModal(false)}
        onSubmit={handleSubmit}
        initialValues={note}
        isEdit={true}
      />
    </>
  );
};

export default EditNoteButton;
