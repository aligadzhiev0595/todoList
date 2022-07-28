import Status from "./components/Status";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

const App: React.FC = () => {
  return (
    <div className="app">
      <h1>TODOS</h1>
      <TodoForm />
      <TodoList />
      <Status/>
    </div>
  );
};

export default App;
