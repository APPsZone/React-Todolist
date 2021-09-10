import React, { useState } from "react";

import Paper from "../components/Paper";
import Header from "../components/Header";
import Form from "../components/Form";
import Todos from "../components/Todos";

const Todolist = () => {
  const [todos, setTodos] = useState([
    { text: "Learning React.", isCompleted: false },
    { text: "Learning React Hooks.", isCompleted: false },
    { text: "Learning Styling in React.", isCompleted: false }
  ]);

  const [showAdd, setShowAdd] = useState(false);

  const addToDo = (value) => {
    if (todos.length < 10) {
      const addedTodo = [...todos, { text: value, isCompleted: false }];

      setTodos(addedTodo);
    } else {
      alert("Only 10 todos is allowed.");
    }
  };
  const completeTodo = (index) => {
    const addedTodo = [...todos];
    addedTodo[index].isCompleted = !addedTodo[index].isCompleted;

    setTodos(addedTodo);
  };
  const clearTodos = () => setTodos([]);
  const showAddToggle = () => setShowAdd(!showAdd);

  console.log("todos", todos);

  return (
    <Paper>
      <Header
        showAddToggle={showAddToggle}
        showAdd={showAdd}
        clearTodos={clearTodos}
      />
      <Form addToDo={addToDo} showAdd={showAdd} />
      <Todos todos={todos} completeTodo={completeTodo} />
      <link
        href="https://fonts.googleapis.com/css2?family=Bungee&family=Special+Elite&display=swap"
        rel="stylesheet"
      />
    </Paper>
  );
};

export default Todolist;
