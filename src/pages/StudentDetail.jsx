import { Link, useNavigate, useParams } from "react-router-dom";
import { Box, Card, CardContent, Avatar, Typography, Chip, Button, Stack, Divider, CircularProgress } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutlined";
import { getInitials } from "../components/StudentCard.jsx";

function StudentDetail({ students, loading, onDelete }) {
  const { id } = useParams(); // the :id from /student/:id (always a string)
  const navigate = useNavigate();

  const student = students.find((s) => String(s.id) === id);

  if (loading) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", py: 10 }}>
        <CircularProgress aria-label="Loading student" />
      </Box>
    );
  }

  if (!student) {
    return (
      <Box sx={{ textAlign: "center", py: 8 }}>
        <Typography variant="h5" gutterBottom>
          Student not found
        </Typography>
        <Typography color="text.secondary" sx={{ mb: 3 }}>
          This student may have been deleted.
        </Typography>
        <Button component={Link} to="/students" variant="contained">
          Back to students
        </Button>
      </Box>
    );
  }

  const handleDelete = () => {
    onDelete(student.id);
    navigate("/students");
  };

  return (
    <Box sx={{ maxWidth: 640, mx: "auto" }}>
      <Button component={Link} to="/students" startIcon={<ArrowBackIcon />} sx={{ mb: 2 }}>
        All students
      </Button>

      <Card>
        <CardContent sx={{ p: { xs: 3, sm: 4 } }}>
          <Stack direction={{ xs: "column", sm: "row" }} spacing={3} sx={{ alignItems: { sm: "center" } }}>
            <Avatar sx={{ bgcolor: "primary.main", width: 88, height: 88, fontSize: "2rem", fontWeight: 700 }}>
              {getInitials(student.name)}
            </Avatar>
            <Box sx={{ minWidth: 0 }}>
              <Typography variant="h4" sx={{ wordBreak: "break-word" }}>
                {student.name}
              </Typography>
              <Chip label={student.course} color="primary" variant="outlined" size="small" sx={{ mt: 1 }} />
            </Box>
          </Stack>

          <Divider sx={{ my: 3 }} />

          <Box sx={{ display: "grid", gridTemplateColumns: "120px 1fr", rowGap: 1.5 }}>
            <Typography color="text.secondary">Email</Typography>
            <Typography sx={{ wordBreak: "break-all" }}>{student.email}</Typography>
            <Typography color="text.secondary">Course</Typography>
            <Typography>{student.course}</Typography>
            <Typography color="text.secondary">Student ID</Typography>
            <Typography>{student.id}</Typography>
          </Box>

          <Divider sx={{ my: 3 }} />

          <Button color="error" variant="outlined" startIcon={<DeleteOutlineIcon />} onClick={handleDelete}>
            Delete student
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
}

export default StudentDetail;
