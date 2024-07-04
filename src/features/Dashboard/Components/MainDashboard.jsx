import React from "react";
import { Box, Stack } from "@mui/material";
import TopNavigation from "./TopNavigation";
import Content from "./Content";
import AssessmentsDashboard from "./AssessmentsDashboard";
export default function MainDashboard() {
    return (
       
            <Stack direction="column" sx={{background: (theme)=> theme.palette.primary.contrastText }}>
                <TopNavigation />
                <Box sx={{ background: (theme)=>theme.palette.grey[200], height: '1px' }}></Box>
                <Content />
               <AssessmentsDashboard />
            </Stack>
       


    );
}