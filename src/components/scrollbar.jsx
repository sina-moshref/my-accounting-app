import SimpleBar from "simplebar-react";
import { styled } from "@mui/material/styles";
import "simplebar-react/dist/simplebar.min.css";

export const Scrollbar = styled(SimpleBar)(({ theme }) => ({
  height: "100%",
  "& .simplebar-content-wrapper": {
    overflowX: "auto !important",
    overflowY: "auto !important",
  },
  "& .simplebar-track.simplebar-horizontal": {
    bottom: 0,
    visibility: "visible !important",
  },
  backgroundColor: theme.palette.background.paper,
  "& .simplebar-scrollbar::before": {
    backgroundColor: theme.palette.grey[400],
  },
}));
