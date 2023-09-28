import React from "react";
import "../Style/Table.css";
import {
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Chip,
  FormControl,
  MenuItem,
  Select,
} from "@mui/material";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import { styled } from "@mui/material/styles";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.common.black,
    textAlign: 'center', 
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 18,
    textAlign: 'center',
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const TableComponent = (props) => {
  const { tableData, tableHeaders } = props;

  return (
    <TableContainer component={Paper} className="custom-table-container">
      <Table className="custom-table">
        <TableHead>
          <TableRow>
            {tableHeaders.map((header, index) => (
               <StyledTableCell key={index}>{header}</StyledTableCell>
            ))}
            <StyledTableCell>Action</StyledTableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {tableData.map((row, rowIndex) => (
            <StyledTableRow key={rowIndex}>
              {tableHeaders.map((header, headerIndex) => {
                return (
                  <StyledTableCell key={headerIndex}>
                    {header === "Avather" ? (
                      <img
                        src={row[header]}
                        alt="Avatar"
                        width="50"
                        height="50"
                      />
                    ) : header === "status" ? (
                      <Chip
                        label={row[header]}
                        color={
                          row[header] === "Complete"
                            ? "success"
                            : row[header] === "In Progress"
                            ? "primary"
                            : row[header] === "Start"
                            ? "secondary"
                            : "default"
                        }
                      />
                    ) : header === "Status1" ? (
                      <FormControl fullWidth>
                        <Select variant="standard" value={row.Status1}>
                          <MenuItem value={1}>Returned</MenuItem>
                          <MenuItem value={2}>Pending</MenuItem>
                          <MenuItem value={3}>Approved</MenuItem>
                        </Select>
                      </FormControl>
                    ) : (
                      row[header]
                    )}
                  </StyledTableCell>
                );
              })}
              <StyledTableCell>
                <Button variant="contained" color="primary">
                  View
                </Button>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableComponent;
