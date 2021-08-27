import React from "react";

import Paper from "../components/Paper";
import Header from "../components/Header";
import Form from "../components/Form";
import Todos from "../components/Todos";

const Todolist = () => {
  return (
    <Paper>
      <Header />
      <Form />
      <Todos />
      <link
        href="https://fonts.googleapis.com/css2?family=Bungee&family=Special+Elite&display=swap"
        rel="stylesheet"
      />
    </Paper>
  );
};

export default Todolist;
