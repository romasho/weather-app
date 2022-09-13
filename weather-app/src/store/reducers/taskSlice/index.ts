import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ITaskstate, ITask } from '../../../models';

const STATE: ITaskstate = {
  tasks: [],
};

const initialState: ITaskstate = STATE;

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<ITask>) => {
      state.tasks.push(action.payload);
    },
    removeTask: (state, action: PayloadAction<string>) => {
      state.tasks = state.tasks.filter((task) => task.title !== action.payload);
    },
  },
});

export default tasksSlice.reducer;
