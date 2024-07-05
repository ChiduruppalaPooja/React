import React, { useState } from 'react';
import { Stack, Typography, Box, Drawer, List, ListItem, ListItemText } from '@mui/material';
import LeaderBoardUser from './LeaderBoardUser';
import { useSelector } from 'react-redux';
import rightArrow from '../../../../assets/chevron-right.svg';
import arrowLeft from '../../../../assets/arrowleft.svg';

export default function LeaderBoard({ displayLimit = 6 }) {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const leaderBoardData = useSelector((state) => state.dashboard.leaderBoardData);
    function handleLeaderBoard(){
        setIsDrawerOpen(!isDrawerOpen);

    }

    return (
        <Stack justifyContent={"center"} alignItems={'center'} >
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <Stack direction={'row'} justifyContent={"space-between"} alignItems={'center'}>
                    <Typography variant="h5" sx={{ textAlign: 'left' }}>Leaderboard</Typography>
                    <Box sx={{ width: '24px', height: '24px', cursor: 'pointer' }} onClick={handleLeaderBoard}>
                        <img src={rightArrow} />
                    </Box>
                </Stack>
                <Stack direction={"column"} justifyContent={'center'} gap={'10px'} sx={{ borderRadius: '10px' }}>
                    {leaderBoardData.slice(0, displayLimit).map((user, index) => (
                        <LeaderBoardUser
                            key={index}
                            name={user.name}
                            profilePicture={user.profile_pic}
                            percentage={user.percentage}
                            rank={user.rank}
                            index={index}
                        />
                    ))}
                </Stack>
            </Box>
            <Drawer anchor="right" open={isDrawerOpen} onClose={handleLeaderBoard} >
                    
                <Stack direction={'column'} gap='20px' sx={{ width: '300px', padding: '20px', background: (theme)=>theme.palette.grey[0] }}>
                <Stack direction={'row'} justifyContent={"space-between"} alignItems={'center'}>
                <Box sx={{ width: '24px', height: '24px', cursor: 'pointer' }} onClick={handleLeaderBoard}>
                        <img src={arrowLeft} />
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
                        />
                    ))}
                </Stack>
            </Drawer>
        </Stack>
    );
}
