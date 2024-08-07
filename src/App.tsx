import { useEffect, useState } from "react";
import "./App.css";
import NoTodoForm from "./components/NewTodoForm";
import { todoType } from "./myTypes";
import ToDoList from "./components/ToDoList";

export default function App() {
  const [todos, setTodos] = useState<todoType[]>((): todoType[] => {
    const localValue = localStorage.getItem("ITEMS");
    if (localValue == null) return [];

    return JSON.parse(localValue);
  });

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (title: string) => {
    setTodos((currentTodos: any) => {
      // se preia tot ce se afla in todos ("Arrow function within setClick() receives the previous click value, allowing data manipulations based on the state.")
      const returnTodo: todoType = {
        id: crypto.randomUUID(),
        title: title,
        completed: false,
      };
      return [...currentTodos, returnTodo];
    });
  };

  const deleteTodo = (id: string) => {
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => todo.id !== id);
    });
  };

  const toggleTodo = (id: string, completed: boolean) => {
    setTodos((currentTodos): todoType[] => {
      return currentTodos.map((todo) => {
        if (todo.id === id) return { ...todo, completed };
        else return todo;
      });
    });
  };

  return (
    <>
      <NoTodoForm onSubmit={addTodo} />
      <h1 className="header">To-do list</h1>
      {todos.length === 0 && "No todos here!"}
      <ToDoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </>
  );
}
