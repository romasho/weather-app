import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ITaskstate, ITask } from '../../../models';

const STATE: ITaskstate = {
  tasks: [],
};

const initialState: ITaskstate = localStorage.getItem('Taskstate')
  ? JSON.parse(String(localStorage.getItem('Taskstate')))
  : STATE;

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<ITask>) => {
      state.tasks.push(action.payload);
      localStorage.setItem('Taskstate', JSON.stringify(state));
    },
    removeTask: (state, action: PayloadAction<string>) => {
      state.tasks = state.tasks.filter((task) => task.title !== action.payload);
      localStorage.setItem('Taskstate', JSON.stringify(state));
    },
  },
});

export default tasksSlice.reducer;
