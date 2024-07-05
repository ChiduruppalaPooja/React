import React from "react";
import CustomCard from "../../../../components/common/CustomCard";
import AssessmentDetailCard from "../../../../components/common/AssessmentDetailCard";
import { Stack, Typography, Box } from "@mui/material";
import { useSelector } from "react-redux";

export default function Content() {
    const dashboardData = useSelector((state)=> state.dashboard.analyticsData);
    const dashboardDataKeys = Object.keys(dashboardData);
    const dashboardDataValues = Object.values(dashboardData);
    

    return (
        <>
            <Stack direction="column" justifyContent="space-between" sx={{paddingLeft: '18px', background: (theme)=> theme.palette.primary.contrastText }}>
                <Typography variant="h5" textAlign="start" fontWeight="600" sx={{marginTop: '12px'}}>
                    Dashboard
                </Typography>
                <Box display={'flex'} flexDirection={'row'}  gap={'24px'}
                    sx={{
                        padding: '0px',
                        margin: '0px',
                        marginTop: '20px',
                        marginBottom: '15px',
                        alignItems: 'center',
                        flexWrap: {
                            xs: 'wrap',
                            md: 'wrap',
                            lg: 'nowrap'
                        },
                       '@media (min-width: 1226px) and ( max-width: 1250px)': {
                            flexWrap: 'wrap'
                        }
                    }}
                >
                    {
                        dashboardDataValues.map((item, index) => {
                            return (
                                <Box sx={{
                                    margin: '0px',
                                    width: '230px',
                                    height: 'auto',
                                    
                                }} key={index}>
                                    <AssessmentDetailCard
                                        icon={index}
                                        iconBgColor={index}
                                        title={dashboardDataKeys[index].charAt(0).toUpperCase() + dashboardDataKeys[index].slice(1)}
                                        contentMagnitude={item}
                                    />
                                </Box>
                            );
                        })
                    }
                </Box>
            </Stack>
        </>
    );
}
