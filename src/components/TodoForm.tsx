import React, { FC } from 'react'
import { useAppDispatch, useAppSelector } from '../redux/redux.hooks'
import { addTodo, inputHandler } from '../redux/slices/todoSlice'

import { IoIosArrowDown } from 'react-icons/io'

const TodoForm: FC = () => {
  const dispatch = useAppDispatch()
  const input = useAppSelector((s) => s.todos.input)

  const actionHandler = () => {
    if (input.length !== 0) dispatch(addTodo(input))
    dispatch(inputHandler(''))
  }

  const formHandler = (e: React.SyntheticEvent) => {
    e.preventDefault()
    if (input.length !== 0) {
      dispatch(addTodo(input))
    }
    dispatch(inputHandler(''))
  }

  return (
    <form onSubmit={formHandler}>
      <input
        className='input'
        value={input}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          dispatch(inputHandler(e.target.value))
        }
        placeholder='What needs to be done'
      />
      <IoIosArrowDown className='btn' onClick={actionHandler} />
    </form>
  )
}

export default TodoForm
