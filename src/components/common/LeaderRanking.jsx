import { Avatar, Box, Stack, Typography } from '@mui/material'
import React from 'react'
import StarSvg from "../../assets/star.svg"


const LeaderRanking = ({ data, index, value }) => {
  return (
    <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
      <Stack direction={'row'} alignItems={'center'} gap={'27px'}>
        <Typography component={'p'} sx={{
          fontFamily: 'Poppins-Medium',
          fontSize: '14px',
          color: (theme) => theme.palette.grey[900]
        }}>{index}.</Typography>
        <Stack direction={'row'} alignItems={'center'} gap={'16px'}>
          <Avatar alt="Avatar" sx={{ width: 30, height: 30 }} src={data.profile_pic} />
          <Typography component={'p'} sx={{
            fontFamily: 'Poppins-Medium',
            fontSize: '14px',
            color: (theme) => theme.palette.grey[900]
          }}>{data.name}</Typography>
        </Stack>
      </Stack>
      {/* ratings */}

      <Stack direction={'row'} alignItems={'center'} gap={'8px'}>
        <Stack direction={'row'} alignItems={'center'} gap={0}>
          <Box sx={{
            width: 20,
            height: 20,
            svg: {
              path: {
                fill: (theme) => theme.palette.warning.main
              }
            }
          }}>
            <StarSvg />
          </Box>
          <Box sx={{
            width: 20,
            height: 20,
            svg: {
              path: {
                fill: (theme) => value >= 80 ? theme.palette.warning.main : theme.palette.warning[300]
              }
            }
          }}>
            <StarSvg />
          </Box>
          <Box sx={{
            width: 20,
            height: 20,
            svg: {
              path: {
                fill: (theme) => (value >= 90 && value <= 100) ? theme.palette.warning.main : theme.palette.warning[300]
              }
            }
          }}>
            <StarSvg />
          </Box>
        </Stack>
        <Typography component={'p'} sx={{
          fontFamily: 'Poppins-SemiBold',
          fontSize: '14px',
          color: (theme) => theme.palette.warning.main
        }}>{value}%</Typography>
      </Stack>

    </Stack>
  )
}

export default LeaderRanking