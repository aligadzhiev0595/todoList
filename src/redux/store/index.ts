import { configureStore } from '@reduxjs/toolkit'
import todoSlice, { hydrate as todoHydrate } from '../slices/todoSlice'

const store = configureStore({
  reducer: {
    todos: todoSlice,
  },
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

const todoLS = loadFromLocalStorage('todos')
if (todoLS) store.dispatch(todoHydrate(todoLS))

store.subscribe(() => {
  saveToLocalStorage(store.getState().todos, 'todos')
})

function saveToLocalStorage(state: any, name: string) {
  try {
    const serialisedState = JSON.stringify(state)
    if (typeof window !== 'undefined')
      localStorage.setItem(name, serialisedState)
  } catch (e) {
    console.warn(e)
  }
}

function loadFromLocalStorage(name: string) {
  try {
    if (typeof window !== 'undefined') {
      const persistedState = localStorage.getItem(name)
      if (persistedState) return JSON.parse(persistedState)
    }
  } catch (e) {
    console.warn(e)
  }
}
