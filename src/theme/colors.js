import { alpha } from "@mui/material/styles";

const withAlphas = (color) => {
  return {
    ...color,
    alpha4: alpha(color.main, 0.04),
    alpha8: alpha(color.main, 0.08),
    alpha12: alpha(color.main, 0.12),
    alpha30: alpha(color.main, 0.3),
    alpha50: alpha(color.main, 0.5),
  };
};

export const neutral = {
  50: "#fafafa",
  100: "#f5f5f5",
  200: "#e5e5e5",
  300: "#d4d4d4",
  400: "#a3a3a3",
  500: "#6C737F",
  600: "#4D5761",
  700: "#2F3746",
  800: "#1C2536",
  900: "#111927",
};

export const text = {
  0: "#e5e5e5",
  50: "#d4d4d4",
  100: "#a3a3a3",
  200: "#737373",
  300: "#525252",
};

export const customBlue = withAlphas({
  lightest: "#eef4ff",
  light: "#dbeafe",
  main: "#2563eb",
  dark: "#1e40af",
  darkest: "#1e3a8a",
  contrastText: "#FFFFFF",
});

export const blue = withAlphas({
  lightest: "#F5F8FF",
  light: "#EBEFFF",
  main: "#2970FF",
  dark: "#004EEB",
  darkest: "#00359E",
  contrastText: "#FFFFFF",
});

export const green = withAlphas({
  lightest: "#F6FEF9",
  light: "#EDFCF2",
  main: "#16B364",
  dark: "#087443",
  darkest: "#084C2E",
  contrastText: "#FFFFFF",
});

export const indigo = withAlphas({
  lightest: "#F5F7FF",
  light: "#EBEEFE",
  main: "#6366F1",
  dark: "#4338CA",
  darkest: "#312E81",
  contrastText: "#FFFFFF",
});

export const purple = withAlphas({
  lightest: "#F9F5FF",
  light: "#F4EBFF",
  main: "#9E77ED",
  dark: "#6941C6",
  darkest: "#42307D",
  contrastText: "#FFFFFF",
});

export const success = withAlphas({
  lightest: "#F0FDF9",
  light: "#d1fae5",
  main: "#10b981",
  dark: "#0B815A",
  darkest: "#134E48",
  contrastText: "#FFFFFF",
});

export const info = withAlphas({
  lightest: "#ECFDFF",
  light: "#CFF9FE",
  main: "#dbeafe",
  dark: "#0E7090",
  darkest: "#164C63",
  contrastText: "#FFFFFF",
});

export const warning = withAlphas({
  lightest: "#FFFAEB",
  light: "#FEF0C7",
  main: "#F79009",
  dark: "#B54708",
  darkest: "#7A2E0E",
  contrastText: "#FFFFFF",
});

export const error = withAlphas({
  100: "#F43F5E",
  lightest: "#FEF3F2",
  light: "#FFE4E6",
  main: "#F04438",
  dark: "#B42318",
  darkest: "#7A271A",
  contrastText: "#FFFFFF",
});

export const orange = {
  400: "#FB923C",
};
