import { FC } from 'react'
import { useAppSelector } from '../redux/redux.hooks'
import Todo from './Todo'

const TodoList: FC = () => {
  const todos = useAppSelector((s) => s.todos.todoList)
  const status = useAppSelector((s) => s.todos.status)
  return (
    <>
      <ul>
        {todos.length === 0 ? (
          <li className='todo-box emptyTodo'>Here will be your TODO</li>
        ) : (
          todos
            .filter((todo) => {
              switch (status) {
                case 'active': {
                  return todo.isActive && !todo.isCompleted
                }
                case 'completed': {
                  return todo.isCompleted
                }
                default:
                  return todo
              }
            })
            .map((todo) => <Todo key={todo.id} {...todo} />)
        )}
      </ul>
    </>
  )
}

export default TodoList
