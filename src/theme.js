import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: { main: "#1F3A93" },
    secondary: { main: "#F2A900" },
    background: { default: "#F4F6FB", paper: "#FFFFFF" },
    text: { primary: "#14213D", secondary: "#55607A" },
  },
  shape: { borderRadius: 10 },
  typography: {
    fontFamily: '"Plus Jakarta Sans", "Segoe UI", Roboto, sans-serif',
    h2: { fontWeight: 800, letterSpacing: "-0.03em" },
    h4: { fontWeight: 800, letterSpacing: "-0.02em" },
    h5: { fontWeight: 700 },
    h6: { fontWeight: 700 },
    button: { textTransform: "none", fontWeight: 600 },
  },
  components: {
    MuiButton: { defaultProps: { disableElevation: true } },
    MuiCard: {
      styleOverrides: {
        root: { border: "1px solid #E2E7F3", boxShadow: "none" },
      },
    },
  },
});

export default theme;
