import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Landing from "./components/Landing";
import CreateCourse from "./components/CreateCourse";
import Register from "./components/Register";
import ShowCourses from "./components/ShowCourses";
import Course from "./components/Course";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<CreateCourse />} />
        <Route path="/courses" element={<ShowCourses />} />
        <Route path="/course/:courseId" element={<Course />} />
      </Routes>
    </Router>
  );
}

export default App;
