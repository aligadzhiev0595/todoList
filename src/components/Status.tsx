import { useAppDispatch, useAppSelector } from '../redux/redux.hooks'
import { deleteHandler, statusHandler } from '../redux/slices/todoSlice'
const Status = () => {
  const dispatch = useAppDispatch()
  const todos = useAppSelector((s) => s.todos.todoList)
  const status = useAppSelector((s) => s.todos.status)

  const getStatus = (e:React.MouseEvent<HTMLButtonElement>) => {
    dispatch(statusHandler(e.currentTarget.value))
  }

  const deleteCompleted = () => {
    dispatch(deleteHandler(todos.filter((el) => (el.isCompleted ? '' : el))))
  }

  const more = () => {
    const res = todos.filter((el) => el.isActive && !el.isCompleted).length
    return res === 0 ? 'no' : res
  }

  return (
    <div className='status'>
      <div className='row'>
        <div className='col'>
          <div className='wrapper d-flex a-center j-between'>
            <div>{todos.length === 0 ? 'no cases' : <p>{more()} items left</p>}</div>
            <ul className='status-bar d-flex a-center'>
              <li className='status-bar__items mr-5'>
                <button
                  className={`btns ${status === 'all' ? 'active' : ''} `}
                  onClick={getStatus}
                  value='all'
                >
                  All
                </button>
              </li>
              <li className='status-bar__items mr-5'>
                <button
                  className={`btns ${status === 'active' ? 'active' : ''} `}
                  onClick={getStatus}
                  value='active'
                >
                  Active
                </button>
              </li>
              <li className='status-bar__items mr-5'>
                <button
                  className={`btns ${
                    status === 'completed' ? 'active' : ''
                  }`}
                  onClick={getStatus}
                  value='completed'
                >
                  Completed
                </button>
              </li>
            </ul>
            <div>
              <button className={`btns `} onClick={deleteCompleted}>
                Clear completed
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Status
