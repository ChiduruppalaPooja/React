import React from "react";
import { Stack } from "@mui/material";
import RecentAssessments from "./RecentAssessments";
import MuiColumnChart from "../../../components/common/MuiColumnChart";

export default function AssessmentsDashboard() {
    return (

        <Stack direction="row" justifyContent={"space-between"}>
            <Stack direction={"column"} justifyContent={"space-between"}>
                <Stack direction={"column"} sx={{
                    padding: ' 16px 23px 7px 23px', borderRadius: '10px',
                    border: '1px solid #F4F6F8',
                    boxShadow: '10px 10px 32px 0px rgba(22, 22, 22, 0.04)'
                }}>
                    <RecentAssessments />
                </Stack>
            </Stack>
            <Stack direction={"column"} justifyContent={"space-between"}>

            </Stack>
        </Stack>

    );
}