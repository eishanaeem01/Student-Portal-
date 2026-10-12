import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
import { Box, Container } from "@mui/material";

import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import Students from "./pages/Students.jsx";
import AddStudent from "./pages/AddStudent.jsx";
import StudentDetail from "./pages/StudentDetail.jsx";
import NotFound from "./pages/NotFound.jsx";
import { API_URL, COURSES } from "./constants.js";

function App() {
  // The single source of truth for the whole app.
  // Each student looks like: { id, name, email, course }
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Bonus: fetch dummy users and turn them into students
  const loadSampleStudents = async () => {
    setLoading(true);
    setError("");
    try {
      const { data } = await axios.get(API_URL);
      const sample = data.map((user, index) => ({
        id: user.id,
        name: user.name,
        email: user.email.toLowerCase(),
        // the API has no "course", so we hand them out in turn
        course: COURSES[index % COURSES.length],
      }));
      setStudents(sample);
    } catch (err) {
      setError("Couldn't load sample students. Check your connection and try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadSampleStudents();
  }, []);

  const addStudent = (student) => {
    setStudents((prev) => [{ id: Date.now(), ...student }, ...prev]);
  };

  const deleteStudent = (id) => {
    setStudents((prev) => prev.filter((s) => s.id !== id));
  };

  return (
    <Box sx={{ minHeight: "100vh" }}>
      <Navbar count={students.length} />
      <Container maxWidth="lg" sx={{ py: { xs: 3, md: 5 } }}>
        <Routes>
          <Route path="/" element={<Home count={students.length} />} />
          <Route
            path="/students"
            element={
              <Students
                students={students}
                loading={loading}
                error={error}
                onDelete={deleteStudent}
                onReload={loadSampleStudents}
              />
            }
          />
          <Route path="/add" element={<AddStudent onAdd={addStudent} />} />
          <Route
            path="/student/:id"
            element={<StudentDetail students={students} loading={loading} onDelete={deleteStudent} />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
    </Box>
  );
}

export default App;
