import { NavLink, Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button, Box, Badge } from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";

const links = [
  { to: "/", label: "Home", end: true },
  { to: "/students", label: "Students" },
  { to: "/add", label: "Add student" },
];

function Navbar({ count }) {
  return (
    <AppBar position="sticky" color="primary" elevation={0}>
      <Toolbar sx={{ gap: 2, flexWrap: "wrap", py: { xs: 1, sm: 0 } }}>
        <Box
          component={Link}
          to="/"
          sx={{ display: "flex", alignItems: "center", gap: 1, color: "inherit", textDecoration: "none", mr: "auto" }}
        >
          <SchoolIcon />
          <Typography variant="h6" noWrap>
            Intern Student Portal
          </Typography>
        </Box>

        <Box sx={{ display: "flex", gap: 0.5 }}>
          {links.map((link) => (
            <Button
              key={link.to}
              component={NavLink}
              to={link.to}
              end={link.end}
              color="inherit"
              sx={{
                borderRadius: 2,
                "&.active": { bgcolor: "rgba(255,255,255,0.18)" },
              }}
            >
              {link.label === "Students" ? (
                <Badge badgeContent={count} color="secondary" max={99} sx={{ "& .MuiBadge-badge": { right: -14, top: 2 } }}>
                  {link.label}
                </Badge>
              ) : (
                link.label
              )}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
