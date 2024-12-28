// theme/ThemeProvider.js
import { ThemeProvider as MuiThemeProvider, createTheme } from "@mui/material";
import { ReactNode } from "react";

const theme = createTheme({
  typography: {
    fontFamily: "Open Sans, Arial, sans-serif",
    h1: {
      fontFamily: "Poppins, serif",
      fontSize: "clamp(2rem, 5vw, 3rem)",
      lineHeight: 1.2,
      fontWeight: 700,
    },
    h2: {
      fontFamily: "Poppins, serif",
      fontSize: "clamp(1.5rem, 4vw, 2.5rem)",
      lineHeight: 1.3,
      fontWeight: 600,
    },
    h3: {
      fontFamily: "Poppins, serif",
      fontSize: "clamp(1.25rem, 3vw, 2rem)",
      lineHeight: 1.4,
      fontWeight: 900,
    },
    h4: {
      fontFamily: "Poppins, serif",
      fontSize: "clamp(1.125rem, 2.5vw, 1.75rem)",
      lineHeight: 1.5,
      fontWeight: 700,
    },
    h5: {
      fontFamily: "Poppins, serif",
      fontSize: "clamp(1rem, 2vw, 1.5rem)",
      lineHeight: 1.6,
      fontWeight: 600,
    },
    h6: {
      fontFamily: "Poppins, serif",
      fontSize: "clamp(0.875rem, 1.5vw, 1.25rem)",
      lineHeight: 1.7,
      fontWeight: 500,
    },
    body1: {
      fontFamily: "Open Sans, Arial, sans-serif",
      fontSize: "1rem",
      lineHeight: 1.5,
      letterSpacing: "0.02em",
    },
    body2: {
      fontFamily: "Open Sans, Arial, sans-serif",
      fontSize: "0.875rem",
      lineHeight: 1.5,
    },
  },
});

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>;
};

export { theme };
