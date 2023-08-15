import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface Tasks {
  uid: number;
  name: string;
}

const adapter = createEntityAdapter<Tasks>({
  selectId: (item) => item.uid,
});

export const { selectAll: selectTasks, selectById: selectTaskById } =
  adapter.getSelectors((state: RootState) => state.TasksSlice);

const tasksSlice = createSlice({
  name: "tasks",
  initialState: adapter.getInitialState(),
  reducers: {
    addTask: adapter.addOne,
    updateTask: adapter.updateOne,
    deleteTask: adapter.removeOne,
  },
});

export const { addTask, updateTask, deleteTask } = tasksSlice.actions;
export default tasksSlice.reducer;

// import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// type InitialState = {
//   value: TaskState;
// };

// type TaskState = [
//   {
//     id: number;
//     name: string;
//   }
// ]   ;

// const initialState = {
//   value: [{ id: 0, name: "" }] as TaskState,
// } as InitialState;

// export const task = createSlice({
//   name: "tasks",
//   initialState: initialState,
//   reducers: {
//     addTaskOne: (state, action: PayloadAction<string>) => {
//       return {
//         value.push({id: Math.floor(Date.now() / 1000),
//         name: action.payload})
//       };
//     },
//   },
// });

// export const { addTaskOne } = task.actions;
// export default task.reducer;
