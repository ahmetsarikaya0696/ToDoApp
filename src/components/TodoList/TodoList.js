import React from "react";
import "./TodoList.css";
import TodoItem from "../TodoItem/TodoItem";

const TodoList = (props) => {
  const deleteHandler = (todo) => {
    props.onDelete(todo);
  };
  
  return (
    <div>
      <ul className="todoList">
        {props.todos.map((todo) => (
          <TodoItem onDelete={deleteHandler} key={todo.id} todo={todo} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
