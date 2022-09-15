import { ReactComponent as DeleteIcon } from '@/assets/deleteIcon.svg';
import { ITask } from '@/models';
import theme from '@/theme';
import { useAppDispatch } from '@/hooks/redux';
import { tasksSlice } from '@/store/reducers/taskSlice';
import { IconButton, Typography } from '@/components/components.styled';

function Task({ time, title }: ITask) {
  const dispatch = useAppDispatch();

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        columnGap: '1rem',
        padding: '0.5rem',
        alignItems: 'center',
      }}
    >
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
    </div>
  );
}

export default Task;
