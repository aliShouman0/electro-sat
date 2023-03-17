import React from "react";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import CustomRow from "../../components/CustomRow/CustomRow";

function CustomTable({
  rowTitle,
  rows,
  rowValue,
  nestedTableTitle,
  nestedRowTitle,
  nestedRowValue,
  secondTable,
  secondTableRowTitle,
  secondTableRowValue,
}) {
  return (
    <TableContainer className=" border my-3 bg-greyBar" component={Paper}>
      <Table aria-label="collapsible table " className="bg-greyBar">
        <TableHead className="bg-primary ">
          <TableRow>
            <TableCell />
            {rowTitle.map((val) => (
              <TableCell align="left" sx={{ color: "white" }}>
                {val}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <CustomRow
              key={row.name}
              row={row}
              rowValue={rowValue}
              nestedTableTitle={nestedTableTitle}
              nestedRowTitle={nestedRowTitle}
              nestedRowValue={nestedRowValue}
              secondTable={secondTable}
              secondTableRowTitle={secondTableRowTitle}
              secondTableRowValue={secondTableRowValue}
            />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default CustomTable;
