import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { ITask } from '../../models';
import theme from '../../theme';
import { useAppDispatch } from '../../hooks/redux';
import { tasksSlice } from '../../store/reducers/taskSlice';
import { Typography } from '../Clock/components.styled';
import { Button } from '../AddTask/component.styled';

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
      <Typography color={theme.palette.text.primary} fontSize="1.25rem">
        {time}
      </Typography>
      <Typography color={theme.palette.text.primary}>一</Typography>
      <Typography color={theme.palette.text.primary} fontSize="1.25rem">
        {title}
      </Typography>
      <Button color="primary" onClick={() => dispatch(tasksSlice.actions.removeTask(title))}>
        <DeleteForeverIcon />
      </Button>
    </div>
  );
}

export default Task;
