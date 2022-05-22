import { Typography } from "@mui/material";
import { AddTask, Task } from "..";
import { useAppSelector } from "../../hooks/redux";
import { theme } from "../../theme";
import { getToday } from "../../utils";
import CustomnBox from "./ColumnBox.styled";

function Planer() {
  const { tasks } = useAppSelector((state) => state.tasksSlice);

  return (
    <CustomnBox component="section">
      <Typography
        sx={{ p: "10px 10px", fontWeight: "bold", fontSize: "2rem" }}
        color={theme.palette.text.primary}
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
            key={task.date + index}
          />
        ))}
      <AddTask />
    </CustomnBox>
  );
}

export default Planer;
