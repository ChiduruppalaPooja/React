import React from "react";
import { Stack, Box, Skeleton, Grid, Typography } from "@mui/material";


export default function LeftGridSkeleton(){
    const barHeights = [80, 177, 12.25, 150, 95, 12.25, 80, 185, 80, 12.25, 53];

    return (<Grid item xs={12} md={9} order={{ xs: 2, md: 1 }} sx={{ paddingRight: { xs: '0px', md: '22px' } }}>

                    <Stack direction="column" className="midblockLeft" spacing={2} >

                        {/* graph */}
                        <Stack direction="column" sx={{
                            padding: '16px 23px 7px 23px',
                            borderRadius: '10px',
                            border: (theme) => `1px solid ${theme.palette.grey[100]}`,
                            boxShadow: '10px 10px 32px 0px rgba(22, 22, 22, 0.04)',
                            marginLeft: '19px',
                            width: '100%',
                            maxWidth: '100%',
                        }}>
                            <Stack direction="row" justifyContent={"space-between"}>
                                <Stack direction={"row"} justifyContent={"space-between"}>
                                    <Skeleton variant="rounded" width={121} height={17.5} sx={{ marginBottom: '23.5px' }} />
                                </Stack>
                                <Stack direction={"row"} justifyContent={"space-between"} gap={'18px'} >
                                    <Stack direction={"row"} justifyContent={"space-between"} gap={'18px'}>

                                        <Box display={"flex"} flexDirection={"row"} justifyContent={"center"} alignItems={"center"} gap={'5px'} sx={{ marginRight: '99px' }}>
                                            <Box sx={{ width: '8px', height: '8px' }}>
                                                <Skeleton variant="circle" width={8} height={8} />
                                                <Typography width={'99px'} />
                                            </Box>

                                        </Box>
                                        <Box display={"flex"} flexDirection={"row"} justifyContent={"center"} alignItems={"center"} gap={'5px'} sx={{ marginRight: '99px' }}>
                                            <Box sx={{ width: '8px', height: '8px' }}>
                                                <Skeleton variant="circle" width={8} height={8} />
                                                <Typography width={'99px'} />

                                            </Box>

                                        </Box>
                                    </Stack>
                                    <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"} >
                                        <Skeleton variant="rounded" width={52} height={10.5} />
                                        <Skeleton variant="rounded" width={8} height={8} />
                                    </Stack>


                                </Stack>
                            </Stack>
                            <Skeleton variant="rounded" width={107} height={12.5} />


                            {/* performance graph */}
                            <Box sx={{ position: 'relative', height: `200px`, background: '#f0f0f0', padding: '16px' }}>
                                {[...Array(10)].map((_, index) => (
                                    <Box
                                        key={index}
                                        sx={{
                                            position: 'absolute',
                                            top: `${(index + 1) * (200 / (10 + 1))}px`,
                                            left: 0,
                                            right: 0,
                                            height: '1px',

                                        }}
                                    />
                                ))}
                                <Grid container spacing={5} justifyContent="center" alignItems="flex-end" sx={{ height: '100%' }}>
                                    {barHeights.map((height, index) => (
                                        <Grid key={index} item>
                                            <Skeleton variant="rectangular" width={20} height={height} />
                                        </Grid>
                                    ))}
                                </Grid>
                            </Box>

                        </Stack>


                        {/* table assessments */}
                        <Stack direction={"column"} gap={'25.5px'} sx={{
                            borderRadius: '10px',
                            border: (theme) => `1px solid ${theme.palette.grey[100]}`,
                            boxShadow: '10px 10px 32px 0px rgba(22, 22, 22, 0.04)', padding: '16px 12px 7px 14px',
                        }}>
                            <Skeleton variant="rounded" width={133} height={17.5} animation="wave" />
                            <Stack direction={"column"} gap={'17px'} >
                                <Skeleton variant="rounded" width={871} height={30} animation="wave" />
                                <Skeleton variant="rounded" width={871} height={30} animation="wave" />
                                <Skeleton variant="rounded" width={871} height={30} animation="wave" />
                                <Skeleton variant="rounded" width={871} height={30} animation="wave" />
                                <Skeleton variant="rounded" width={871} height={30} animation="wave" />
                                <Skeleton variant="rounded" width={871} height={30} animation="wave" />
                                <Skeleton variant="rounded" width={871} height={30} animation="wave" />
                                <Skeleton variant="rounded" width={871} height={30} animation="wave" />

                            </Stack>

                        </Stack>
                    </Stack>

                </Grid>);
}