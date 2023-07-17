import { React, useEffect, useState } from "react";
import { Typography, Button, Link, Box } from "@mui/material";
import axios from "axios";
import CreateCourse from "./CreateCourse";

/// This is the landing page. You need to add a link to the login page here.
/// Maybe also check from the backend if the user is already logged in and then show them a logout button
/// Logging a user out is as simple as deleting the token from the local storage.
function Landing() {
  const [useremail, setUseremail] = useState(null);
  useEffect(() => {
    // console.log(localStorage.getItem("token"));
    axios
      .get("http://localhost:3000/admin/me/", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((response) => {
        // console.log(response.data);
        if (response.data.username) setUseremail(response.data.username);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (useremail) {
    return <CreateCourse useremail={useremail} />;
  }
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "90vh",
      }}
    >
      <Typography variant="h4" sx={{ textAlign: "center" }}>
        Welcome to course selling website!
      </Typography>
      <Button variant="contained" sx={{ width: "100px", marginTop: 2 }}>
        <Link href="/register" underline="none" sx={{ color: "white" }}>
          Register
        </Link>
      </Button>

      <br />
      <Button variant="contained" sx={{ width: "100px" }}>
        <Link href="/login" underline="none" style={{ color: "white" }}>
          Login
        </Link>
      </Button>
    </Box>
  );
}

export default Landing;
