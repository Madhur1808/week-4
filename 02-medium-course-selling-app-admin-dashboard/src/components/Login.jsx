import React from "react";
import { useState } from "react";
import {
  Card,
  Typography,
  Button,
  TextField,
  Box,
  AppBar,
  Link,
} from "@mui/material";

/// File is incomplete. You need to add input boxes to take input for users to login.
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
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
          COURSESITE
        </Typography>
        <Button variant="outline" color="inherit">
          <Link href="/register" underline="none" sx={{ color: "white" }}>
            Register
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
          Welcome back! Please login
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
          type="text"
          sx={{ width: 300 }}
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <Button variant="contained">Login</Button>
      </Card>
    </Box>
  );
}

export default Login;
