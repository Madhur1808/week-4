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

function CreateCourse({ useremail }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  console.log({ useremail });

  const addCourseHandler = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3000/admin/courses/",
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
      alert(response.data.message);
    } catch (error) {
      console.log(error);
      alert(error.response.data);
    }
  };

  const logoutHandler = () => {
    localStorage.setItem("token", null);
  };

  return (
    <div>
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
          <Typography sx={{ padding: 2, fontWeight: "bold", fontSize: "20px" }}>
            AdminName:{useremail}
          </Typography>
          <Button variant="outline" color="inherit" onClick={logoutHandler}>
            <Link href="/login" underline="none" sx={{ color: "white" }}>
              LOGOUT
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
            Please enter the details of the course.
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
          <Button variant="contained" onClick={addCourseHandler}>
            ADD COURSE
          </Button>
          <Button variant="outlined">
            <Link underline="none" href="/courses">
              GET COURSES
            </Link>
          </Button>
        </Card>
      </Box>
    </div>
  );
}
export default CreateCourse;
