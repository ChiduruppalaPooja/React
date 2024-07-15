import React from "react";
import { Stack, Box, Skeleton, Grid } from "@mui/material";

export default function SkeletonDashboard() {
    return (
        <Stack direction="column" sx={{ background: (theme) => theme.palette.primary.contrastText, marginLeft: '80px' }}>
            <Grid container direction="column" justifyContent="space-between" sx={{ paddingLeft: '18px', background: (theme) => theme.palette.primary.contrastText, paddingRight: '26px' }}>
                <Skeleton variant="rounded" width={250} height={30} />
                <Grid container spacing={2} justifyContent="flex-start" sx={{ marginTop: '20px', marginBottom: '15px' }}>
                    <Skeleton variant="rounded" width={233} height={80} />
                    <Skeleton variant="rounded" width={233} height={80} />
                    <Skeleton variant="rounded" width={233} height={80} />
                    <Skeleton variant="rounded" width={233} height={80} />
                    <Skeleton variant="rounded" width={233} height={80} />

                </Grid>
            </Grid>
            <Grid container justifyContent="space-between" className="midblock" sx={{ paddingLeft: '20px', paddingRight: '20px' }}>
                {/* Left column */}
                <Grid item xs={12} md={9} order={{ xs: 2, md: 1 }} sx={{ paddingRight: { xs: '0px', md: '22px' } }}>

                    <Stack direction="column" className="midblockLeft" spacing={2}>
                        <Stack direction="column" sx={{
                            padding: '16px 23px 7px 23px',
                            borderRadius: '10px',
                            border: (theme)=>`1px solid ${theme.palette.grey[100]}`,
                            boxShadow: '10px 10px 32px 0px rgba(22, 22, 22, 0.04)',
                            marginLeft: '19px',
                            width: '100%',
                            maxWidth: '100%',
                        }}>
                            <Stack direction="row" justifyContent={"space-between"}>
                                <Stack direction={"row"} justifyContent={"space-between"}>
                                    <Skeleton variant="rounded" width={121} height={17.5} />
                                </Stack>
                                <Stack direction={"row"} justifyContent={"space-between"} gap={'18px'}>
                                    <Stack direction={"row"} justifyContent={"space-between"} gap={'18px'}>

                                        <Box display={"flex"} flexDirection={"row"} justifyContent={"center"} alignItems={"center"} gap={'5px'}>
                                            <Box sx={{ width: '8px', height: '8px' }}>
                                                <Skeleton variant="circle" width={8} height={8} />
                                            </Box>

                                        </Box>
                                        <Box display={"flex"} flexDirection={"row"} justifyContent={"center"} alignItems={"center"} gap={'5px'}>
                                            <Box sx={{ width: '8px', height: '8px' }}>
                                                <Skeleton variant="circle" width={8} height={8} />
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


                            <Grid container spacing={1}>
                                {[...Array(12)].map((_, index) => (
                                    <Grid key={index} item xs={1}>
                                        <Skeleton variant="rectangular" height={200} animation="wave" />
                                    </Grid>
                                ))}
                            </Grid>

                        </Stack>
                        <Stack direction={"column"} gap={'25.5px'}>
                            <Skeleton variant="rounded" width={33} height={17.5} animation="wave" />
                            <Stack direction={"column"} gap={'17px'}>
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

                </Grid>

                {/* Right column */}
                <Grid item xs={12} md={3} order={{ xs: 1, md: 2 }}>

                    <Stack direction="column" className="midblockRight" justifyContent={'space-between'} spacing={2}>
                        <Stack className="userProfile" direction="column" justifyContent="space-between" gap={2}>
                            <Skeleton variant="rounded" width={80} height={20} animation="wave" />




                            <Stack className="userData" direction="row" gap={2} sx={{ padding: '10px', borderRadius: '10px', background: (theme)=>theme.palette.grey[100] }} alignItems="center">
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

                                <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'left' }}>
                                    <Skeleton variant="rounded" width={60} height={20} animation="wave" />
                                    <Skeleton variant="rounded" width={80} height={20} animation="wave" />

                                </Box>
                            </Stack>

                        </Stack>
                        <Skeleton variant='wave' width={250} height={200} />
                        <Stack direction={"column"} gap={'17px'}>
                            <Skeleton variant="rounded" width={298} height={65} animation="wave" />
                            <Stack direction={'row'}>
                                <Box>
                                    <Skeleton variant="circle" width={24} height={24} animation="wave" />
                                    <Skeleton variant="rounded" width={43} height={10.8} animation="wave" />
                                </Box>

                            </Stack>
                            <Stack direction={'row'}>
                                <Box>
                                    <Skeleton variant="circle" width={24} height={24} animation="wave" />
                                    <Skeleton variant="rounded" width={43} height={10.8} animation="wave" />
                                </Box>

                            </Stack>
                            <Stack direction={'row'}>
                                <Box>
                                    <Skeleton variant="circle" width={24} height={24} animation="wave" />
                                    <Skeleton variant="rounded" width={43} height={10.8} animation="wave" />
                                </Box>

                            </Stack>
                            <Stack direction={'row'}>
                                <Box>
                                    <Skeleton variant="circle" width={24} height={24} animation="wave" />
                                    <Skeleton variant="rounded" width={43} height={10.8} animation="wave" />
                                </Box>

                            </Stack>
                            <Stack direction={'row'}>
                                <Box>
                                    <Skeleton variant="circle" width={24} height={24} animation="wave" />
                                    <Skeleton variant="rounded" width={43} height={10.8} animation="wave" />
                                </Box>

                            </Stack>
                        </Stack>
                    </Stack>

                </Grid>
            </Grid>
            <Stack direction={"column"} gap={'15px'} sx={{ marginLeft: '20px', paddingBottom: '55px', marginTop: '20px' }}>

                <Stack direction={'row'} gap='22px'>
                    <Stack
                        direction={"column"}
                        gap={'14px'}
                        sx={{
                            width: '244px',
                            minHeight: '267px',
                            padding: '0 0 15px 0',
                            borderRadius: '10px'
                        }}
                    >
                        <Box sx={{ overflow: 'hidden', height: '183px', borderRadius: '10px 10px 0px 0px' }}>
                            <Skeleton variant="rounded" width={244} height={183} animation="wave" />

                        </Box>
                        <Stack direction={'column'} gap={'10px'}>
                            <Skeleton variant="rounded" width={56} height={20} animation="wave" />
                            <Skeleton variant="rounded" width={213} height={12.3} animation="wave" />
                            <Skeleton variant="rounded" width={108} height={12.3} animation="wave" />
                        </Stack>
                    </Stack>
                    <Stack
                        direction={"column"}
                        gap={'14px'}
                        sx={{
                            width: '244px',
                            minHeight: '267px',
                            padding: '0 0 15px 0',
                            borderRadius: '10px'
                        }}
                    >
                        <Box sx={{ overflow: 'hidden', height: '183px', borderRadius: '10px 10px 0px 0px' }}>
                            <Skeleton variant="rounded" width={244} height={183} animation="wave" />

                        </Box>
                        <Stack direction={'column'} gap={'10px'}>
                            <Skeleton variant="rounded" width={56} height={20} animation="wave" />
                            <Skeleton variant="rounded" width={213} height={12.3} animation="wave" />
                            <Skeleton variant="rounded" width={108} height={12.3} animation="wave" />
                        </Stack>
                    </Stack>
                    <Stack
                        direction={"column"}
                        gap={'14px'}
                        sx={{
                            width: '244px',
                            minHeight: '267px',
                            padding: '0 0 15px 0',
                            borderRadius: '10px'
                        }}
                    >
                        <Box sx={{ overflow: 'hidden', height: '183px', borderRadius: '10px 10px 0px 0px' }}>
                            <Skeleton variant="rounded" width={244} height={183} animation="wave" />

                        </Box>
                        <Stack direction={'column'} gap={'10px'}>
                            <Skeleton variant="rounded" width={56} height={20} animation="wave" />
                            <Skeleton variant="rounded" width={213} height={12.3} animation="wave" />
                            <Skeleton variant="rounded" width={108} height={12.3} animation="wave" />
                        </Stack>
                    </Stack>
                    <Stack
                        direction={"column"}
                        gap={'14px'}
                        sx={{
                            width: '244px',
                            minHeight: '267px',
                            padding: '0 0 15px 0',
                            borderRadius: '10px'
                        }}
                    >
                        <Box sx={{ overflow: 'hidden', height: '183px', borderRadius: '10px 10px 0px 0px' }}>
                            <Skeleton variant="rounded" width={244} height={183} animation="wave" />

                        </Box>
                        <Stack direction={'column'} gap={'10px'}>
                            <Skeleton variant="rounded" width={56} height={20} animation="wave" />
                            <Skeleton variant="rounded" width={213} height={12.3} animation="wave" />
                            <Skeleton variant="rounded" width={108} height={12.3} animation="wave" />
                        </Stack>
                    </Stack>
                    <Stack
                        direction={"column"}
                        gap={'14px'}
                        sx={{
                            width: '244px',
                            minHeight: '267px',
                            padding: '0 0 15px 0',
                            borderRadius: '10px'
                        }}
                    >
                        <Box sx={{ overflow: 'hidden', height: '183px', borderRadius: '10px 10px 0px 0px' }}>
                            <Skeleton variant="rounded" width={244} height={183} animation="wave" />

                        </Box>
                        <Stack direction={'column'} gap={'10px'}>
                            <Skeleton variant="rounded" width={56} height={20} animation="wave" />
                            <Skeleton variant="rounded" width={213} height={12.3} animation="wave" />
                            <Skeleton variant="rounded" width={108} height={12.3} animation="wave" />
                        </Stack>
                    </Stack>
                    <Stack
                        direction={"column"}
                        gap={'14px'}
                        sx={{
                            width: '244px',
                            minHeight: '267px',
                            padding: '0 0 15px 0',
                            borderRadius: '10px'
                        }}
                    >
                        <Box sx={{ overflow: 'hidden', height: '183px', borderRadius: '10px 10px 0px 0px' }}>
                            <Skeleton variant="rounded" width={244} height={183} animation="wave" />

                        </Box>
                        <Stack direction={'column'} gap={'10px'}>
                            <Skeleton variant="rounded" width={56} height={20} animation="wave" />
                            <Skeleton variant="rounded" width={213} height={12.3} animation="wave" />
                            <Skeleton variant="rounded" width={108} height={12.3} animation="wave" />
                        </Stack>
                    </Stack>
                </Stack>
            </Stack>
        </Stack>);
}