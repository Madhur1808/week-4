import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import axios from "axios";
import Appbar from "./Appbar";
import { Coursecard } from "./ShowCourses";

const Course = () => {
  const { courseId } = useParams();
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
      .then((error) => {
        console.log(error);
      });
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
  console.log(course.title, course.description);
  return (
    <div>
      <Appbar />
      <Coursecard course={course} />
    </div>
  );
};

export default Course;
