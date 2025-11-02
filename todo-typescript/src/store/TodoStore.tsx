import { useState } from "react";
import { todosContext, type TodoPropTypes, type Todo } from "./TodoContext";

export const TodosProvider = ({ children }: TodoPropTypes) => {
  const [todos, setTodos] = useState<Todo[]>(() => {
    try {
      const newTodos = localStorage.getItem("todos") || "[]";
      return newTodos? JSON.parse(newTodos) as Todo[]: [];
    } catch (e) {
      console.log(e);
      return [];
    }
  });
  const handleAddTodo = (task: string) => {
    setTodos((prev) => {
      const newTodos: Todo[] = [
        {
          id: Math.random().toString(),
          task: task,
          completed: false,
          createdAt: new Date(),
        },
        ...prev,
      ];
      localStorage.setItem("todos", JSON.stringify(newTodos));
      return newTodos;
    });
  };

  const toggleTodoCompleted = (id: string) => {
    setTodos((prev) => {
      const newTodos = prev.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });
      localStorage.setItem("todos", JSON.stringify(newTodos));
      return newTodos as Todo[];
    });
  };

  const handleTodoDelete = (id: string) => {
    setTodos((prev) => {
      const newTodos = prev.filter((todo) => todo.id !== id);
      localStorage.setItem("todos", JSON.stringify(newTodos));
      return newTodos as Todo[];
    });
  };

  return (
    <todosContext.Provider
      value={{ todos, handleAddTodo, toggleTodoCompleted, handleTodoDelete }}
    >
      {children}
    </todosContext.Provider>
  );
};
