import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '@/types';
import { getToday } from '@/utils';

const selectedTasks = (state: RootState) => state.tasksSlice.tasks;

export const selectTodayTasks = createSelector(selectedTasks, (tasks) =>
  tasks.filter((task) => task.date === getToday())
);
