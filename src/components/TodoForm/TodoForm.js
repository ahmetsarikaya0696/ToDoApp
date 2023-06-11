import React, { useState } from "react";
// import "./TodoForm.css";
import styles from "./TodoForm.module.css";
import Button from "../UI/Button";
// import styled from "styled-components";

// Styled-Components Approach
// const FormControl = styled.div`
//   margin: 0.5rem 0;

//   & label {
//     font-weight: bold;
//     display: block;
//     margin-bottom: 0.5rem;
//     color: ${(props) => props.invalid && "red"};
//   }

//   & input {
//     display: block;
//     width: 100%;
//     border: 1px solid ${(props) => (props.invalid ? "red" : "#ccc")};
//     font: inherit;
//     line-height: 1.5rem;
//     padding: 0 0.25rem;
//     border-radius: 6px;
//   }

//   & input:focus {
//     outline: none;
//     background: #fad0ec;
//     border-color: #8b005d;
//   }

//   & span {
//     color: red;
//     font-size: smaller;
//   }
// `;

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

  // CSS Approach
  // return (
  //   <div className="todoForm">
  //     <form onSubmit={submitHandler}>
  //       <div className={`form-control ${!isValid && "invalid"}`}>
  //         <label>Todo</label>
  //         <input type="text" value={enteredTodo} onChange={todoChangeHandler} />
  //         {!isValid && <span>Please enter a valid todo!</span>}
  //       </div>
  //       <Button type="submit">Add Todo</Button>
  //     </form>
  //   </div>
  // );

  // styledComponent Approach
  // return (
  //   <div className="todoForm">
  //     <form onSubmit={submitHandler}>
  //       <FormControl invalid={!isValid}>
  //         <label>Todo</label>
  //         <input type="text" value={enteredTodo} onChange={todoChangeHandler} />
  //         {!isValid && <span>Please enter a valid todo!</span>}
  //       </FormControl>
  //       <Button type="submit">Add Todo</Button>
  //     </form>
  //   </div>
  // );

  // CSS Module Approach
  return (
    <div className={styles.todoForm}>
      <form onSubmit={submitHandler}>
        <div
          className={`${styles["form-control"]} ${!isValid && styles.invalid}`}
        >
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
