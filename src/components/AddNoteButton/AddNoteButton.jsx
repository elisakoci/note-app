import { useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import { Button, Modal, Input, Form, message } from "antd";
import { useNotesData } from "../../context/useNotesData";

const AddNoteButton = () => {
  const [openModal, setOpenModal] = useState(false);
  const [form] = Form.useForm();
  const { addNote } = useNotesData();

  const handleOk = () => {
    form.validateFields().then(({ title, description }) => {
      addNote(title, description);
      form.resetFields();
      setOpenModal(false);
      message.success("Note added successfully!");
    });
  };

  return (
    <>
      <Button
        type="primary"
        size="large"
        style={{ backgroundColor: "#abcdde" }}
        onClick={() => setOpenModal(true)}
      >
        <PlusOutlined /> Add Note
      </Button>
      <Modal
        title="Add Note"
        open={openModal}
        onOk={handleOk}
        onCancel={() => setOpenModal(false)}
      >
        <Form form={form} layout="vertical">
          <Form.Item
            name="title"
            label="Title"
            rules={[{ required: true, message: "Title is required" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="description"
            label="Description"
            rules={[{ required: true, message: "Description is required" }]}
          >
            <Input.TextArea rows={4} />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default AddNoteButton;
