import React, { useState } from "react";
import { TodoProvider } from "./contexts";

const App = () => {
  const [todos, setTodos] = useState([]);

  // To add new todo item
  const addTodo = (todoMsg) => {
    setTodos((prevTodos) => {
      return [...prevTodos, { id: Date.now(), todoMsg, completed: false }];
    });
  };

  // To update existing todo item
  const updateTodo = (id, todoMsg) => {
    setTodos((prevTodos) =>
      prevTodos.map((prevTodo) => {
        return prevTodo.id === id
          ? { ...prevTodo, todoMsg: todoMsg }
          : prevTodo;
      }),
    );
  };

  // To delete a particular todo item
  const deleteTodo = (id) => {
    setTodos((prevTodos) =>
      prevTodos.filter((prevTodo) => {
        return prevTodo.id !== id;
      }),
    );
  };

  // To toggle existing todo item

  const toggleComplete = (id) => {
    setTodos((prevTodos) => {
      return prevTodos.map((prevTodo) =>
        prevTodo.id === id
          ? { ...prevTodo, completed: !prevTodo.completed }
          : prevTodo,
      );
    });
  };

  return (
    <TodoProvider
      value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}
    >
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">{/* Todo form goes here */}</div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
          </div>
        </div>
      </div>
    </TodoProvider>
  );
};

export default App;
