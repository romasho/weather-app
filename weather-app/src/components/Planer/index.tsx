import theme from '@/theme';
import { Typography } from '@/components/components.styled';
import { AddTask, Task } from '@/components';
import { useAppSelector } from '@/hooks/redux';
import { getToday } from '@/utils';

import CustomBox from './ColumnBox.styled';

function Planer() {
  const { tasks } = useAppSelector((state) => state.tasksSlice);

  return (
    <CustomBox>
      <Typography
        style={{ padding: '10px 10px', fontWeight: 'bold' }}
        color={theme.colors.main}
        fontSize="2rem"
      >
        Tasks for today
      </Typography>

      {tasks
        .filter((task) => task.date === getToday())
        .map((task, index) => (
          <Task
            date={task.date}
            time={task.time}
            title={task.title}
            key={task.date + String(index)}
          />
        ))}
      <AddTask />
    </CustomBox>
  );
}

export default Planer;
