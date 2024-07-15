import React, { useState } from 'react';
import { Stack, Typography, Box, Drawer, List, ListItem, ListItemText } from '@mui/material';
import LeaderBoardUser from './LeaderBoardUser';
import { useSelector } from 'react-redux';
import ChevronRight from '../../../../assets/ChevronRight.jsx';
import ArrowLeftIcon from '../../../../assets/ArrowLeft';
export default function LeaderBoard({ displayLimit = 6 }) {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const leaderBoardData = useSelector((state) => state.dashboard.leaderBoardData);
    function handleLeaderBoard() {
        setIsDrawerOpen(!isDrawerOpen);

    }

    return (
        <Stack >
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <Stack direction={'row'} justifyContent={"space-between"} alignItems={'center'}>
                    <Typography variant="h5" sx={{ textAlign: 'left' }}>Leaderboard</Typography>
                    <Box sx={{ width: '24px', height: '24px', cursor: 'pointer' }} onClick={handleLeaderBoard}>
                        <ChevronRight />
                    </Box>
                </Stack>
                <Stack direction={"column"} justifyContent={'center'} gap={'10px'} sx={{ border: (theme)=>`1px solid ${theme.palette.grey[100]}`,
                    borderRadius: '10px', background: (theme) => theme.palette.primary.contrastText, boxShadow: '10px 10px 32px 0px rgba(22, 22, 22, 0.04)',
                    padding: '11px 10px'
                }}>
                    {leaderBoardData.slice(0, displayLimit).map((user, index) => (
                        <LeaderBoardUser
                            key={index}
                            name={user.name}
                            profilePicture={user.profile_pic}
                            percentage={user.percentage}
                            rank={user.rank}
                            index={index}
                            isDrawer={false}
                        />
                    ))}
                </Stack>
            </Box>
            <Drawer anchor="right" open={isDrawerOpen} onClose={handleLeaderBoard} >

                <Stack direction={'column'} gap='20px' sx={{ width: '300px', padding: '20px', background: (theme) => theme.palette.grey[0] }}>
                    <Stack direction={'row'} gap={'18.5px'} alignItems={'center'}>
                        <Box sx={{ width: '24px', height: '24px', cursor: 'pointer' }} onClick={handleLeaderBoard}>
                            {/* <img src={arrowLeft} /> */}
                            <ArrowLeftIcon />
                        </Box>
                        <Typography variant="h5" sx={{ textAlign: 'left' }}>Leaderboard</Typography>

                    </Stack>
                    {leaderBoardData.map((user, index) => (
                        <LeaderBoardUser
                            key={index}
                            name={user.name}
                            profilePicture={user.profile_pic}
                            percentage={user.percentage}
                            rank={user.rank}
                            index={index}
                            isDrawer={true}
                        />
                    ))}
                </Stack>
            </Drawer>
        </Stack>
    );
}
