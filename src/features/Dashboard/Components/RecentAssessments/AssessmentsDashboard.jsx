import React from "react";
import { Stack, Typography } from "@mui/material";
import PerformanceGraph from "./PerformanceGraph";
import Calendar from "../Calender/Calender";
import LeaderBoard from "../LeaderBoard/LeaderBoard";
import User from "../User/User";
import TableAssessments from "./TableAssessments";
export default function AssessmentsDashboard() {
   

    return (
        <Stack direction="row" justifyContent="space-between" className="midblock">
            <Stack direction="column" className="midblockLeft">
                <PerformanceGraph />
                <TableAssessments />
            </Stack>
            <Stack className="midblockRight" direction="column" justifyContent={"space-between"} gap={'30px'}>
                <User />
                <Calendar />
                <LeaderBoard displayLimit={6}/>
            </Stack>
        </Stack>
    );
}
