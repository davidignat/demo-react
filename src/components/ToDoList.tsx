import { todoType } from "../myTypes";
import ToDoItem from "./ToDoItem";

const ToDoList = ({ todos, toggleTodo, deleteTodo }: any) => {
  return (
    <ul className="list">
      {todos.map((todo: todoType) => {
        return (
          <ToDoItem
            {...todo}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
            key={todo.id}
          />
        );
      })}
    </ul>
  );
};

export default ToDoList;
