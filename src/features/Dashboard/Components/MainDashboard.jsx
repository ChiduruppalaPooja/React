import React from "react";
import { Box, Stack } from "@mui/material";
import TopNavigation from "./TopNavigation/TopNavigation";
import Content from "./Analytics/Content";
import AssessmentsDashboard from "./RecentAssessments/AssessmentsDashboard";
import Courses from "./Courses/Courses";

export default function MainDashboard() {
    return (
       
            <Stack direction="column" sx={{background: (theme)=> theme.palette.primary.contrastText }}>
                <TopNavigation />
                <Box sx={{ background: (theme)=>theme.palette.grey[200], height: '1px' }}></Box>
                <Content />
               <AssessmentsDashboard />
               <Courses />
            </Stack>
       


    );
}