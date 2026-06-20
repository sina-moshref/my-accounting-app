import { Button } from "@mui/material";
import { fontSize, styled } from "@mui/system";
import { neutral, text } from "../theme/colors";

export const StyledButton = styled(Button, {
  shouldForwardProp: (prop) => prop !== "btnColor",
})(({ theme, btnColor, dense }) => ({
  background:
    btnColor === "blue"
      ? "#DBEAFE"
      : btnColor === "gray"
        ? neutral[100]
        : "#FFE4E6",
  color:
    btnColor === "blue"
      ? "#2563EB"
      : btnColor === "gray"
        ? text[50]
        : "#F43F5E",
  fontSize: dense ? "14px" : "16px",
  borderRadius: "10px",
  display: "flex",
  flexDirection: "row-reverse",
  alignItems: "center",
  padding: dense ? "6px 12px" : "9px 14px",
  [theme.breakpoints.down("md")]: {
    padding: "6px 8px",
    fontSize: "14px",
  },
  [theme.breakpoints.down("sm")]: {
    padding: "6px 4px",
    fontSize: "11px",
  },
  gap: "10px",
  "&:hover": {
    color: "#fff",
    background:
      btnColor === "blue" || btnColor === "gray" ? "#2563EB" : "#F43F5E",
  },
  "&:hover svg path": {
    fill: "#fff",
  },
}));

export const StyledBtn = ({
  children,
  btnColor = "blue",
  dense = "false",
  ...props
}) => {
  return (
    <StyledButton {...props} btnColor={btnColor} dense={dense}>
      {children}
    </StyledButton>
  );
};
