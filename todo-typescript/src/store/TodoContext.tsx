import { createContext, useContext, type ReactNode } from "react";

export type TodoPropTypes = {
  children: ReactNode;
};

export type Todo = {
  id: string;
  task: string;
  completed: boolean;
  createdAt: Date;
};

export type TodosContext = {
  todos: Todo[];
  handleAddTodo: (task: string) => void;
  toggleTodoCompleted:(id:string)=>void
  handleTodoDelete:(id:string)=>void
};

export const todosContext = createContext<TodosContext | null>(null);

export const useTodo = () => {
  const consumer = useContext(todosContext);
  if (!consumer) {
    throw new Error("useTodo must be used within a todosProvider");
  }
  return consumer;
};