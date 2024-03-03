import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";

import Modals from "./Modals";

function createData(name, col1, col2, col3, col4) {
  return { name, col1, col2, col3, col4 };
}

const rows = [
  createData("Work 1", 159, 6.0, 24, 4.0),
  createData("Work 2", 237, 9.0, 37, 4.3),
  createData("Work 3", 262, 16.0, 24, 6.0),
  createData("Work 4", 305, 3.7, 67, 4.3),
  createData("Work 5", 356, 16.0, 49, 3.9),
];

export default function Tables() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Test</TableCell>
            <TableCell align="right">Test</TableCell>
            <TableCell align="right">Test</TableCell>
            <TableCell align="right">Test</TableCell>
            <TableCell align="right">Test</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{
                "&:last-child td, &:last-child th": { border: 0 },
                ":hover": {
                  backgroundColor: "rgb(226 232 240)",
                  color: "white",
                },
              }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.col1}</TableCell>
              <TableCell align="right">{row.col2}</TableCell>
              <TableCell align="right">
                <Modals />
              </TableCell>
              <TableCell align="right">
                <Button variant="contained" color="error">
                  Button
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
