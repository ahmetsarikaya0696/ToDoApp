import React from "react";
import "./TodoItem.css";

const TodoItem = (props) => {
  const clickHandler = () => {
    props.onDelete(props.todo);
  };

  return (
    <li onClick={clickHandler} className="todoItem" key={props.todo.id}>
      {props.todo.text}
    </li>
  );
};

export default TodoItem;
