import React from "react";
import CustomCard from "../../../../components/common/CustomCard";
import AssessmentDetailCard from "../../../../components/common/AssessmentDetailCard";
import { Grid, Typography } from "@mui/material";
import { useSelector } from "react-redux";
export default function Content() {
    const dashboardData = useSelector((state) => state.dashboard.analyticsData);
    const dashboardDataKeys = Object.keys(dashboardData);
    const dashboardDataValues = Object.values(dashboardData);

    return (
        <Grid container direction="column" justifyContent="space-between" sx={{ paddingLeft: '18px', background: (theme) => theme.palette.primary.contrastText, paddingRight: '26px' }}>
            <Typography variant="h5" textAlign="start" fontWeight="600" sx={{ marginTop: '12px' }}>
                Dashboard
            </Typography>
            <Grid container spacing={2} justifyContent="flex-start" sx={{ marginTop: '20px', marginBottom: '15px' }}>
                {dashboardDataValues.map((item, index) => (
                    <Grid item xs={12} md={6} lg={12/5} xl={12/5} key={index} sx={{  "&.MuiGrid-item": { paddingTop: '0'}}}>
                        <AssessmentDetailCard
                            icon={index}
                            iconBgColor={index}
                            title={dashboardDataKeys[index].charAt(0).toUpperCase() + dashboardDataKeys[index].slice(1)}
                            contentMagnitude={item}
                        />
                    </Grid>
                ))}
            </Grid>
        </Grid>
    );
}
