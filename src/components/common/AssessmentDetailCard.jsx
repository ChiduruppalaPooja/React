import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import CountUp from 'react-countup';
import attendance from "../../assets/attendance.svg";
import assignment from "../../assets/assignment.svg";
import assessment from "../../assets/assessment.svg";
import avg from "../../assets/avg.svg";
import code from "../../assets/Code.svg";


const icons = [attendance, avg, assessment, assignment, code];

const colors = [
  (theme) => theme.palette.primary[100],
  (theme) => theme.palette.info[100],
  (theme) => theme.palette.warning[100],
  (theme) => theme.palette.error[100],
  (theme) => theme.palette.success[100],
];
const AssessmentDetailCard = ({
  title,
  icon,
  contentMagnitude,
  contentType,
  showCountingAnimation,
}) => {
  return (
    <Box
      sx={{
        height: 'auto', 
        minHeight: '80px',
        width: '100%',
        minWidth: '230px',
        borderRadius: '10px',
        boxShadow: '10px 10px 32px 0 rgba(22, 22, 22, 0.04)',
        padding: '10px 27px 10px 10px',
        border: '1px solid #F4F6F8',
        display: 'flex', 
        
      }}
    >
      <Stack
        direction="row"
        gap="15px"
        sx={{ flex: 1 }} 
      >
        <Stack
          direction="row"
          alignItems="center"
          sx={{
            width: '60px',
            height: '60px',
            background: colors[icon],
            borderRadius: '5px',
            padding: '15px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <img src={icons[icon]} alt="icon" style={{ width: '100%', height: '100%' }} />
        </Stack>

        <Stack className="contents"direction="column" gap='24px' justifyContent="center">
          <Typography variant="caption2" sx={{textAlign:'left'}}>{title}</Typography>
          <Typography variant="h2" sx={{textAlign:'left', lineHeight: '2px'}}>
            {showCountingAnimation ? (
              <CountUp
                start={0}
                end={contentMagnitude}
                duration={3}
                suffix={
                  contentType === 'percent'
                    ? '%'
                    : contentType === 'time'
                    ? ' Min'
                    : contentType === 'count'
                    ? ''
                    : ''
                }
              />
            ) : contentType === 'percent' ? (
              `${contentMagnitude}%`
            ) : contentType === 'time' ? (
              `${contentMagnitude} Min`
            ) : (
              contentMagnitude
            )}
          </Typography>
        </Stack>
      </Stack>
    </Box>
  );
};

export default AssessmentDetailCard;
