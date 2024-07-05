import React from 'react';
import { Typography, Box, Skeleton, Stack } from '@mui/material';
import MuiCalendar from "../../../../components/common/MuiCalender"
const CalendarComponent = ({ loading }) => {
  return (
    <>
      {!loading ? (
        <Stack direction='column'>
          <Typography variant='h5' sx={{ textAlign: 'left' }}>
            Calendar
          </Typography>
          <MuiCalendar />
        </Stack>
      ) : (
        <Skeleton variant='wave' width={250} height={200} />
      )}
    </>
  );
}

export default CalendarComponent;
