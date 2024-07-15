import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import Attempted from "../../../../components/common/Attempted";
// import redEllipse from "../../../../assets/redEllipse.svg";
import SubjectDropdown from "./SubjectDropdown";
import BlueEllipse from "../../../../assets/BlueEllipse";
import RedEllipse from "../../../../assets/RedEllipse";

export default function LabelsRecentAssessments() {
    return (

        <Stack direction="row" justifyContent={"space-between"}>
            <Stack direction={"row"} justifyContent={"space-between"}>
                <Typography variant="h5" > Recent Assessments</Typography>
            </Stack>
            <Stack direction={"row"} justifyContent={"space-between"} gap={'18px'}>
                <Stack direction={"row"} justifyContent={"space-between"} gap={'18px'}>

                    <Attempted indicator={BlueEllipse} value={'Attempted'} />
                    <Attempted indicator={RedEllipse} value={'Unattempted'} />
                </Stack>
                <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"} >
                    <SubjectDropdown />
                </Stack>


            </Stack>
        </Stack>

    );
}