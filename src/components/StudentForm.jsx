import { useState } from "react";
import { Box, TextField, Button, MenuItem, Stack } from "@mui/material";
import { COURSES } from "../constants.js";

const emptyForm = { name: "", email: "", course: "" };

function validate(values) {
  const errors = {};
  if (!values.name.trim()) errors.name = "Enter the student's full name.";
  if (!values.email.trim()) errors.email = "Enter an email address.";
  else if (!/^\S+@\S+\.\S+$/.test(values.email)) errors.email = "Enter a valid email, like name@example.com.";
  if (!values.course) errors.course = "Pick a course.";
  return errors;
}

function StudentForm({ onSubmit, onCancel }) {
  const [values, setValues] = useState(emptyForm);
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    // clear the error for a field as soon as the user edits it
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const foundErrors = validate(values);
    setErrors(foundErrors);
    if (Object.keys(foundErrors).length > 0) return;

    onSubmit({
      name: values.name.trim(),
      email: values.email.trim().toLowerCase(),
      course: values.course,
    });
    setValues(emptyForm);
  };

  return (
    <Box component="form" onSubmit={handleSubmit} noValidate>
      <Stack spacing={2.5}>
        <TextField
          label="Full name"
          name="name"
          value={values.name}
          onChange={handleChange}
          error={Boolean(errors.name)}
          helperText={errors.name}
          autoFocus
          fullWidth
        />
        <TextField
          label="Email"
          name="email"
          type="email"
          value={values.email}
          onChange={handleChange}
          error={Boolean(errors.email)}
          helperText={errors.email}
          fullWidth
        />
        <TextField
          select
          label="Course"
          name="course"
          value={values.course}
          onChange={handleChange}
          error={Boolean(errors.course)}
          helperText={errors.course}
          fullWidth
        >
          {COURSES.map((course) => (
            <MenuItem key={course} value={course}>
              {course}
            </MenuItem>
          ))}
        </TextField>

        <Stack direction="row" spacing={1.5}>
          <Button type="submit" variant="contained" size="large">
            Add student
          </Button>
          <Button type="button" variant="text" size="large" onClick={onCancel}>
            Cancel
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
}

export default StudentForm;
