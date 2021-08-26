import "./styles.css";

export default function App() {
  return (
    <div className="container">
      <link
        href="https://fonts.googleapis.com/css2?family=Bungee&family=Special+Elite&display=swap"
        rel="stylesheet"
      />
      <div className="frame">
        <section className="header">
          <button className="header-btn main-black-color">Add</button>
          <h1 className="header-title">To Do Lists</h1>
          <button className="header-btn main-red-color">Clear</button>
        </section>

        <section className="add">
          <form className="add-form">
            <input type="text" className="add-input" />
            <button className="add-btn main-black-color">Add</button>
          </form>
        </section>

        <section className="todos">
          <div className="todo">
            <span className="todo-text">React.js Project</span>
          </div>
          <div className="todo">
            <span className="todo-text">React.js Project</span>
          </div>
          <div className="todo">
            <span className="todo-text">React.js Project</span>
          </div>
          <div className="todo">
            <span className="todo-text">React.js Project</span>
          </div>
          <div className="todo">
            <span className="todo-text">React.js Project</span>
          </div>
          <div className="todo">
            <span className="todo-text">React.js Project</span>
          </div>
          <div className="todo">
            <span className="todo-text">React.js Project</span>
          </div>
          <div className="todo">
            <span className="todo-text">React.js Project</span>
          </div>
          <div className="todo">
            <span className="todo-text">React.js Project</span>
          </div>
          <div className="todo">
            <span className="todo-text">React.js Project</span>
          </div>
        </section>
      </div>
    </div>
  );
}
