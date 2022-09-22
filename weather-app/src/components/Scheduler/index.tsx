import { useCallback, useState } from 'react';

import theme from '@/theme';
import { Modal, Form } from '@/components';
import { Task } from '@/components';
import { useAppSelector } from '@/hooks/redux';
import { Button } from '@/components/components.styled';
import { selectTodayTasks } from '@/store/selectors';

import { CustomBox, Title, Span } from './ColumnBox.styled';

export function Scheduler() {
  const tasks = useAppSelector(selectTodayTasks);
  const [isOpen, setIsOpen] = useState(false);

  const toggleIsOpen = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  return (
    <CustomBox>
      <Title bold color={theme.colors.main} fontSize="2rem">
        Tasks for today
      </Title>

      {tasks.map((task) => (
        <Task date={task.date} time={task.time} title={task.title} key={task.id} />
      ))}
      <Button onClick={toggleIsOpen}>
        <Span>+ </Span> Add task
      </Button>
      <Modal isOpen={isOpen} onCancel={toggleIsOpen}>
        <Form onCancel={toggleIsOpen} />
      </Modal>
    </CustomBox>
  );
}
