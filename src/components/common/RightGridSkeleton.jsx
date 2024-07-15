import React from "react";
import { Stack, Box, Skeleton, Grid, Typography } from "@mui/material";

export default function RightGridSkeleton(){
    return(
        <Grid item xs={12} md={3} order={{ xs: 1, md: 2 }}>

        <Stack direction="column" className="midblockRight" justifyContent={'space-between'} spacing={2}>
            <Stack className="userProfile" direction="column" justifyContent="space-between" gap={2}>
                <Skeleton variant="rounded" width={80} height={10} animation="wave" />




                <Stack className="userData" direction="row" gap={2} sx={{ padding: '10px', borderRadius: '10px', background: (theme) => theme.palette.grey[100] }} alignItems="center">
                    <Box
                        sx={{
                            width: '48px',
                            height: '48px',
                            borderRadius: '4px',
                            overflow: 'hidden',
                        }}
                    >
                        <Skeleton variant="rounded" width={40} height={40} animation="wave" />


                    </Box>

                    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'left', gap: '10px' }}>
                        <Skeleton variant="rounded" width={60} height={10} animation="wave" />
                        <Skeleton variant="rounded" width={80} height={15} animation="wave" />

                    </Box>
                </Stack>

            </Stack>
            {/* calender */}
            <Skeleton variant="rounded" width={80} height={10} animation="wave" />
            <Skeleton variant='rounded' width={250} height={200} animation="wave" />
            {/* leaderboard */}
            <Skeleton variant="rounded" width={80} height={10} animation="wave" />

            <Stack direction={"column"} gap={'17px'} sx={{ padding: '11px', borderRadius: '10px',
                border: (theme) => `1px solid ${theme.palette.grey[100]}`,
                boxShadow: '10px 10px 32px 0px rgba(22, 22, 22, 0.04)', }}>

                <Skeleton variant="rounded" width={298} height={65} animation="wave" />
                {[...Array(5)].map((_, index) => (
                    <Stack key={index} direction="row" alignItems="center" spacing={1} >
                        <Skeleton variant="circular" width={50} height={50} animation="wave" />
                        <Skeleton variant="rounded" width={43} height={10.8} animation="wave" />
                        <Skeleton variant="circular" width={15} height={15} animation="wave" sx={{ marginLeft: '147px' }} />
                    </Stack>
                ))}

            </Stack>
        </Stack>

    </Grid>
    );
}