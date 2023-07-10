import { useState, useEffect } from "react";
import axios from "axios";

import "./App.css";

let App = function App() {
  const [todos, setTodos] = useState([]);
  const [description, setDescription] = useState();
  const [title, setTitle] = useState();
  // fetch all todos from server
  useEffect(() => {
    axios.get("http://localhost:3000/todos").then((response) => {
      console.log(response);
      setTodos(response.data);
    });
  }, []);

  const deleteTodohandler = () => {
    axios.delete("http://localhost:3000/todos/13").then((response) => {
      console.log(response);
      setTodos(...todos);
    });
  };

  if (!todos) {
    return <div>No todos present</div>;
  }

  return (
    <>
      <div>
        <h1>Easy Todo App</h1>
        {todos.map((todo) => {
          return (
            <div>
              <span>title:{todo.title}</span>
              <span>Description:{todo.description}</span>
              <button onClick={deleteTodohandler}>Delete</button>
            </div>
          );
        })}
        <div>
          <input
            placeholder="title"
            type="text"
            title={title}
            onChange={() => {
              setTitle(e.target.value);
            }}
          />
          <input
            placeholder="description"
            type="text"
            description={description}
            onChange={() => {
              setDescription(e.target.value);
            }}
          />
          <button>Add Todo</button>
        </div>
      </div>
    </>
  );
};

// function Todo(props) {
//   // Add a delete button here so user can delete a TODO.
//   return <div>{props.title}</div>;
// }

export default App;
