import { useState, useEffect } from "react";
import axios from "axios";

import "./App.css";

import { TextField, Button, Typography, Card, Box } from "@mui/material";

let App = function App() {
  const [todos, setTodos] = useState([]);
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");

  // fetch all todos from server
  useEffect(() => {
    axios.get("http://localhost:3000/todos").then((response) => {
      // console.log(response);
      setTodos(response.data);
    });
  }, []);

  const deleteTodohandler = (todoId) => {
    console.log(todoId);
    axios
      .delete(`http://localhost:3000/todos/${todoId}`)
      .then((response) => {
        // console.log(response);
        setTodos(todos.filter((todo) => todo.id !== todoId));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const posttodohanlder = () => {
    console.log(title, description);
    axios
      .post("http://localhost:3000/todos", {
        title: title,
        description,
      })
      .then((response) => {
        const updatedtodos = [...todos, response.data];
        setTodos(updatedtodos);
        setTitle("");
        setDescription("");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  // if (!todos) {
  //   return <div>No todos present</div>;
  // }

  return (
    <>
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <Typography variant="h4" sx={{ marginBottom: 2 }}>
          Easy Todo App
        </Typography>

        <div>
          <TextField
            sx={{ height: 10, marginRight: 1 }}
            id="outlined-basic"
            label="Title"
            variant="outlined"
            type="text"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <TextField
            sx={{ height: 10, marginRight: 1 }}
            id="outlined-basic"
            label="Description"
            variant="outlined"
            type="text"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
          <Button
            sx={{ height: 55, padding: 3 }}
            variant="contained"
            onClick={posttodohanlder}
          >
            Add Todo
          </Button>
        </div>
        {/* <Typography variant="h5">Here is your todos</Typography> */}
        <Box sx={{ marginTop: 2 }}>
          {todos.map((todo) => {
            return (
              <Card
                sx={{
                  width: 600,
                  display: "flex",
                  justifyContent: "space-around",
                  padding: 1,
                  marginBottom: 1,
                }}
              >
                <Typography sx={{ fontWeight: "bold" }}>
                  {todo.title}
                </Typography>
                <Typography>{todo.description}</Typography>
                <Button
                  onClick={() => {
                    deleteTodohandler(todo.id);
                  }}
                >
                  Delete
                </Button>
              </Card>
            );
          })}
        </Box>
      </Box>
    </>
  );
};

// function Todo(props) {
//   // Add a delete button here so user can delete a TODO.
//   return <div>{props.title}</div>;
// }

export default App;
