import { Link } from "react-router-dom";
import { Box, Typography, Button } from "@mui/material";

function NotFound() {
  return (
    <Box sx={{ textAlign: "center", py: { xs: 6, md: 10 } }}>
      <Typography variant="h2" sx={{ fontSize: { xs: "5rem", md: "8rem" }, color: "primary.main", lineHeight: 1 }}>
        404
      </Typography>
      <Typography variant="h5" sx={{ mt: 2, mb: 1 }}>
        This page doesn't exist
      </Typography>
      <Typography color="text.secondary" sx={{ mb: 3 }}>
        The link may be broken, or the page may have moved.
      </Typography>
      <Button component={Link} to="/" variant="contained" size="large">
        Go to home
      </Button>
    </Box>
  );
}

export default NotFound;
