import React from "react";
import { Stack, Typography, Box, Skeleton } from "@mui/material";
import { useSelector } from "react-redux";

export default function User() {
    const name = useSelector((state) => state.dashboard.profile.name);
    const profilePicture = useSelector((state) => state.dashboard.profile.profilePic);
    const email = useSelector((state) => state.dashboard.profile.email);

    const loading = !name || !profilePicture || !email;

    return (
        <Stack className="userProfile" direction="column" justifyContent="space-between" gap={2}>
            <Typography variant="h5" sx={{ textAlign: 'left' }}>User Profile</Typography>

            {loading ? (
                
                <Stack className="userData" direction="row" gap={2} sx={{ padding: '10px', borderRadius: '10px', background: (theme)=>theme.palette.grey[100] }} alignItems="center">
                    <Skeleton variant="circular" width={48} height={48} />

                    <Stack sx={{ flex: 1 }}>
                        <Skeleton variant="text" width="80%" height={24} />
                        <Skeleton variant="text" width="60%" height={16} />
                    </Stack>
                </Stack>
            ) : (
                <Stack className="userData" direction="row" gap={2} sx={{ padding: '10px', borderRadius: '10px', background: (theme)=>theme.palette.grey[100] }} alignItems="center">
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

                    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'left' }}>
                        <Typography variant="subtitle1">{name}</Typography>
                        <Typography variant="body2" sx={{ color: (theme) => theme.palette.grey[400] }}>{email}</Typography>
                    </Box>
                </Stack>
            )}
        </Stack>
    );
}
