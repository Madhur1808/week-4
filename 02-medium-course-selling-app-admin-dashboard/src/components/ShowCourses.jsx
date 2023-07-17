import { React, useEffect, useState } from "react";
import axios from "axios";
import { Card, Link, Button, Box, Typography, AppBar } from "@mui/material";

function ShowCourses() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/admin/courses", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((response) => {
        console.log(response);
        setCourses(response.data.courses);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const logoutHandler = () => {
    localStorage.setItem("token", null);
  };

  // Add code to fetch courses from the server
  // and set it in the courses state variable.
  return (
    <Box
      sx={{
        display: "flex",
        // justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
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
        <Typography sx={{ padding: 2, fontWeight: "bold", fontSize: "20px" }}>
          AdminName:
        </Typography>
        <Button variant="outline" color="inherit" onClick={logoutHandler}>
          <Link href="/login" underline="none" sx={{ color: "white" }}>
            LOGOUT
          </Link>
        </Button>
      </AppBar>
      <Typography variant="h5" sx={{ marginTop: "100px" }}>
        All Courses
      </Typography>
      {courses.map((c) => (
        <Course title={c.title} description={c.description}>
          {c.title}
        </Course>
      ))}
      <Button variant="contained" color="inherit">
        <Link href="/" underline="none">
          ADD COURSE
        </Link>
      </Button>
    </Box>
  );
}

function Course(props) {
  return (
    <Box>
      <Card
        sx={{
          width: 500,
          height: 50,
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          marginBottom: "10px",
        }}
      >
        <Typography>{props.title}</Typography>
        <Typography>{props.description}</Typography>
      </Card>
    </Box>
  );
}

export default ShowCourses;
