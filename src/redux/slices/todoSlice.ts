import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Todo from '../../interface/typeTodo'


type todosState = {
  // typeOf initial state
  todoList: Todo[];
  input: string;
  status: string;
};

const initialState: todosState = {
  // typeOf passed to variable
  todoList: [],
  input: "",
  status: "all",
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo(state, action: PayloadAction<string>) {
      // typeOf for action
      state.todoList.push({
        title: action.payload,
        id: Date.now(),
        isCompleted: false,
        isActive: true,
      });
    },
    toggleHandler(state, action: PayloadAction<number>) {
      // typeOf for action
      const toggledTodo = state.todoList.find((el) => el.id === action.payload);
      if (toggledTodo) toggledTodo.isCompleted = !toggledTodo.isCompleted;
    },
    removeHandler(state, action: PayloadAction<number>) {
      // typeOf for action
      state.todoList = state.todoList.filter((el) => el.id !== action.payload);
    },
    inputHandler(state, action: PayloadAction<string>) {
      state.input = action.payload;
    },
    statusHandler(state, action: PayloadAction<string>) {
      state.status = action.payload;
    },
    deleteHandler(state, action: PayloadAction<any>) {
      state.todoList = action.payload;
    },
  },
});

export const {
  addTodo,
  toggleHandler,
  removeHandler,
  inputHandler,
  statusHandler,
  deleteHandler,
} = todoSlice.actions;

export default todoSlice.reducer;
