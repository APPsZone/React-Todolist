import React from "react";

import Todo from "./Todo";

const Todos = () => {
  const todos = [
    {
      text: "Learning React!"
    },
    {
      text: "Learning Props in React!"
    },
    {
      text: "Learning React Hooks!"
    },
    {
      text: "Learning State in React!"
    },
    {
      text: "Learning React is fun!"
    }
  ];
  return (
    <section className="todos">
      {todos.map((todo) => {
        return <Todo text={todo.text} />;
      })}
    </section>
  );
};

export default Todos;
