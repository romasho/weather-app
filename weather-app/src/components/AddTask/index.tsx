import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { Modal, Form } from "..";
import { useCallback, useState } from "react";

function AddTask() {
    const [isOpened, setIsOpened] = useState(false);

    const toggleIsOpened = useCallback(() => {
        setIsOpened((isOpened) => !isOpened);
      }, []);

  return (
    <>
      <Button startIcon={<AddIcon />} onClick={toggleIsOpened}>Add task</Button>
      <Modal isOpened={isOpened} onCancel={toggleIsOpened}>
        <Form onCancel={toggleIsOpened}/>
      </Modal>
    </>
  );
}

export default AddTask;
