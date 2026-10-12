# Intern Student Portal

A small React app to manage a list of students: add, view, search and delete.

## Run it

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually http://localhost:5173).

## Folder structure

```
src/
  components/   Reusable pieces: Navbar, StudentCard, StudentForm, EmptyState
  pages/        One file per route: Home, Students, AddStudent, StudentDetail, NotFound
  App.jsx       Holds the students state and defines the routes
  constants.js  API URL and the list of courses
  theme.js      Material UI theme (colors, font, shapes)
  main.jsx      Entry point: BrowserRouter + ThemeProvider
```

## Routes

| Path           | Page          |
| -------------- | ------------- |
| `/`            | Home          |
| `/students`    | Students      |
| `/add`         | Add Student   |
| `/student/:id` | Student Detail|
| `*`            | 404           |

## How it works (for explaining the code)

- **State lives in `App.jsx`.** `students` is an array of `{ id, name, email, course }`.
  `addStudent` and `deleteStudent` update it, and they are passed down to pages as **props**.
- **Events:** the form uses `onChange` / `onSubmit`, cards use `onClick` for delete,
  and the search box uses `onChange` to update its own `query` state.
- **Conditional rendering:** `Students.jsx` shows a loading spinner, the "No students yet"
  message (`EmptyState`), a "No student matches" message, or the grid of cards.
- **Dynamic route:** `/student/:id` reads the id with `useParams()` and finds the student
  with `students.find(...)`. If nothing matches, it shows "Student not found".
- **Axios + useEffect (bonus):** on first load `App.jsx` fetches users from
  jsonplaceholder and maps them to students. The API has no course, so courses are assigned in turn.
- **Search (bonus):** `students.filter(...)` by lowercase name, computed on each render.
- **Material UI:** `AppBar` (Navbar), `Card` (students), `TextField` + `Button` (form).
