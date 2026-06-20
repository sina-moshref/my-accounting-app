import React, { useRef, useState } from "react";
import {
  Box,
  InputBase,
  IconButton,
  Paper,
  useMediaQuery,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { motion } from "framer-motion";
import { neutral, text } from "../../../theme/colors";
import { EnvelopeIcon } from "../../../icons/table/useIcons";

const SearchWrapper = styled(Box)(({ theme, btnColor }) => ({
  position: "relative",
  display: "flex",
  alignItems: "center",
  height: "43px",
  justifyContent: "flex-end",
  [theme.breakpoints.down("lg")]: {
    height: "37px",
  },
  direction: "rtl",
  width: "43px",

  boxSizing: "border-box",
  zIndex: 1000,
}));

// const SearchWrapper = styled(Box)({
//   position: "relative",
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "flex-end",
//   [theme.breakpoints.down("md")]: {
//       height: "37px"
//     },
//   direction: "rtl",
//   width: "43px",
//   height: "43px",
//   boxSizing: "border-box",
//   zIndex: 1000,
// });

const SearchContainer = styled(motion.div)({
  position: "absolute",
  right: 0,
  top: 0,
  display: "flex",
  alignItems: "center",
  boxSizing: "border-box",
  height: "100%",
});

const StyledInput = styled(InputBase)(({ theme }) => ({
  flex: 1,
  height: "100%",

  "& input": {
    height: "100%",
    boxSizing: "border-box",
    color: text[300],
    backgroundColor: neutral[100],
  },

  "& input::placeholder": {
    color: text[100],
  },
}));

export function Searchbox({ onSearch, debounceMs = 350 }) {
  const [expanded, setExpanded] = useState(false);
  const [value, setValue] = useState("");
  const inputRef = useRef(null);
  const debounceRef = useRef(null);

  React.useEffect(() => {
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => {
      onSearch?.(value);
    }, debounceMs);
    return () => clearTimeout(debounceRef.current);
  }, [value, onSearch, debounceMs]);

  return (
    <SearchWrapper>
      <SearchContainer
        animate={{ width: expanded ? 350 : 43 }}
        transition={{ duration: 0.3 }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            height: { lg: "43px", xs: "37px" },
            border: `1px solid ${neutral[200]}`,
            borderRadius: "7px",
            backgroundColor: neutral[100],
            direction: "rtl",
          }}
          onClick={() => setExpanded(true)}
        >
          {expanded && (
            <StyledInput
              placeholder="جستجو کنید ..."
              inputRef={inputRef}
              autoFocus
              value={value}
              onChange={(e) => setValue(e.target.value)}
              onBlur={() => {
                inputRef.current.value === "" && setExpanded(false);
              }}
              inputProps={{
                dir: "rtl",
                style: { textAlign: "right" },
              }}
            />
          )}
          <IconButton
            sx={{
              "&:hover": {
                backgroundColor: "transparent",
              },
            }}
          >
            <EnvelopeIcon />
          </IconButton>
        </Box>
      </SearchContainer>
    </SearchWrapper>
  );
}
