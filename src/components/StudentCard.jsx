import { Link } from "react-router-dom";
import { Card, CardContent, CardActions, Avatar, Typography, Chip, Button, IconButton, Box, Tooltip } from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutlined";

export function getInitials(name) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0].toUpperCase())
    .join("");
}

function StudentCard({ student, onDelete }) {
  return (
    <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
      <CardContent sx={{ flexGrow: 1 }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}>
          <Avatar sx={{ bgcolor: "primary.main", width: 48, height: 48, fontWeight: 700 }}>
            {getInitials(student.name)}
          </Avatar>
          <Box sx={{ minWidth: 0 }}>
            <Typography variant="h6" noWrap>
              {student.name}
            </Typography>
            <Typography variant="body2" color="text.secondary" noWrap>
              {student.email}
            </Typography>
          </Box>
        </Box>
        <Chip label={student.course} size="small" color="primary" variant="outlined" />
      </CardContent>

      <CardActions sx={{ justifyContent: "space-between", px: 2, pb: 2 }}>
        <Button component={Link} to={`/student/${student.id}`} size="small" variant="contained">
          View details
        </Button>
        <Tooltip title="Delete student">
          <IconButton aria-label={`Delete ${student.name}`} color="error" onClick={() => onDelete(student.id)}>
            <DeleteOutlineIcon />
          </IconButton>
        </Tooltip>
      </CardActions>
    </Card>
  );
}

export default StudentCard;
