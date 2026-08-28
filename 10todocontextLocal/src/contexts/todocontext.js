import { createContext, useContext } from "react";

export const ToDoContext = createContext({
  todos: [
    {
      id: "",
      todoMsg: "",
      completed: false,
    },
  ],
  addTodo: (todoMsg) => { },
  updateTodo: (id, todoMsg) => { },
  deleteTodo: (id) => { },
  toggleComplete: (id) => { },
});

export const TodoProvider = ToDoContext.Provider;

export function useTodo() {
  return useContext(ToDoContext);
}
