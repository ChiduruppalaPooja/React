import React from "react";
import { Stack, Box, Skeleton, Grid, Typography } from "@mui/material";


export default function DashboardCourseSkeleton(){
    return(
        <Stack direction={"column"} gap={'15px'} sx={{ marginLeft: '20px', paddingBottom: '55px', marginTop: '20px' }}>

        <Stack direction={'row'} gap='22px'>
            <Stack direction="row" gap="14px">
                {[...Array(4)].map((_, index) => (
                    <Stack
                        key={index}
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
                ))}
            </Stack>




        </Stack>
    </Stack>
    );
}