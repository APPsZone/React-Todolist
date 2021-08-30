import React, { useState } from "react";
import PropTypes from "prop-types";

const Form = ({ addToDo }) => {
  const [value, setValue] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!value) {
      alert("Please fill up with the sentences.");
      return;
    }

    addToDo(value);
    setValue("");
  };

  return (
    <section className="add">
      <form className="add-form" onSubmit={handleFormSubmit}>
        <input
          type="text"
          className="add-input"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button className="add-btn main-black-color">Add</button>
      </form>
    </section>
  );
};

Form.propTypes = {
  addToDo: PropTypes.func.isRequired
};

export default Form;
