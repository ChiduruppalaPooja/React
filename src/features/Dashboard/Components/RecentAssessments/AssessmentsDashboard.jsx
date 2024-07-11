import React from "react";
import { Grid, Stack, Typography } from "@mui/material";
import PerformanceGraph from "./PerformanceGraph";
import Calendar from "../Calender/Calender";
import LeaderBoard from "../LeaderBoard/LeaderBoard";
import User from "../User/User";
import TableAssessments from "./TableAssessments";
export default function AssessmentsDashboard() {
    return (
        <Grid container justifyContent="space-between" className="midblock"  sx={{paddingLeft: '20px', paddingRight: '20px'}}>
            {/* Left column */}
            <Grid item xs={12} md={9} order={{ xs: 2, md: 1 }} sx={{paddingRight: { xs: '0px', md: '22px' }}}>
                <Stack direction="column" className="midblockLeft" spacing={2}>
                    <PerformanceGraph />
                    <TableAssessments />
                </Stack>
            </Grid>

            {/* Right column */}
            <Grid item xs={12} md={3} order={{ xs: 1, md: 2 }}>
                <Stack direction="column" className="midblockRight" justifyContent={'space-between'}spacing={2} >
                    <User />
                    <Calendar />
                    <LeaderBoard displayLimit={6} />
                </Stack>
            </Grid>
        </Grid>
    );
}
