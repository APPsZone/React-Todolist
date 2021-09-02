import React, { useState } from "react";
import PropTypes from "prop-types";

const Form = ({ addToDo, showAdd }) => {
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

  if (showAdd) {
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
  } else {
    return null;
  }
};

Form.propTypes = {
  addToDo: PropTypes.func.isRequired,
  showAdd: PropTypes.bool.isRequired
};

export default Form;
