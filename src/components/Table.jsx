import {
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Box,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import CircularProgress from "@mui/material/CircularProgress";
import React, { useEffect } from "react";
import { SortTableColButtons } from "./sortTableColButtons";
import { FaEdit, FaTrash } from "react-icons/fa";

const StyledTableContainer = styled(TableContainer)(() => ({
  backgroundColor: "#ffffff",
  border: "1px solid #e2e8f0",
  borderRadius: "18px",

  ".dark &": {
    backgroundColor: "#0f172a",
    border: "1px solid #1e293b",
  },
}));

const StyledHeaderCell = styled(TableCell)(() => ({
  position: "sticky",
  top: 0,
  zIndex: 10,

  fontSize: "14px !important",
  fontWeight: "600 !important",
  fontFamily: "Vazir",
  textAlign: "center",

  color: "#0f172a",
  backgroundColor: "#f8fafc",
  border: "1px solid #e2e8f0",

  ".dark &": {
    color: "#e2e8f0",
    backgroundColor: "#111827",
    border: "1px solid #1e293b",
  },
}));

const StyledCell = styled(TableCell)(() => ({
  fontSize: "14px",
  fontFamily: "Vazir",
  textAlign: "right",
  whiteSpace: "nowrap",

  color: "#334155",
  borderBottom: "1px solid #f1f5f9",

  ".dark &": {
    color: "#cbd5e1",
    borderBottom: "1px solid #1e293b",
  },
}));

const StyledTableRow = styled(TableRow, {
  shouldForwardProp: (prop) => prop !== "cursorMark",
})(({ cursorMark }) => ({
  cursor: cursorMark,

  "&:last-child td, &:last-child th": {
    border: 0,
  },

  "&:nth-of-type(even)": {
    backgroundColor: "#f8fafc",
  },

  "&:nth-of-type(odd)": {
    backgroundColor: "#ffffff",
  },

  "&:hover": {
    backgroundColor: "#e2e8f0",
  },

  ".dark &:nth-of-type(even)": {
    backgroundColor: "#0f172a",
  },

  ".dark &:nth-of-type(odd)": {
    backgroundColor: "#111827",
  },

  ".dark &:hover": {
    backgroundColor: "#1e293b",
  },
}));

export default function DataTable({
  thead,
  tbody,
  loading = true,
  dense = false,
  sortBy,
  sortOrder,
  onSortChange,
  openEditModal,
  deleteRow,
}) {
  const containerRef = React.useRef(null);

  useEffect(() => {
    const el = containerRef.current;

    if (!el) return;

    requestAnimationFrame(() => {
      el.scrollLeft = el.scrollWidth;
    });
  }, []);

  return (
    <StyledTableContainer
      ref={containerRef}
      sx={{
        maxHeight: "80vh",
        overflow: "auto",

        "&::-webkit-scrollbar": {
          width: "10px",
          height: "10px",
        },

        "&::-webkit-scrollbar-track": {
          background: "#2a0f21 !important",
        },

        "&::-webkit-scrollbar-thumb": {
          background: "#334155",
          borderRadius: "999px",
        },

        "&::-webkit-scrollbar-thumb:hover": {
          background: "#475569",
        },

        /* Firefox */
        scrollbarWidth: "thin",
      }}
    >
      <Table
        stickyHeader
        sx={{
          direction: "rtl",
          minWidth: "max-content",
        }}
      >
        <TableHead sx={{ position: "relative", top: 0 }}>
          <TableRow>
            {thead.map((item) => {
              const isSortable = Boolean(item.sortable);
              const isActive =
                (isSortable && sortBy && sortBy === item.value) ||
                (item.value === "fullName" && sortBy === "fName");
              const activeDirection = isActive ? sortOrder : undefined;

              const requestSort = (dir) => {
                if (!isSortable) return;
                if (item.value === "fullName") {
                  onSortChange?.("fName", dir);
                  return;
                } else {
                  onSortChange?.(item.value, dir);
                }
              };

              const toggleSort = () => {
                if (!isSortable) return;
                const next = sortOrder === "asc" ? "desc" : "asc";

                if (item.value === "fullName") {
                  onSortChange("fName", next);
                  return;
                } else {
                  onSortChange?.(item.value, next);
                }
              };
              return (
                <StyledHeaderCell
                  key={item.value}
                  colSpan={item.colSpan || 1}
                  sx={{
                    height: "30px",
                    p: "7.5px 10px",
                    "&:first-of-type": {
                      borderBottomLeftRadius: dense && "0",
                    },
                    "&:last-of-type": {
                      borderBottomRightRadius: dense && "0",
                    },
                  }}
                >
                  <Stack
                    p={"3px 10px"}
                    direction={"row"}
                    alignItems={"center"}
                    gap={"10px"}
                    onClick={toggleSort}
                    sx={{
                      cursor: isSortable ? "pointer" : "default",
                      userSelect: "none",
                    }}
                  >
                    <span style={{ whiteSpace: "nowrap" }}> {item.label}</span>
                    {item.sortable && (
                      <SortTableColButtons
                        active={isActive}
                        direction={activeDirection}
                        onAsc={() => requestSort("asc")}
                        onDesc={() => requestSort("desc")}
                      />
                    )}
                  </Stack>
                </StyledHeaderCell>
              );
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {tbody.map((row, i) => (
            <StyledTableRow key={row.id || i}>
              {thead.map((col) => (
                <StyledCell key={col.value} colSpan={col.colSpan || 1}>
                  {row[col.value] === "ویرایش" ? (
                    <div className="flex gap-1">
                      <button
                        onClick={() => {
                          deleteRow(row.id);
                        }}
                        className="group flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-100 px-3 py-2 text-sm font-medium text-slate-700 hover:border-indigo-400 hover:bg-indigo-500/10 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/30 active:scale-[0.98] dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:hover:border-indigo-500 dark:hover:bg-indigo-500/20 dark:hover:text-indigo-300"
                      >
                        <FaTrash className="text-xs transition-transform duration-300 group-hover:scale-110" />
                      </button>
                      <button
                        onClick={() => {
                          openEditModal(row.id);
                        }}
                        className="group flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-100 px-3 py-2 text-sm font-medium text-slate-700 hover:border-indigo-400 hover:bg-indigo-500/10 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/30 active:scale-[0.98] dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:hover:border-indigo-500 dark:hover:bg-indigo-500/20 dark:hover:text-indigo-300"
                      >
                        <FaEdit className="text-xs transition-transform duration-300 group-hover:scale-110" />
                      </button>
                    </div>
                  ) : (
                    row[col.value]
                  )}
                </StyledCell>
              ))}
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>

      {loading && (
        <Box
          sx={{
            py: 3,
            mx: "auto",
            textAlign: "center",
          }}
        >
          <CircularProgress />
        </Box>
      )}
    </StyledTableContainer>
  );
}
