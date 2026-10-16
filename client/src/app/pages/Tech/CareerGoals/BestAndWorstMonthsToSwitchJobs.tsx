import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import Typography from '@mui/material/Typography';


import { bestAndWorstMonthsToSwitchJobsHyderabadIT } from "../../../data/bestAndWorstMonthsToSwitchJobs"

const rows = bestAndWorstMonthsToSwitchJobsHyderabadIT;

export default function BestAndWorstMonthsToSwitchJobs() {
    
    return (<>
        <Typography varaint="h6">Best And Worst Months To Switch Jobs in Hyderabad IT</Typography>
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table" size="small">
                <TableHead>
                    <TableRow>
                        <TableCell>Month</TableCell>
                        <TableCell>Rating</TableCell>
                        <TableCell>Desc</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow
                            key={row.month}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {row.month}
                            </TableCell>
                            <TableCell align="right">{row.fiveStarRating}</TableCell>
                            <TableCell align="right">{row.desc}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer></>)
}