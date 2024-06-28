import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type TTodo = {
  _id: string;
  title: string;
  description: string;
  priority: string;
  isCompleted?: boolean;
};

type TInitialState = {
  todos: TTodo[];
};

const initialState: TInitialState = {
  todos: [],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<TTodo>) => {
      state.todos.push({ ...action.payload, isCompleted: false });
    },
    removeTodo: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.filter((item) => item._id !== action.payload);
    },
    toggleComplete: (state, action: PayloadAction<string>) => {
      const task = state.todos.find((item) => item._id === action.payload);

      task!.isCompleted = !task?.isCompleted;
    },
    filterPriority: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.filter(
        (item) => item.priority === action.payload
      );
    },
  },
});

export const { addTodo, removeTodo, toggleComplete, filterPriority } =
  todoSlice.actions;

export default todoSlice.reducer;
