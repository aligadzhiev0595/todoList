import { useAppDispatch } from "../hooks/hooks";
import { toggleHandler, removeHandler } from "../redux/slices/todoSlice";
import { AiOutlineDelete, AiOutlineCheckCircle } from "react-icons/ai";
import { ImRadioUnchecked } from "react-icons/im";
import ITodo from "../interface/ITodo";

const Todo: React.FC<ITodo> = ({ id, title, isCompleted }) => {
  const dispatch = useAppDispatch();

  return (
    <li className="todo-box">
      <div onClick={() => dispatch(toggleHandler(id))} className="inner d-flex a-center">
        {isCompleted ? (
          <AiOutlineCheckCircle className="success" />
        ) : (
          <ImRadioUnchecked className="unsuccess" />
        )}
        <p
          className={isCompleted ? "through" : ""}
        >
          {title}
        </p>
      </div>
      <div>
        <AiOutlineDelete
          className="btn-delete"
          onClick={() => dispatch(removeHandler(id))}
        />
      </div>
    </li>
  );
};

export default Todo;
