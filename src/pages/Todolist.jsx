import React, { useState } from "react";

import Paper from "../components/Paper";
import Header from "../components/Header";
import Form from "../components/Form";
import Todos from "../components/Todos";

const Todolist = () => {
  const [todos, setTodos] = useState([
    { text: "Learning React." },
    { text: "Learning React Hooks." },
    { text: "Learning Styling in React." }
  ]);

  const [showAdd, setShowAdd] = useState(false);

  const addToDo = (value) => {
    const addedTodo = [...todos, { text: value }];

    setTodos(addedTodo);
  };

  const showAddToggle = () => setShowAdd(!showAdd);

  console.log("showAdd", showAdd);

  return (
    <Paper>
      <Header showAddToggle={showAddToggle} />
      <Form addToDo={addToDo} showAdd={showAdd} />
      <Todos todos={todos} />
      <link
        href="https://fonts.googleapis.com/css2?family=Bungee&family=Special+Elite&display=swap"
        rel="stylesheet"
      />
    </Paper>
  );
};

export default Todolist;
