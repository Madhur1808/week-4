import { useState, useEffect } from "react";
import axios from "axios";

import "./App.css";

let App = function App() {
  const [todos, setTodos] = useState([]);
  // fetch all todos from server
  useEffect(() => {
    axios.get("http://localhost:3000/todos").then((response) => {
      setTodos(response.data);
    });
  }, []);

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
              <button>Delete</button>
            </div>
          );
        })}
        <div>
          <input
            placeholder="title"
            type="text"
            title={title}
            onChange={changehandler}
          />
          <input
            placeholder="description"
            type="text"
            description={description}
            onChange={changehandler}
          />
          <button onClick={addtodo}>Add Todo</button>
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
