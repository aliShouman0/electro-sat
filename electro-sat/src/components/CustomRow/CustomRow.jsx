import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons";
import {
  Box,
  Collapse,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

function CustomRow(props) {
  const { row, rowValue, nestedTableTitle, nestedRowTitle, nestedRowValue } =
    props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            <FontAwesomeIcon
              icon={open ? faArrowUp : faArrowDown}
              size={"xs"}
            />
          </IconButton>
        </TableCell>
        {rowValue.map((val) => (
          <TableCell align="left">{row[val]}</TableCell>
        ))}
      </TableRow>

      <TableRow>
        <TableCell
          style={{ paddingBottom: 0, paddingTop: 0, margin: 0 }}
          colSpan={8}
        >
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography
                className="text-end"
                variant="h6"
                gutterBottom
                component="div"
              >
                {nestedTableTitle}
              </Typography>
              <Table size="small" aria-label="purchases" className="mb-8 ">
                <TableHead>
                  <TableRow className="bg-primary  ">
                    {nestedRowTitle.map((val) => (
                      <TableCell align="center" sx={{ color: "white" }}>
                        {val}
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.history.map((historyRow) => (
                    <TableRow key={historyRow.date} className="bg-white">
                      {nestedRowValue.map((val) => (
                        <TableCell align="center">{historyRow[val]}</TableCell>
                      ))}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

export default CustomRow;
