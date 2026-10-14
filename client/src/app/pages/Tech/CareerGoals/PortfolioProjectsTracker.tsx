
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';

import { portfolioProjects } from "../../../data/portfolioProjects";



const rows = portfolioProjects;


export default function PortfolioProjectsTracker() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Project Name</TableCell>
            <TableCell align="right">Progress</TableCell>
            <TableCell align="right">Completed Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.project_name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.project_name}
              </TableCell>
              <TableCell align="right"><LinearProgress value={row.progress} /></TableCell>
              <TableCell align="right">{row.completed_status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}