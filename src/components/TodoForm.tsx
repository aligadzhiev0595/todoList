import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { addTodo, inputHandler } from "../redux/slices/todoSlice";
import { IoIosArrowDown } from "react-icons/io";

const TodoForm: React.FC = () => {
  const dispatch = useAppDispatch();
  const input = useAppSelector((s) => s.todos.input);

  const actionHandler = () => {
    if(input.length !== 0) dispatch(addTodo(input));
    dispatch(inputHandler(""));
  };

  return (
    <>
      <input
        className="input"
        value={input}
        onChange={(e) => dispatch(inputHandler(e.target.value))}
        placeholder="What needs to be done"
      />
      <IoIosArrowDown className="btn" onClick={actionHandler} />
    </>
  );
};

export default TodoForm;
