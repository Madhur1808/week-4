import { React, useEffect, useState } from "react";
import axios from "axios";
import { Card, Link, Button, Box, Typography } from "@mui/material";
import Appbar from "./Appbar";

import { useNavigate } from "react-router-dom";

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

  return (
    <Box>
      <Appbar />
      <Typography variant="h5" sx={{ marginTop: "90px", textAlign: "center" }}>
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
            id={c.id}
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
  const navigate = useNavigate();

  console.log(props);

  const courseHandler = (id) => {
    navigate(`/course/${id}`);
  };
  return (
    <Card
      sx={{
        width: "250px",
        minHeight: 200,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        marginRight: "10px",
        // backgroundImage: `url(${props.image})`,
        backgroundSize: "cover",
        marginTop: "10px",
      }}
    >
      <Typography textAlign="center">{props.title}</Typography>
      <Typography textAlign="center">{props.description}</Typography>
      <img src={props.image} height="200px" width="250px" />
      <Button
        variant="contained"
        style={{ margin: 10 }}
        onClick={() => {
          courseHandler(props.id);
        }}
      >
        EDIT
      </Button>
    </Card>
  );
}

export default ShowCourses;
