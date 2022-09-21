import { ReactComponent as DeleteIcon } from '@/assets/deleteIcon.svg';
import { ITask } from '@/types';
import theme from '@/theme';
import { useAppDispatch } from '@/hooks/redux';
import { tasksSlice } from '@/store/reducers/taskSlice';
import { IconButton, Typography } from '@/components/components.styled';

import { TaskWrapper } from './components.styled';

export function Task({ time, title }: Omit<ITask, 'id'>) {
  const dispatch = useAppDispatch();

  return (
    <TaskWrapper>
      <Typography color={theme.colors.main} fontSize="1.25rem">
        {time}
      </Typography>
      <Typography color={theme.colors.main}>一</Typography>
      <Typography color={theme.colors.main} fontSize="1.25rem">
        {title}
      </Typography>
      <IconButton color="primary" onClick={() => dispatch(tasksSlice.actions.removeTask(title))}>
        <DeleteIcon />
      </IconButton>
    </TaskWrapper>
  );
}
