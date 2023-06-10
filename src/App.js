import React, { useState } from "react";
import "./App.css";
import TodoForm from "./components/TodoForm/TodoForm";
import TodoList from "./components/TodoList/TodoList";

const App = () => {
  const [todos, setTodos] = useState([
    { text: "Projeyi bitir!", id: "t1" },
    { text: "Yürüyüşe çık!", id: "t2" },
  ]);

  const addTodoHandler = (enteredTodo) => {
    const todo = {
      ...enteredTodo,
      id: Math.random().toString(),
    };

    setTodos((prevState) => [todo, ...prevState]);
  };

  const deleteHandler = (todo) => {
    setTodos((prevState) => {
      let index = prevState.indexOf(todo);
      if (index !== -1) {
        prevState.splice(index, 1);
      }
      return [...prevState];
    });
  };

  return (
    <div>
      <section id="todoForm">
        <TodoForm onAddTodo={addTodoHandler} />
      </section>
      <section id="todos">
        <TodoList onDelete={deleteHandler} todos={todos} />
      </section>
    </div>
  );
};

export default App;
