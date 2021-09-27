import React from "react";
import PropTypes from "prop-types";

import Button from "../button/Button";
import styles from "./header.module.css";

const Header = ({ showAddToggle, showAdd, clearTodos }) => {
  return (
    <section className={styles.header}>
      {/* <button className="header-btn main-black-color" onClick={showAddToggle}>
        {showAdd ? "Finish" : "Add"}
      </button> --> without JSX */}

      <Button text={showAdd ? "Finish" : "Add"} onClick={showAddToggle} />

      <h1 className={styles.headerTitle}>To Do Lists</h1>

      {/* <button className="header-btn main-red-color" onClick={clearTodos}>
        Clear
      </button> --> without JSX */}

      <Button text="Clear" onClick={clearTodos} color="red" align="right" />
    </section>
  );
};

Header.propTypes = {
  showAddToggle: PropTypes.func.isRequired,
  showAdd: PropTypes.bool.isRequired,
  clearTodos: PropTypes.func.isRequired
};
export default Header;
