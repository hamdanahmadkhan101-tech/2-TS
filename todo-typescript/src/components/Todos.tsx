import { useTodo } from "../store/TodoContext";
import { useSearchParams } from "react-router-dom";

const Todos = () => {
  const { todos, toggleTodoCompleted, handleTodoDelete } = useTodo();
  const [searchParams] = useSearchParams();
  const todosData = searchParams.get("todos");

  let filterData = todos;
  if (todosData === "active") {
    filterData = filterData.filter((item) => item.completed === false);
  }
  if (todosData === "active") {
    filterData = filterData.filter((item) => item.completed === false);
  }

  return (
    <ul className="main-task">
      {filterData.map((item) => {
        return (
          <li key={item.id}>
            <input
              onChange={() => toggleTodoCompleted(item.id)}
              checked={item.completed}
              type="checkbox"
              id={`todo${item.id}`}
            />
            <label htmlFor={`todo${item.id}`}>{item.task}</label>
            {item.completed && (
              <button onClick={() => handleTodoDelete(item.id)} type="button">
                Delete
              </button>
            )}
          </li>
        );
      })}
    </ul>
  );
};

export default Todos;
