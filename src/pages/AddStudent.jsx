import { useNavigate } from "react-router-dom";
import { Paper, Typography, Box } from "@mui/material";
import StudentForm from "../components/StudentForm.jsx";

function AddStudent({ onAdd }) {
  const navigate = useNavigate();

  const handleSubmit = (student) => {
    onAdd(student);
    navigate("/students"); // go back to the list so the new card is visible
  };

  return (
    <Box sx={{ maxWidth: 560, mx: "auto" }}>
      <Typography variant="h4" gutterBottom>
        Add student
      </Typography>
      <Typography color="text.secondary" sx={{ mb: 3 }}>
        Fill in the details below. All fields are required.
      </Typography>
      <Paper variant="outlined" sx={{ p: { xs: 2.5, sm: 4 } }}>
        <StudentForm onSubmit={handleSubmit} onCancel={() => navigate("/students")} />
      </Paper>
    </Box>
  );
}

export default AddStudent;
