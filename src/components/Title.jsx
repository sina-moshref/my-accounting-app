import { Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import React from "react";
import { text } from "../theme/colors";

export const Title = ({ title, payload, desc }) => {
  return (
    <Box>
      <Stack direction="row" alignItems="center" gap={0.5}>
        <Typography
          sx={{
            color: text[200],
            fontWeight: "500",
            fontSize: { xs: "19px", md: "24px" },
          }}
          variant="textStyle2Xl"
        >
          {title}
        </Typography>
        {payload && (
          <Typography
            sx={{ color: text[200], fontSize: { xs: "19px", md: "24px" } }}
            variant="textStyleLg"
          >
            {payload}
          </Typography>
        )}
      </Stack>
      <Box sx={{ mt: "10px" }}>
        <Typography
          sx={{
            color: text[200],
            mt: "100px !important",
            fontSize: { xs: "13px", md: "16px" },
          }}
          variant="textStyleBase"
        >
          {desc}
        </Typography>
      </Box>
    </Box>
  );
};
