import { useState } from "react";
import { Link } from "react-router-dom";
import { Box, Typography, TextField, InputAdornment, Button, Alert, CircularProgress, Stack } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";

import StudentCard from "../components/StudentCard.jsx";
import EmptyState from "../components/EmptyState.jsx";

function Students({ students, loading, error, onDelete, onReload }) {
  const [query, setQuery] = useState("");

  // Bonus: filter by name (case-insensitive)
  const visibleStudents = students.filter((s) =>
    s.name.toLowerCase().includes(query.trim().toLowerCase())
  );

  return (
    <Box>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={2}
        sx={{ justifyContent: "space-between", alignItems: { sm: "center" }, mb: 3 }}
      >
        <Box>
          <Typography variant="h4">Students</Typography>
          <Typography color="text.secondary">
            {students.length} {students.length === 1 ? "student" : "students"} in total
          </Typography>
        </Box>
        <Button component={Link} to="/add" variant="contained" startIcon={<AddIcon />}>
          Add student
        </Button>
      </Stack>

      {error && (
        <Alert
          severity="error"
          sx={{ mb: 3 }}
          action={
            <Button color="inherit" size="small" onClick={onReload}>
              Try again
            </Button>
          }
        >
          {error}
        </Alert>
      )}

      {loading ? (
        <Box sx={{ display: "flex", justifyContent: "center", py: 10 }}>
          <CircularProgress aria-label="Loading students" />
        </Box>
      ) : students.length === 0 ? (
        <EmptyState onReload={onReload} />
      ) : (
        <>
          <TextField
            placeholder="Search students by name"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            fullWidth
            sx={{ maxWidth: 420, mb: 3, bgcolor: "background.paper" }}
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              },
              htmlInput: { "aria-label": "Search students by name" },
            }}
          />

          {visibleStudents.length === 0 ? (
            <Typography color="text.secondary" sx={{ py: 6, textAlign: "center" }}>
              No student matches “{query}”. Try a different name.
            </Typography>
          ) : (
            <Box
              sx={{
                display: "grid",
                gap: 2.5,
                gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)", md: "repeat(3, 1fr)" },
              }}
            >
              {visibleStudents.map((student) => (
                <StudentCard key={student.id} student={student} onDelete={onDelete} />
              ))}
            </Box>
          )}
        </>
      )}
    </Box>
  );
}

export default Students;
