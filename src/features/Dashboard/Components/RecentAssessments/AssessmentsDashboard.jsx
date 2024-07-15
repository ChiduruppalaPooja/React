import React, { useState, useEffect } from "react";
import { Grid, Stack, Typography, Skeleton } from "@mui/material";
import PerformanceGraph from "./PerformanceGraph";
import Calendar from "../Calender/Calender";
import LeaderBoard from "../LeaderBoard/LeaderBoard";
import User from "../User/User";
import TableAssessments from "./TableAssessments";
import LeftGridSkeleton from "../../../../components/common/LeftGridSkeleton";
import RightGridSkeleton from "../../../../components/common/RightGridSkeleton";

export default function AssessmentsDashboard({ fetchAssessmentsData }) {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 200);
        return () => clearTimeout(timer);
    }, []);





    return (
        <Grid container justifyContent="space-between" className="midblock" sx={{ paddingLeft: '20px', paddingRight: '20px' }}>
            {/* Left column */}
            <Grid item xs={12} md={9} order={{ xs: 2, md: 1 }} sx={{ paddingRight: { xs: '0px', md: '22px' } }}>
                {!loading ? (
                    <Stack direction="column" className="midblockLeft" spacing={2}>
                        <PerformanceGraph />
                        <TableAssessments fetchAssessmentsData={fetchAssessmentsData} />
                    </Stack>
                ) : (
                    <LeftGridSkeleton />
                )}
            </Grid>

            {/* Right column */}
            <Grid item xs={12} md={3} order={{ xs: 1, md: 2 }}>
                {!loading ? (
                    <Stack direction="column" className="midblockRight" justifyContent={'space-between'} spacing={2}>
                        <User />
                        <Calendar />
                        <LeaderBoard displayLimit={6} />
                    </Stack>
                ) : (
                    <RightGridSkeleton />
                )}
            </Grid>
        </Grid>
    );
}
