import { Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useCallback, useState } from 'react';
import { Modal, Form } from '..';

function AddTask() {
  const [isOpened, setIsOpened] = useState(false);

  const toggleIsOpened = useCallback(() => {
    setIsOpened((prev) => !prev);
  }, []);

  return (
    <>
      <Button startIcon={<AddIcon />} onClick={toggleIsOpened}>
        Add task
      </Button>
      <Modal isOpened={isOpened} onCancel={toggleIsOpened}>
        <Form onCancel={toggleIsOpened} />
      </Modal>
    </>
  );
}

export default AddTask;
