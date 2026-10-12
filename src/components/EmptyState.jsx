import { Link } from "react-router-dom";
import { Paper, Typography, Button, Stack } from "@mui/material";
import PersonOffOutlinedIcon from "@mui/icons-material/PersonOffOutlined";

function EmptyState({ onReload }) {
  return (
    <Paper variant="outlined" sx={{ p: { xs: 4, md: 8 }, textAlign: "center", borderStyle: "dashed" }}>
      <PersonOffOutlinedIcon sx={{ fontSize: 56, color: "text.secondary", mb: 1 }} />
      <Typography variant="h5" gutterBottom>
        No students yet
      </Typography>
      <Typography color="text.secondary" sx={{ mb: 3 }}>
        Add your first student, or load a few sample ones to try the portal.
      </Typography>
      <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5} justifyContent="center">
        <Button component={Link} to="/add" variant="contained">
          Add student
        </Button>
        <Button variant="outlined" onClick={onReload}>
          Load sample students
        </Button>
      </Stack>
    </Paper>
  );
}

export default EmptyState;
