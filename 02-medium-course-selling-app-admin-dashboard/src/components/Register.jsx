// import React from "react";
import { React, useState } from "react";
import axios from "axios";
import {
  Card,
  Typography,
  Button,
  TextField,
  Box,
  AppBar,
  Link,
} from "@mui/material";

/// File is incomplete. You need to add input boxes to take input for users to register.
function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const registerHandler = () => {
    axios
      .post("http://localhost:3000/admin/signup", {
        username: email,
        password,
      })
      .then((response) => {
        console.log(response);
        alert(response.data.message);
        localStorage.setItem("token", response.data.token);
      });
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "90vh",
        }}
      >
        <AppBar
          sx={{
            display: "flex",
            width: "100vw",
            height: "60px",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Typography sx={{ padding: 2, fontWeight: "bold", fontSize: "20px" }}>
            COURSESITE{" "}
          </Typography>
          <Button variant="outline" color="inherit">
            <Link href="/login" underline="none" sx={{ color: "white" }}>
              Login
            </Link>
          </Button>
        </AppBar>
        <Card
          sx={{
            width: 400,
            height: 400,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <Typography sx={{ fontWeight: "bold" }}>
            Please Register with your credentials
          </Typography>
          <TextField
            label="Email"
            type="text"
            sx={{ width: 300 }}
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <TextField
            label="Password"
            type="password"
            sx={{ width: 300 }}
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <Button variant="contained" onClick={registerHandler}>
            Register
          </Button>
        </Card>
      </Box>
    </>
  );
}

export default Register;
