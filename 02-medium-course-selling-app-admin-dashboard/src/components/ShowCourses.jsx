import { React, useEffect, useState } from "react";
import axios from "axios";
import { Card, Link, Button, Box, Typography } from "@mui/material";
import Appbar from "./Appbar";

function ShowCourses() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/admin/courses",
          {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
          }
        );

        console.log(response);
        setCourses(response.data.courses);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCourse();
  }, []);

  // Add code to fetch courses from the server
  // and set it in the courses state variable.
  return (
    <Box>
      {/* <AppBar
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
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Button variant="contained" color="inherit">
            <Link href="/" underline="none">
              ADD COURSE
            </Link>
          </Button>
          <Button variant="outline" color="inherit" onClick={logoutHandler}>
            <Link href="/login" underline="none" sx={{ color: "white" }}>
              LOGOUT
            </Link>
          </Button>
        </Box>
      </AppBar> */}
      <Appbar />
      <Typography variant="h5" sx={{ marginTop: "90px" }}>
        All Courses
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {courses.map((c) => (
          <Coursecard
            title={c.title}
            description={c.description}
            image={c.imageLink}
          >
            {c.title}
          </Coursecard>
        ))}
      </Box>
    </Box>
  );
}

export function Coursecard(props) {
  // console.log(props);
  return (
    <Card
      sx={{
        width: 300,
        height: 300,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        marginRight: "10px",
        backgroundImage: `url(${props.image})`,
        backgroundSize: "cover",
      }}
    >
      <Typography textAlign="center">{props.title}</Typography>
      <Typography textAlign="center">{props.description}</Typography>
    </Card>
  );
}

export default ShowCourses;
