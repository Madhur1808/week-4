import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { TextField, Card, Button, Link, Typography, Box } from "@mui/material";

import axios from "axios";
import Appbar from "./Appbar";
// import { Coursecard } from "./ShowCourses";

const Course = () => {
  const { courseId } = useParams();
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
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
    fetchData();
  }, []);

  console.log(courses);
  let course = null;
  for (let i = 0; i < courses.length; i++) {
    if (courses[i].id == courseId) course = courses[i];
  }

  console.log(course);
  if (!course) {
    return <div>Loading...</div>;
  }
  // console.log(course.title, course.description);
  return (
    <div style={{ marginTop: 100, marginLeft: 10 }}>
      <Appbar />
      <Box
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <CourseDisplay
          title={course.title}
          description={course.description}
          image={course.imageLink}
        />
        <UpdateCard course={course} courses={courses} setCourses={setCourses} />
      </Box>
    </div>
  );
};

const CourseDisplay = (props) => {
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

        marginTop: "10px",
      }}
    >
      <Typography textAlign="center">{props.title}</Typography>
      <Typography textAlign="center">{props.description}</Typography>
      <img src={props.image} height="200px" width="250px" />
    </Card>
  );
};
const UpdateCard = (props) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  const course = props.course;
  const courseId = course.id;
  // console.log(courseId);
  // console.log(course);
  const updateCourseHandler = async () => {
    try {
      const response = await axios.put(
        `http://localhost:3000/admin/courses/${courseId}`,
        {
          title,
          description,
          price: 5999,
          imageLink: image,
          published: true,
        },
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );

      console.log(response);
      // alert(response.data.message);

      let updatedCourses = [];

      for (let i = 0; i < props.courses.length; i++) {
        if (props.courses[i].id === courseId) {
          updatedCourses.push({
            id: courseId,
            title: title,
            description: description,
            imageLink: image,
          });
        } else {
          updatedCourses.push(props.courses[i]);
        }
      }
      props.setCourses(updatedCourses);
      setTitle("");
      setDescription("");
      setImage("");
    } catch (error) {
      console.log(error);
      alert(respone.data.message);
    }
  };
  return (
    <div>
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
          Please update the details of the course.
        </Typography>
        <TextField
          label="Title"
          type="text"
          sx={{ width: 300 }}
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <TextField
          label="Description"
          type="text"
          sx={{ width: 300 }}
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
        <TextField
          label="ImageLink"
          type="text"
          sx={{ width: 300 }}
          value={image}
          onChange={(e) => {
            setImage(e.target.value);
          }}
        />
        <Button variant="contained" onClick={updateCourseHandler}>
          UPDATE COURSES
        </Button>
        <Button variant="outlined">
          <Link underline="none" href="/courses">
            GET COURSES
          </Link>
        </Button>
      </Card>
    </div>
  );
};

export default Course;
