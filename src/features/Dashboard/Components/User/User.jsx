import React from "react";
import { Stack, Typography, Box } from "@mui/material";
import { useSelector } from "react-redux";
export default function User(){
    const name = useSelector((state) => state.dashboard.profile.name);
    const profilePicture = useSelector((state) => state.dashboard.profile.profilePic);
    const email = useSelector((state) => state.dashboard.profile.email);


    return(
        <Stack className="userProfile" direction="column" justifyContent={"space-between"} gap={"12px"}>
        <Typography variant="h5" sx={{textAlign: 'left'}}>User Profile</Typography>
        <Stack className="userData" direction={"row"} gap={'10px'} sx={{padding: '10px',borderRadius: '10px',
background: '#F4F6F8'}} alignItems={'center'}>
<Box
                sx={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '4px',
                    
                    overflow: 'hidden',
                }}
            >
                <img
                    src={profilePicture}
                    alt=""
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        borderRadius: '4px',
                    }}
                />
            </Box>

            <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent:'center', textAlign: 'left'}}>
                    <Typography variant="subtitle4">{name}</Typography>
                    <Typography variant="bodys" sx={{color: (theme)=> theme.palette.grey[400]}}>{email}</Typography>
            </Box>

</Stack>
    </Stack>
    );
}