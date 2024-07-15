import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import LeaderboardTop from "../../../../assets/leaderboardTop.svg";
import greenEllipse from "../../../../assets/greenEllipse.svg";

export default function LeaderBoardUser({ name, profilePicture, percentage, rank, index, isDrawer }) {
    return (
        <Stack direction={"row"} justifyContent={'space-between'} alignItems={'center'} sx={{
            borderRadius: '5px', padding: '8px', maxHeight: '65px',
            background: (theme) => index === 0  ? theme.palette.grey[100] : !isDrawer ? theme.palette.primary.contrastText : theme.palette.grey[0]
        }}>
            <Stack direction={'row'} gap={'5px'} justifyContent={"center"} alignItems={'center'} sx={{ background: (theme) => isDrawer && index !== 0 ? theme.palette.grey[0] : null }}>
                <Box sx={{ width: '50px', height: '50px', borderRadius: '50%', overflow: 'hidden', border: (theme) => `2px solid ${theme.palette.grey[100]}`, boxShadow: '5px 3px 5px 0px rgba(22, 22, 22, 0.04)' }}>
                    <img src={profilePicture} alt="Profile" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'left', gap: '5px' }}>
                    <Typography variant="subtitle4" sx={{
                        color: (theme) => theme.palette.grey[800], fontStyle: 'normal',
                        fontWeight: 500,
                        lineHeight: 'normal',
                        leadingTrim: 'both',
                        textEdge: 'cap'
                    }}>{name}</Typography>
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
