import React, { useState } from "react";
import "./TodoForm.css";
import Card from "../UI/Card";
import Button from "../UI/Button";

const TodoForm = (props) => {
  const [enteredTodo, setEnteredTodo] = useState("");
  const todoChangeHandler = (event) => {
    setEnteredTodo(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const formData = { text: enteredTodo };
    props.onAddTodo(formData);

    setEnteredTodo("");
  };

  return (
    <div className="todoForm">
      <form onSubmit={submitHandler}>
        <div className="form-control">
          <label>Todo</label>
          <input type="text" value={enteredTodo} onChange={todoChangeHandler} />
        </div>
        <Button type="submit">Add Todo</Button>
      </form>
    </div>
  );
};

export default TodoForm;
