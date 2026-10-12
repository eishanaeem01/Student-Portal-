import { Link } from "react-router-dom";
import { Box, Typography, Button, Stack, Paper } from "@mui/material";
import GroupsIcon from "@mui/icons-material/Groups";

function Home({ count }) {
  return (
    <Box sx={{ display: "grid", gap: 4, gridTemplateColumns: { xs: "1fr", md: "1.4fr 1fr" }, alignItems: "center", py: { xs: 2, md: 6 } }}>
      <Box>
        <Typography variant="h2" sx={{ fontSize: { xs: "2.4rem", md: "3.6rem" }, lineHeight: 1.05, mb: 2 }}>
          Keep every intern in one place.
        </Typography>
        <Typography color="text.secondary" sx={{ fontSize: "1.1rem", maxWidth: 520, mb: 4 }}>
          Add students, see which course each one is taking, and open a full profile
          whenever you need it.
        </Typography>
        <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5}>
          <Button component={Link} to="/students" variant="contained" size="large">
            View students
          </Button>
          <Button component={Link} to="/add" variant="outlined" size="large">
            Add student
          </Button>
        </Stack>
      </Box>

      <Paper
        variant="outlined"
        sx={{ p: 4, bgcolor: "primary.main", color: "primary.contrastText", borderColor: "primary.main" }}
      >
        <GroupsIcon sx={{ fontSize: 40, color: "secondary.main" }} />
        <Typography variant="h2" sx={{ fontSize: "4rem", mt: 1 }}>
          {count}
        </Typography>
        <Typography sx={{ opacity: 0.85 }}>
          {count === 1 ? "student enrolled" : "students enrolled"}
        </Typography>
      </Paper>
    </Box>
  );
}

export default Home;
