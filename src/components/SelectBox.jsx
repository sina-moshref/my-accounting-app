import React, { useState } from "react";
import { FormControl, MenuItem, Select, Box } from "@mui/material";

export default function SelectBox({ items, label, desc }) {
  const [value, setValue] = useState("");

  return (
    <Box
      sx={{
        width: "100%",
        direction: "rtl",
      }}
      className="dark"
    >
      <label className="mb-2 block text-sm text-slate-600 dark:text-slate-400">
        {label}
      </label>

      <FormControl fullWidth>
        <Select
          value={value}
          displayEmpty
          onChange={(e) => setValue(e.target.value)}
          renderValue={(selected) => {
            if (!selected) {
              return (
                <span className="text-slate-400 dark:text-slate-500">
                  {desc}
                </span>
              );
            }

            return selected;
          }}
          MenuProps={{
            disablePortal: true,

            PaperProps: {
              className:
                "!mt-2 !rounded-2xl !border !border-slate-200 dark:!border-slate-700 !bg-slate-50 dark:!bg-slate-800 !shadow-2xl",

              sx: {
                overflow: "hidden",

                ".MuiMenuItem-root": {
                  fontFamily: "Vazir",
                  fontSize: "14px",
                  minHeight: "44px",

                  transition: "all 0.2s ease",
                },

                ".MuiMenuItem-root:hover": {
                  backgroundColor: "rgba(99,102,241,0.10)",
                },

                ".Mui-selected": {
                  backgroundColor: "rgba(99,102,241,0.16) !important",
                },

                ".Mui-selected:hover": {
                  backgroundColor: "rgba(99,102,241,0.22) !important",
                },
              },
            },
          }}
          sx={{
            height: "42px",

            borderRadius: "16px",

            fontFamily: "Vazir",

            fontSize: "14px",

            backgroundColor: "#f8fafc",

            color: "#1e293b",

            transition: "all 0.2s ease",

            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "#e2e8f0",
            },

            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: "#6366f1",
            },

            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: "#6366f1",
              borderWidth: "1px",
            },

            "&.Mui-focused": {
              boxShadow: "0 0 0 4px rgba(99,102,241,0.15)",
            },

            "& .MuiSelect-select": {
              padding: "10px 16px",
              display: "flex",
              alignItems: "center",
            },

            "& .MuiSvgIcon-root": {
              color: "#64748b",
            },

            ".dark &": {
              backgroundColor: "#1e293b",
              color: "#f8fafc",
            },

            ".dark & .MuiOutlinedInput-notchedOutline": {
              borderColor: "#334155",
            },

            ".dark &:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: "#818cf8",
            },

            ".dark & .MuiSvgIcon-root": {
              color: "#94a3b8",
            },
          }}
        >
          {items.map((item) => (
            <MenuItem
              key={item}
              value={item}
              className="text-slate-800 dark:text-slate-100"
            >
              {item}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
