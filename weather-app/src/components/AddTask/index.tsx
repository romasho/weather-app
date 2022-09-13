import { useCallback, useState } from 'react';

import { Modal, Form } from '@/components';
import { Button } from '@/components/components.styled';

import { Span } from './component.styled';

function AddTask() {
  const [isOpened, setIsOpened] = useState(false);

  const toggleIsOpened = useCallback(() => {
    setIsOpened((prev) => !prev);
  }, []);

  return (
    <>
      <Button onClick={toggleIsOpened}>
        <Span>+ </Span> Add task
      </Button>
      <Modal isOpened={isOpened} onCancel={toggleIsOpened}>
        <Form onCancel={toggleIsOpened} />
      </Modal>
    </>
  );
}

export default AddTask;
