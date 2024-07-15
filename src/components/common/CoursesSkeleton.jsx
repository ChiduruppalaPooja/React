import React from "react";
import { Stack, Box, Skeleton } from "@mui/material";
import BackIcon from "../../assets/BackIcon";
import { useNavigate } from "react-router-dom";

export default function CoursesSkeleton(){
    const navigate = useNavigate();
    const handleBackClick = () => {
        navigate(-1);
    };
    return(
        <Stack direction={"column"} sx={{marginLeft: '111.5px'}}>
                {/* course detail */}
                <Stack direction={"row"} gap={'29.5px'} >
                    <Box
                        sx={{
                            
                            marginTop: '40px',
                            cursor: 'pointer'
                        }}
                        onClick={handleBackClick}
                    >
                        <BackIcon />
                    </Box>
                    <Stack direction={'column'} alignItems={'flex-start'} sx={{ marginTop: '34.29px' }}>
                        <Stack direction={'row'} gap={'20px'} alignItems={'center'}>
                            <Skeleton variant="rounded" width={685} height={22} />
                            <Skeleton variant="rounded" width={63} height={20} />
                        </Stack>
                        <Stack direction={'row'} gap={'12px'} alignItems={'center'}  sx={{ marginTop: '29.19px' }}>

                            <Skeleton variant="rounded" width={212} height={3} />
                        </Stack>
                        <Stack direction={'column'} alignItems={'flex-start'} gap={'10px'} sx={{ marginTop: '65px' }}>

                            <Skeleton variant="rounded" width={736} height={12.3} />
                            <Skeleton variant="rounded" width={559} height={12.3} />
                            <Skeleton variant="rounded" width={926} height={12.3} />
                            <Skeleton variant="rounded" width={945} height={12.3} />
                            <Skeleton variant="rounded" width={804} height={12.3} />
                            <Skeleton variant="rounded" width={549} height={12.3} />
                            <Skeleton variant="rounded" width={594} height={12.3} />
                            <Skeleton variant="rounded" width={949} height={12.3} />
                        </Stack>
                    </Stack>
                </Stack>
                {/* cards row */}
                <Stack direction={'column'} gap={'12px'} sx={{ marginTop: '47px', textAlign: 'left', marginLeft: '56px' }}>
                    <Skeleton variant="rounded" width={140} height={21} />
                    <Stack direction={'row'} gap={'22px'} alignItems={'center'}>
                        <Skeleton variant="rounded" width={285} height={80} />
                        <Skeleton variant="rounded" width={285} height={80} />
                        <Skeleton variant="rounded" width={285} height={80} />
                    </Stack>
                </Stack>
                {/* units */}
                <Stack direction={'row'} gap={'30px'} sx={{ marginTop: '20px', textAlign: 'left', marginLeft: '56px' }}>
                    <Stack direction={'row'} gap={'35px'} alignItems={'center'}>
                        <Skeleton variant="rounded" width={91} height={32} />
                        <Skeleton variant="rounded" width={91} height={32} />
                        <Skeleton variant="rounded" width={91} height={32} />
                    </Stack>
                    <Stack direction={"row"} gap={'11.38px'} sx={{ width: '144px', background: (theme) => theme.palette.grey[100], border: '1px solid #F4F6F8', borderRadius: '6.64px', padding: ' 5px 7px' }} alignItems={'center'}>
                        <Skeleton variant="rounded" width={184} height={32} />
                    </Stack>
                </Stack>
                <Box>
                <Stack direction="column" justifyContent={"flex-start"}sx={{  marginLeft: '56px', width: '506px', marginBottom: '16px', marginTop: '27px' }}>
                    <Skeleton variant="rounded" width={285} height={37} />
                    <Stack direction="column"  sx={{ marginLeft: '26px', paddingBottom: '10px' }}>
                        <Skeleton variant="rounded" width={285} height={27} sx={{ marginTop: '8px'}} />
                        <Skeleton variant="rounded" width={285} height={27} sx={{ marginTop: '8px'}}/>

                    </Stack>

                </Stack>
                </Box>


                
            </Stack>
    );
}