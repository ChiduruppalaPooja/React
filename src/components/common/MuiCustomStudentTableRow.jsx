import React from 'react';
import { TableRow, TableCell, Typography, Stack, Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';

function getInternetQuality(speed) {
    if (speed >= 1 && speed <= 3) return 'Poor';
    else if (speed >= 4 && speed <= 7) return 'Average';
    else if (speed === null) return '';
    else return 'Excellent';
}

function formatTimeSpent(totalTimespent) {
    if (!totalTimespent) return '';
    
    const hours = Math.floor(totalTimespent / 60);
    const minutes = totalTimespent % 60;
    
    return `${hours ? `${hours}hr ` : ''}${minutes}min`;
}

function formatMarks(marks) {
    return marks !== null ? `${marks}%` : '';
}

const MuiCustomStudentTableRow = ({ stu, viewStudentResult }) => {
    const theme = useTheme();
    return (
        <TableRow
            onClick={() => viewStudentResult(stu)}
            sx={{
                cursor: 'pointer',
                background: stu.submission_type ? '' : theme.palette.error[100],
                '&:hover': {
                    background: !stu.submission_type ? theme.palette.error[300] : theme.palette.grey[100],
                },
                maxHeight: '30px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '18px', // Add margin bottom here if needed
            }}
        >
            <TableCell scope='row' sx={{ flex: 1, border: 'none', padding: '10px' }}>
                <Typography variant='subtitle2' sx={{ color: theme.palette.grey[900] }}>
                    {stu.subject}
                </Typography>
            </TableCell>
            <TableCell scope='row' sx={{ flex: 1, border: 'none', padding: '10px' }}>
                <Typography variant='subtitle2' sx={{ color: theme.palette.grey[900] }}>
                    {formatTimeSpent(stu.total_timespent)}
                </Typography>
            </TableCell>
            <TableCell scope='row' sx={{ flex: 1, border: 'none', padding: '10px' }}>
                <Typography
                    variant='subtitle2'
                    sx={{
                        color:
                            stu.submission_type === 3
                                ? theme.palette.success[700]
                                : stu.submission_type === 1
                                    ? theme.palette.info[700]
                                    : stu.submission_type === 4
                                        ? theme.palette.error[700]
                                        : stu.submission_type === 2
                                            ? theme.palette.warning[700]
                                            : theme.palette.error[800],
                    }}
                >
                    {stu.submission_type === 1 ? 'Timeout' :
                        stu.submission_type === 2 ? 'Interrupted' :
                        stu.submission_type === null ? 'Not Attempted' :
                            stu.submission_type === 3 ? 'On Submit' : 'Tabswitch'}
                </Typography>
            </TableCell>
            <TableCell scope='row' sx={{ flex: 1, border: 'none', padding: '10px' }}>
                <Typography variant='subtitle2' sx={{ color: theme.palette.grey[900] }}>
                    {getInternetQuality(stu.internet_speed)}
                </Typography>
            </TableCell>
            <TableCell scope='row' sx={{ flex: 1, border: 'none', padding: '10px' }}>
                <Stack direction='row' justifyContent='space-between' alignItems='center'>
                    <Typography variant='subtitle2' sx={{ color: theme.palette.grey[900] }}>
                        {formatMarks(stu.percentage_scored)}
                    </Typography>
                </Stack>
            </TableCell>
        </TableRow>
    );
};

export default MuiCustomStudentTableRow;
