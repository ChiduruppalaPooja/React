import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import LeaderboardTop from "../../../../assets/leaderboardTop.svg";
import greenEllipse from "../../../../assets/greenEllipse.svg";

export default function LeaderBoardUser({ name, profilePicture, percentage, rank, index }) {
    return (
        <Stack direction={"row"} justifyContent={'space-between'} sx={{
            borderRadius: '5px',
            background: (theme) => index === 0 ? theme.palette.grey[100] : theme.palette.primary.contrastText
        }}>
            <Stack direction={'row'} gap={'12px'} justifyContent={"center"} alignItems={'center'} >
                <Box sx={{ width: '50px', height: '50px', borderRadius: '50%', overflow: 'hidden' }}>
                    <img src={profilePicture} alt="Profile" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'left', gap: '5px' }}>
                    <Typography variant="subtitle1">{name}</Typography>
                    <Typography variant="body2" sx={{ color: (theme) => theme.palette.grey[800] }}>Avg: {percentage}%</Typography>
                </Box>
            </Stack>
            <Box sx={{
                width: '26px',
                height: '26px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundImage: `url(${index === 0 ? LeaderboardTop : greenEllipse})`,
                backgroundSize: 'cover',
                margin: '20px 14px 19px 0px'
            }}>
                <Typography
                    variant="caption"
                    sx={{
                        color: (theme) => index === 0 ? theme.palette.primary.main : theme.palette.success.main,
                        zIndex: '2'
                    }}
                >
                    {rank}
                </Typography>
            </Box>
        </Stack>
    );
}
