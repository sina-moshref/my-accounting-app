import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Stack } from "@mui/system";
import { IconButton } from "@mui/material";
import { customBlue, text } from "../theme/colors";

export const SortTableColButtons = ({
  active = false,
  direction,
  onAsc,
  onDesc,
}) => {
  const upColor = active && direction === "asc" ? customBlue.main : text[100];
  const downColor =
    active && direction === "desc" ? customBlue.main : text[100];

  return (
    <Stack justifyContent={"center"}>
      <IconButton
        sx={{ p: 0, transform: "translate(0,2px)" }}
        onClick={(e) => {
          e.stopPropagation();
          onAsc?.();
        }}
      >
        <KeyboardArrowUpIcon
          sx={{ width: "15px", height: "15px", color: upColor }}
        />
      </IconButton>
      <IconButton
        sx={{ p: 0, transform: "translate(0,-2px)" }}
        onClick={(e) => {
          e.stopPropagation();
          onDesc?.();
        }}
      >
        <KeyboardArrowDownIcon
          sx={{
            width: "15px",
            height: "15px",
            color: downColor,
          }}
        />
      </IconButton>
    </Stack>
  );
};
