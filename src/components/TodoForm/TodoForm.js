import React, { useState } from "react";
import "./TodoForm.css";
import Button from "../UI/Button";

const TodoForm = (props) => {
  const [enteredTodo, setEnteredTodo] = useState("");
  const [isValid, setIsValid] = useState(true);
  const todoChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }

    setEnteredTodo(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (enteredTodo.trim().length === 0) {
      setIsValid(false);
      return;
    }

    const formData = { text: enteredTodo };
    props.onAddTodo(formData);

    setEnteredTodo("");
  };

  return (
    <div className="todoForm">
      <form onSubmit={submitHandler}>
        <div className={`form-control ${!isValid && "invalid"}`}>
          <label>Todo</label>
          <input type="text" value={enteredTodo} onChange={todoChangeHandler} />
          {!isValid && <span>Please enter a valid todo!</span>}
        </div>
        <Button type="submit">Add Todo</Button>
      </form>
    </div>
  );
};

export default TodoForm;
