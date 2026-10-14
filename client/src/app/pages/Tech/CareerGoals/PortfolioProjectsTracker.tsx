
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

import { portfolioProjects } from '../../../data/portfolioProjects';

const rows = portfolioProjects;

const setStatusColor = (value: number): string => {
  if (value === 100) {
    return '#00e676'; // Completed - green
  }

  if (value >= 80) {
    return '#ffc107'; // Almost completed - yellow
  }

  if (value > 30) {
    return '#ff9800'; // In progress - orange
  }

  return '#ff5722'; // Just started - red
};

export default function PortfolioProjectsTracker() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="Portfolio projects tracker">
        <TableHead>
          <TableRow>
            <TableCell>Project Name</TableCell>
            <TableCell align="center">Progress</TableCell>
            <TableCell align="right">Completed Status</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.project_name}
              sx={{
                '&:last-child td, &:last-child th': {
                  border: 0,
                },
              }}
            >
              <TableCell component="th" scope="row">
                {row.project_name}
              </TableCell>

              <TableCell align="center" sx={{ minWidth: 180 }}>
                <Stack>
                  <LinearProgress
                    variant="determinate"
                    value={Math.min(100, Math.max(0, row.progress))}
                    sx={{
                      height: 8,
                      borderRadius: 4,
                      backgroundColor: 'action.hover',
                      [`& .MuiLinearProgress-bar`]: {
                        backgroundColor: setStatusColor(row.progress),
                        borderRadius: 4,
                      },
                    }}
                  />
                  <Box>{row.progress}%</Box>
                </Stack>

              </TableCell>

              <TableCell align="right">
                {row.completed_status}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
