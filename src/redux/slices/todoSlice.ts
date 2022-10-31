import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Todo from '../../interface/ITodo'

type InitialStateProps = {
  todoList: Todo[]
  input: string
  status: string
}

const initialState: InitialStateProps = {
  todoList: [],
  input: '',
  status: 'all',
}

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    hydrate(state, action: PayloadAction<InitialStateProps>) {
      return action.payload
    },
    addTodo(state, action: PayloadAction<string>) {
      state.todoList.push({
        title: action.payload,
        id: Date.now(),
        isCompleted: false,
        isActive: true,
      })
    },
    toggleHandler(state, action: PayloadAction<number>) {
      const toggledTodo = state.todoList.find((el) => el.id === action.payload)
      if (toggledTodo) toggledTodo.isCompleted = !toggledTodo.isCompleted
    },
    removeHandler(state, action: PayloadAction<number>) {
      state.todoList = state.todoList.filter((el) => el.id !== action.payload)
    },
    inputHandler(state, action: PayloadAction<string>) {
      state.input = action.payload
    },
    statusHandler(state, action: PayloadAction<string>) {
      state.status = action.payload
    },
    deleteHandler(state, action: PayloadAction<Todo[]>) {
      state.todoList = action.payload
    },
  },
})

export const {
  hydrate,
  addTodo,
  toggleHandler,
  removeHandler,
  inputHandler,
  statusHandler,
  deleteHandler,
} = todoSlice.actions

export default todoSlice.reducer
