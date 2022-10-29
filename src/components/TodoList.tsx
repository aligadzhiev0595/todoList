import { useAppSelector } from "../redux/redux.hooks";
import Todo from "./Todo";

const TodoList: React.FC = () => {
  const todos = useAppSelector((s) => s.todos.todoList);
  const status = useAppSelector((s) => s.todos.status);
  return (
    <div>
      <ul>
        {todos
          .filter((el) => {
            switch (status) {
              case "active": {
                return el.isActive && !el.isCompleted;
              }
              case "completed": {
                return el.isCompleted;
              }
              default:
                return el;
            }
          })
          .map((el) => (
            <Todo key={el.id} {...el} />
          ))}
      </ul>
    </div>
  );
};

export default TodoList;
