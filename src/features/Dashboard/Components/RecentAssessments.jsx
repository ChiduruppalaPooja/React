import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import blueEllipse from "../../../assets/blueEllipse.svg";
import Attempted from "../../../components/common/Attempted";
import redEllipse from "../../../assets/redEllipse.svg";
import SubjectDropdown from "./SubjectDropdown";

export default function RecentAssessments() {
    return (

        <Stack direction="row" justifyContent={"space-between"}>
            <Stack direction={"row"} justifyContent={"space-between"}>
                <Typography variant="h5" > Recent Assessments</Typography>
            </Stack>
            <Stack direction={"row"} justifyContent={"space-between"} gap={'18px'}>
                <Stack direction={"row"} justifyContent={"space-between"} gap={'18px'}>

                    <Attempted indicator={blueEllipse} value={'Attempted'} />
                    <Attempted indicator={redEllipse} value={'Unattempted'} />
                </Stack>
                <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"}>
                    <SubjectDropdown />
                </Stack>


            </Stack>
        </Stack>

    );
}